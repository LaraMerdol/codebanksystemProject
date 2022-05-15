package com.example.demo.repo;

import com.example.demo.model.Interview;

import org.springframework.data.repository.CrudRepository;

public interface InterviewRepo extends CrudRepository<Interview, Integer>{
    
}
