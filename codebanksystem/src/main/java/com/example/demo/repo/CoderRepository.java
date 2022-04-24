package com.example.demo.repo;

import com.example.demo.model.Coder;

import org.springframework.data.repository.CrudRepository;

public interface CoderRepository extends CrudRepository<Coder, String> {
    
}
