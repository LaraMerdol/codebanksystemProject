package com.example.demo.controller;

import com.example.demo.model.Discussion;
import com.example.demo.model.Reply;
import com.example.demo.model.User;
import com.example.demo.repo.DiscussionRepository;
import com.example.demo.repo.ReplyRepository;
import com.example.demo.repo.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Optional;

@Controller
public class DiscussionController {
    @Autowired
    private DiscussionRepository disRepo;
    @Autowired
    private ReplyRepository replyRepo;
    @Autowired
    private UserRepository userRepo;

    @PostMapping(path="/createDiscussion")
    public @ResponseBody Discussion createDiscussion( @RequestParam String header, @RequestParam String text, @RequestParam String user_id) {
        System.out.println("Come on!");
        Optional<User> user = userRepo.findById(user_id);
        if (user.isEmpty())
            return null;
        System.out.println("Come on!");
        return disRepo.save(new Discussion(header, text, user.get()));
    }

    @PostMapping(path="/createReply")
    @ResponseBody
    public Reply createReply(@RequestParam int discussion_id, @RequestParam String text, @RequestParam String user_id) {
        Optional<User> user = userRepo.findById(user_id);
        Optional<Discussion> dis = disRepo.findById(discussion_id);
        if (user.isEmpty() || dis.isEmpty())
            return null;
        
        return replyRepo.save(new Reply(dis.get(), text, user.get()));
    }    

    @PostMapping(path="/deleteReply")
    @ResponseBody
    public String deleteReply(@RequestParam int reply_id, @RequestParam String user_id) {
        Optional<Reply> reply = replyRepo.findById(reply_id);
        if (reply.isEmpty() || reply.get().getCreator().getUser_id() != user_id)
            return "failed";
        replyRepo.deleteById(reply_id);
        return "successful";
    }

    @PostMapping(path="/deleteDiscussion")
    @ResponseBody
    public String deleteDiscussion(@RequestParam int discussion_id, @RequestParam String user_id) {
        Optional<Discussion> reply = disRepo.findById(discussion_id);
        if (reply.isEmpty() || reply.get().getCreator().getUser_id() != user_id)
            return "failed";
        disRepo.deleteById(discussion_id);
        return "successful";
    }
}
