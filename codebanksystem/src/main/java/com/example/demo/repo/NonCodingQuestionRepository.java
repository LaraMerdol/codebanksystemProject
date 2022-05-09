package com.example.demo.repo;
import com.example.demo.model.CoddingChallenge;
import com.example.demo.model.NonCodingQuestion;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface NonCodingQuestionRepository extends CrudRepository <NonCodingQuestion, Integer>{
    @Query(value = "Select * from non_coding_questions  where activity_id = :id", nativeQuery = true)
    Optional<NonCodingQuestion> getNonCodingQuestion(@Param("id") int id);
}
