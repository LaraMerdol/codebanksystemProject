package com.example.demo.repo;

import com.example.demo.model.Editor;

import org.springframework.data.repository.CrudRepository;

public interface EditorRepository extends CrudRepository<Editor, String> {
    
}
