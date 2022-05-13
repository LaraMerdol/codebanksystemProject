package com.example.demo.repo;
import com.example.demo.model.Activity;
import com.example.demo.model.Discussion;
import com.example.demo.model.Reply;
import com.example.demo.model.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;


public interface ActivityRepository extends CrudRepository<Activity, Integer> {
    @Query(value = "SELECT  0 AS clazz_,activity_id,description, duration, category_category_id,status FROM activities where activity_id = :id", nativeQuery = true)
    public Optional<Activity> getActivity(@Param("id") int id);
    @Query(value = "SELECT  0 AS clazz_,activity_id,description, duration, category_category_id,status FROM activities ", nativeQuery = true)
    public List<Activity> getAllActivity();
    @Query(value="Select  0 AS clazz_,activity_id,description, duration, category_category_id,status from activities where category_category_id in (select category.category_id from category where name = :name)", nativeQuery = true)
    public List<Activity> getCategoryActivity(@Param("name") String name);
}