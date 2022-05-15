package com.example.demo.repo;
import java.util.Optional;

import com.example.demo.model.User;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends CrudRepository<User, String>{
    
    @Query(value="SELECT user_id, email, password from user where user_id = :id", nativeQuery = true)
    public Optional<User> getUser(@Param("id") String id);
 
    @Query(value="select count(user_id) from user where user_id = :id and password = :pass", nativeQuery = true)
    public Integer checkUser(@Param("id") String id, @Param("pass") String pass);
 
    @Query(value="select count(user_id) from user where user_id = :id", nativeQuery = true)
    public Integer checkUser(@Param("id") String id);
 
    @Query(value="select count(*) from (select * from user where user_id = :id) as A natural join solution_to_challenge ", nativeQuery = true)
    public Integer challengeParticipationCount(@Param("id") String id);
 
    @Query(value="select count(*) from (select * from user where user_id = :id) as A natural join replies ", nativeQuery = true)
    public Integer repliesParticipationCount(@Param("id") String id);
 
    @Query(value="select count(*) from (select * from user where user_id = :id) as A natural join discussion ", nativeQuery = true)
    public Integer discussionCount(@Param("id") String id);
 
     // Trigger statment
     @Query(value="create trigger remove after delete on user for each row delete from interview where interview_id in (select R.id from participant as R where R.participant not in (select user_id from user) or R.creator not in (select user_id from user) )", nativeQuery = true)
     public Integer removeParicipation();
 
}
