package com.example.demo.repo;

import com.example.demo.model.Discussion;
import com.example.demo.model.SolveNonCodding;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SolveNonCoddingRepository  extends CrudRepository<SolveNonCodding, Integer> {
    @Query(value="Select solution_id, solution_text, coder_user_id, question_activity_id  from solve_non_codding where question_activity_id = :id", nativeQuery = true)
    public List<SolveNonCodding> getAll(@Param("id") int id);
}
