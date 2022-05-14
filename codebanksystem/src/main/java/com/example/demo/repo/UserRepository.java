package com.example.demo.repo;
import java.util.Optional;

import com.example.demo.model.User;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends CrudRepository<User, String>{
    @Query(value="SELECT user_id, email, password from user where user_id = :id", nativeQuery = true)
    public Optional<User> getUser(@Param("id") String id);
}
