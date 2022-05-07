package com.example.demo.controller;
import com.example.demo.model.Activity;
import com.example.demo.model.CoddingChallenge;
import com.example.demo.model.NonCodingQuestion;
import com.example.demo.model.Category;
import com.example.demo.model.TestCase;
import com.example.demo.repo.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;


import java.util.List;
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

    @PostMapping(path="/addCoddingChallenge")
    public @ResponseBody CoddingChallenge addCoddingChallenge(@RequestParam int category_id, @RequestParam String description, @RequestParam String status,
                                        @RequestParam int duration, @RequestParam String level, @RequestParam String codding_language ) {
        Optional<Category> category = categoryRepository.findById(category_id);
        if (category.isEmpty())
            return null;
        System.out.println("Come on!");
        CoddingChallenge coddingChallenge = new CoddingChallenge(category.get(), description, status,duration, level,codding_language );
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
    public TestCase addTestCase( @RequestParam String test_code, @RequestParam int challenge_id) {
        Optional<CoddingChallenge> challenge = coddingChallengeRepository.findById(challenge_id);
        if (challenge.isEmpty())
            return null;

        return testCaseRepository.save(new TestCase( test_code,challenge.get()));
    }

}
