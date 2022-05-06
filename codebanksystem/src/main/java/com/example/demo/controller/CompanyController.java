package com.example.demo.controller;

import com.example.demo.model.Company;
import com.example.demo.repo.CompanyRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class CompanyController {
    @Autowired
    private CompanyRepository compRepo;

    @RequestMapping("/company/all")
    public Iterable<Company> getAll() {
        return compRepo.findAll();
    }
}
