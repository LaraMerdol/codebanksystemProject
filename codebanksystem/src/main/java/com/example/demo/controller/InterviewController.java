package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import com.example.demo.model.Interview;
import com.example.demo.model.Participant;
import com.example.demo.repo.InterviewRepo;
import com.example.demo.repo.ParticipantRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class InterviewController {
    @Autowired
    private InterviewRepo iRepo;
    @Autowired
    private ParticipantRepo pRepo;

    @RequestMapping("/displayInterview")
    @ResponseBody
    public Interview getInterviews(int id) {
        Optional<Interview> inter = iRepo.findById(id);
        if (inter.isEmpty())
            return null;
        return inter.get();
    }
    
    @PostMapping("/addInterview")
    @ResponseBody
    public Interview addInterview(String date, int difficulty, int duration,
                String participant1, String participant2) {
        Interview inter = new Interview(date, difficulty, duration);
        inter = iRepo.save(inter);
        Participant p = new Participant(inter.getId(), participant1, participant2);
        pRepo.save(p);
        return inter;
    }

    @RequestMapping("/displayParticipant")
    @ResponseBody
    public Participant getParticipant(int id) {
        Optional<Participant> inter = pRepo.findById(id);
        if (inter.isEmpty())
            return null;

        return inter.get();
    }

    @RequestMapping("/participantInterviews")
    @ResponseBody
    public List<Participant> getParticipant(String p) {
        List<Participant> inter = pRepo.getInterviews(p);
        if (inter.isEmpty())
            return null;

        return inter;
    }
}

