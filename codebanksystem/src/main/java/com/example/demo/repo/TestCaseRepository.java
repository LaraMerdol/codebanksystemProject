package com.example.demo.repo;

import com.example.demo.model.Pass;
import com.example.demo.model.TestCase;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TestCaseRepository extends CrudRepository<TestCase, Integer> {
    @Query(value="SELECT  0 AS clazz_, test_id,test_code,challenge_activity_id from test_cases where challenge_activity_id= :activity_id", nativeQuery = true)
    public List<TestCase> getTestOfChallenge(@Param("activity_id") int activity_id );
}
