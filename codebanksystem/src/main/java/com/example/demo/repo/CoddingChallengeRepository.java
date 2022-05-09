package com.example.demo.repo;
import com.example.demo.model.Activity;
import com.example.demo.model.CoddingChallenge;
import com.example.demo.model.Discussion;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;


public interface CoddingChallengeRepository extends CrudRepository<CoddingChallenge, Integer> {

    @Query(value = "Select * from codding_challenges where activity_id = :id", nativeQuery = true)
    Optional<CoddingChallenge> getCoddingChallenge(@Param("id") int id);
    @Query(value="Select  0 AS clazz_,activity_id,description, duration, category_category_id,status from activities where category_category_id in (select category_id from category where name = :name)", nativeQuery = true)
    public List<CoddingChallenge> getCategoryActivity(@Param("name") String name);
}

