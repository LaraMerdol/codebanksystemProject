package com.example.demo.repo;
import com.example.demo.model.SolutionToChallenge;
import com.example.demo.model.Coder;
import com.example.demo.model.CoddingChallenge;
import org.springframework.data.repository.CrudRepository;


public interface SolutionToChallengeRepository extends CrudRepository<SolutionToChallenge, Integer> {
}
