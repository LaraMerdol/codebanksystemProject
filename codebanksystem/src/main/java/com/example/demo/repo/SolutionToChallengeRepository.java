package com.example.demo.repo;
import com.example.demo.model.*;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;


public interface SolutionToChallengeRepository extends CrudRepository<SolutionToChallenge, Integer> {

}
