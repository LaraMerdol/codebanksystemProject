package com.example.demo.controller;

import java.util.List;

import com.example.demo.model.Coder;
import com.example.demo.repo.CoderRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class CoderController {
    @Autowired
    private CoderRepository coderRepo;

    @RequestMapping("/coder/search")
    @ResponseBody
    public List<Coder> getCoders(@RequestParam String name) {
        List<Coder> coders = coderRepo.getCodersByName(name);
        return coders;
    }

    @RequestMapping("/coder/all")
    @ResponseBody
    public Iterable<Coder> getAllCoders() {
        return coderRepo.findAll();
    }
}
