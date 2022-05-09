package com.example.demo.repo;
import com.example.demo.model.CoddingContest;

import org.springframework.data.repository.CrudRepository;

import java.util.Set;

public interface CoddingContestRepository extends CrudRepository<CoddingContest, Integer> {

}
