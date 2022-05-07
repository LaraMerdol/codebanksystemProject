package com.example.demo.repo;
import com.example.demo.model.Activity;
import org.springframework.data.repository.CrudRepository;


public interface ActivityRepository extends CrudRepository<Activity, Integer> {

}