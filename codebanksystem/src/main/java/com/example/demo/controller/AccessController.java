package com.example.demo.controller;

import java.util.Optional;

import com.example.demo.model.Coder;
import com.example.demo.model.Company;
import com.example.demo.model.Editor;
import com.example.demo.model.User;
import com.example.demo.repo.CoderRepository;
import com.example.demo.repo.CompanyRepository;
import com.example.demo.repo.EditorRepository;
import com.example.demo.repo.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.*;

@Controller
public class AccessController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private CoderRepository coderRepository;
    @Autowired
    private CompanyRepository companyRepository;
    @Autowired
    private EditorRepository editorRepository;

    @GetMapping("/") 
    @ResponseBody
    public String home(){
        return  "Welcome home";
    }
    
    @GetMapping("/con") 
    @ResponseBody
    public String con(){
        return  "cond";
    }

    @PostMapping(path="/addCoder")
    public @ResponseBody Coder addCoder(@RequestParam String id, @RequestParam String password, @RequestParam String email, 
                            @RequestParam String phone, @RequestParam String name) {
        Coder coder = new Coder(id, password, email, phone, name);
        User user = new User(id, password, email);
        userRepository.save(user);
        return coderRepository.save(coder);
    }

    @PostMapping(path="/addCompany")
    public @ResponseBody Company addCompany (@RequestParam String id, @RequestParam String password, @RequestParam String email, 
                                            @RequestParam String name, @RequestParam int workerCount, @RequestParam int hiringStatus,
                                            @RequestParam int budget, @RequestParam int avgRate) {
        Company company = new Company(id, password, email, name, workerCount, hiringStatus, budget, avgRate);
        User user = new User(id, password, email);
        userRepository.save(user);
        System.out.print("Added Company");
        return companyRepository.save(company);
    }

    @PostMapping(path="/addEditor")
    public @ResponseBody Editor addEditor(@RequestParam String id, @RequestParam String password, @RequestParam String email, 
                            @RequestParam String name, @RequestParam String type) {
        Editor editor = new Editor(id, password, email, name, type);
        User user = new User(id, password, email);
        userRepository.save(user);
        System.out.print("Added Editor");
        return editorRepository.save(editor);
    }

    @GetMapping("company/displayProfile") 
    @ResponseBody
    public Company getCompany(@RequestParam String id){
        Optional<Company> user = companyRepository.findById(id);
        if (user.isEmpty())
            return  null;

        return user.get();
    }

    @GetMapping("coder/displayProfile") 
    @ResponseBody
    public Coder getCoder(@RequestParam String id){
        Optional<Coder> user = coderRepository.findById(id);
        if (user.isEmpty())
            return  null;
            
        return user.get();
    }

    @GetMapping("editor/displayProfile") 
    @ResponseBody
    public Editor getEditor(@RequestParam String id){
        Optional<Editor> user = editorRepository.findById(id);
        if (user.isEmpty())
            return  null;
            
        return user.get();
    }
}


