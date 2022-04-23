package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class AccessController {
    @GetMapping("/") 
    @ResponseBody
    public String home(){
        return  "Welcome home";
    }

    @GetMapping("/home") 
    @ResponseBody
    public String con(){
        return  "cond";
    }
}
