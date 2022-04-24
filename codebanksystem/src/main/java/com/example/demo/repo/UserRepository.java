package com.example.demo.repo;
import com.example.demo.model.User;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, String>{
    
}
