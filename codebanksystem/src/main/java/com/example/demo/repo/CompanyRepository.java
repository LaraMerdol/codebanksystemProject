package com.example.demo.repo;

import com.example.demo.model.Company;

import org.springframework.data.repository.CrudRepository;

public interface CompanyRepository extends CrudRepository<Company, String>{
    
}
