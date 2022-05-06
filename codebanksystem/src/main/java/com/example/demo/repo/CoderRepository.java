package com.example.demo.repo;

import java.util.List;
import java.util.Optional;

import com.example.demo.model.Coder;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface CoderRepository extends CrudRepository<Coder, String> {

    @Query(value = "SELECT user_id, email, fullname, phonestring from coder where fullname = :name", nativeQuery = true)
    public List<Coder> getCodersByName(@Param("name") String name);    
}
