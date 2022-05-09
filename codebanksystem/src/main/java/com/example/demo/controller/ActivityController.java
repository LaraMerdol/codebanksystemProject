package com.example.demo.controller;
import com.example.demo.model.*;
import com.example.demo.repo.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Random;

import java.time.LocalDate;
import java.util.Optional;

@Controller
public class ActivityController {
    @Autowired
    private ActivityRepository activityRepository;
    @Autowired
    private CoddingChallengeRepository coddingChallengeRepository;
    @Autowired
    private NonCodingQuestionRepository nonCodingQuestionRepository;
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private TestCaseRepository testCaseRepository;
    @Autowired
    private CoddingContestRepository coddingContestRepository;
    @Autowired
    private SolutionToChallengeRepository solutionToChallengeRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private CoderRepository coderRepository;
    @Autowired
    private PassRepository passRepository;
    @Autowired
    private LocalDateConverterRepository localDateConverterRepository;

    @PostMapping(path="/addCoddingChallenge")
    public @ResponseBody CoddingChallenge addCoddingChallenge(@RequestParam int category_id, @RequestParam String description, @RequestParam String status,
                                        @RequestParam int duration, @RequestParam String level, @RequestParam String codding_language ) {
        Optional<Category> category = categoryRepository.findById(category_id);
        if (category.isEmpty())
            return null;
        System.out.println("Come on!");
        CoddingChallenge coddingChallenge = new CoddingChallenge(category.get(), description, status,duration, level,codding_language);
        Activity activity = new Activity(category.get(), description, status,duration);
        activityRepository.save(activity);
        System.out.print("Added CoddingChallenge");
        return coddingChallengeRepository.save(coddingChallenge);
    }
    @PostMapping(path="/addNonCodingQuestion")
    public @ResponseBody NonCodingQuestion addNonCodingQuestion(@RequestParam int category_id, @RequestParam String description, @RequestParam String status,
                                                              @RequestParam int duration, @RequestParam String question_text ) {
        Optional<Category> category = categoryRepository.findById(category_id);
        if (category.isEmpty())
            return null;
        System.out.println("Come on!");
        NonCodingQuestion nonCodingQuestion = new NonCodingQuestion(category.get(), description, status,duration, question_text );
        Activity activity = new Activity(category.get(), description, status,duration);
        activityRepository.save(activity);
        System.out.print("Added Non Codding Question");
        return nonCodingQuestionRepository.save(nonCodingQuestion);
    }
    @PostMapping(path="/addCategory")
    public @ResponseBody Category addCategory(@RequestParam String name ) {
        System.out.print("Come Here");
        Category category = new Category(name);
        System.out.print("Added CoddingChallenge");
        return categoryRepository.save(category);
    }

    @PostMapping(path="/addTestCase")
    @ResponseBody
    public TestCase addTestCase( @RequestParam String test_code, @RequestParam int activity_id) {
        Optional<CoddingChallenge> challenge = coddingChallengeRepository.findById(activity_id);
        if (challenge.isEmpty())
            return null;
        System.out.print("Added TestCase");
        return testCaseRepository.save(new TestCase( test_code,challenge.get()));
    }
    @PostMapping(path="/addContest")
    public @ResponseBody CoddingContest addContest (@RequestParam String name, @RequestParam int duration, @RequestParam String startDate,
                                                                @RequestParam String endDate) {

        LocalDate startDate1 = localDateConverterRepository.convert(startDate);
        LocalDate endDate1 =  localDateConverterRepository.convert(endDate);
        CoddingContest coddingContest = new CoddingContest(name, duration, startDate1,endDate1);
        System.out.print("Added Contest");
        return coddingContestRepository.save(coddingContest);
    }

    @PostMapping(path="/addChallengeToTheContest")
    public @ResponseBody boolean addChallengeToTheContest (@RequestParam int contest_id,@RequestParam int activity_id ) {

        Optional<CoddingChallenge> challenge = coddingChallengeRepository.findById(activity_id);
        Optional<CoddingContest> contest = coddingContestRepository.findById(contest_id);
        if (challenge.isEmpty() || contest.isEmpty() ){
            return false;
        }
        System.out.print("Added Challenge To Contest");
        contest.get().getCoddingChallenges().add(challenge.get());
        coddingContestRepository.save(contest.get());
        return true ;
    }


    @PostMapping(path="/answerChallenge")
    @ResponseBody
    public SolutionToChallenge answerChallenge(@RequestParam int activity_id, @RequestParam String solution_text, @RequestParam String user_id) {
        Optional<Coder> coder = coderRepository.getCoder(user_id);
        Optional<CoddingChallenge> challenge = coddingChallengeRepository.getCoddingChallenge(activity_id);
        if (coder.isEmpty() || challenge.isEmpty()){
            System.out.print("Cannot found the objects");
            return null;
        }
        return solutionToChallengeRepository.save(new SolutionToChallenge(challenge.get(), solution_text, coder.get()));
    }
    @PostMapping(path="/passTest")
    @ResponseBody
    public Pass passTest(@RequestParam int test_id, @RequestParam int solution_id) {
        Optional<TestCase> test = testCaseRepository.findById(test_id);
        Optional<SolutionToChallenge> solution = solutionToChallengeRepository.findById(solution_id);
        if (test.isEmpty() || solution.isEmpty())
            return null;
        Random random = new Random();
        Boolean isPass =random.nextBoolean();
        Pass pass = new Pass(test.get(),solution.get(),isPass);
        return passRepository.save(pass);
    }


    @GetMapping(path="/getActivity")
    @ResponseBody
    public String getActivity (@RequestParam int id) {
        Optional<Activity> activity = activityRepository.getActivity(id);
        if (activity.isEmpty())
            return  null;

        return activity.get().toString();
    }
    @GetMapping(path="/getAllActivity")
    @ResponseBody
    public String getAllActivity () {
        List<Activity> activities = activityRepository.getAllActivity();
        String listActivity = "";
        for(int i=0;i<activities.size();i++){
            listActivity=listActivity+activities.get(i).toString();
        }
        return listActivity;
    }
    @GetMapping(path="/getActivityForCategory")
    @ResponseBody
    public String getActivityForCategory (@RequestParam String name) {
        List<Activity> activities = activityRepository.getCategoryActivity(name);
        String listActivity = "";
        for(int i=0;i<activities.size();i++){
            listActivity=listActivity+activities.get(i).toString();
        }
        return listActivity;
    }
    @GetMapping(path="/getChallengesForCategory")
    @ResponseBody
    public String getChallengesForCategory (@RequestParam String name) {
        List<CoddingChallenge> activities = coddingChallengeRepository.getCategoryActivity(name);
        String listActivity = "";
        for(int i=0;i<activities.size();i++){
            listActivity=listActivity+activities.get(i).toString();
        }
        return listActivity;
    }
    @GetMapping(path="/getNonCodingsForCategory")
    @ResponseBody
    public String getNonCodingsForCategory (@RequestParam String name) {
        List<NonCodingQuestion> activities = nonCodingQuestionRepository.getCategoryActivity(name);
        String listActivity = "";
        for(int i=0;i<activities.size();i++){
            listActivity=listActivity+activities.get(i).toString();
        }
        return listActivity;
    }

}
