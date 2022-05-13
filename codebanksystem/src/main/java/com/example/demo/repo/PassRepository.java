package com.example.demo.repo;

import com.example.demo.model.CoddingChallenge;
import com.example.demo.model.Pass;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PassRepository extends CrudRepository<Pass, Integer> {

    @Query(value="SELECT  0 AS clazz_, pass_id, pass, solution_id, test_id from pass where solution_id in (SELECT solution_id from solution_to_challenge where coder_user_id = :user_id && challenge_activity_id = :activity_id )", nativeQuery = true)
    public List<Pass> getPassForChallengeCoder(@Param("user_id") String user_id,@Param("activity_id") int activity_id );
    @Query(value="SELECT  0 AS clazz_, pass_id, pass, solution_id, test_id from pass where solution_id in (SELECT solution_id from solution_to_challenge where coder_user_id = :user_id)", nativeQuery = true)
    public List<Pass> getAllPassForCoder(@Param("user_id") String user_id);
    @Query(value="SELECT  0 AS clazz_, pass_id, pass, solution_id, test_id from pass where solution_id in (SELECT solution_id from solution_to_challenge where challenge_activity_id = :activity_id )", nativeQuery = true)
    public List<Pass> getPassForChallenge(@Param("activity_id") int activity_id );
}
