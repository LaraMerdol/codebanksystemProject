package com.example.demo.repo;
import com.example.demo.model.CoddingChallenge;
import com.example.demo.model.Discussion;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.Optional;


public interface CoddingChallengeRepository extends CrudRepository<CoddingChallenge, Integer> {

    @Query(value = "Select * from codding_challenges where activity_id = :id", nativeQuery = true)
    Optional<CoddingChallenge> getCoddingChallenge(@Param("id") int id);

}

