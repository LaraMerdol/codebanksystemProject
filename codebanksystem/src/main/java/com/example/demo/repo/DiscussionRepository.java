package com.example.demo.repo;

import com.example.demo.model.Discussion;

import org.springframework.data.repository.CrudRepository;

public interface DiscussionRepository extends CrudRepository<Discussion, Integer>{
    
}
