package com.example.demo.repo;

import java.util.List;
import java.util.Optional;

import com.example.demo.model.Discussion;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface DiscussionRepository extends CrudRepository<Discussion, Integer>{
    
    @Query(value = "Select discussion_id, header, text, creator_user_id from discussion where discussion_id = :id", nativeQuery = true)
    public Optional<Discussion> getDiscussion(@Param("id") int id);

    @Query(value="Select discussion_id, header, text, creator_user_id  from discussion where header = :head", nativeQuery = true)
    public List<Discussion> getDiscussions(@Param("head") String head);

    @Query(value="Select discussion_id, header, text, creator_user_id  from discussion where header like %:head%", nativeQuery = true)
    public List<Discussion> getDiscussionsBySubString(@Param("head") String head);
    @Query(value="Select discussion_id, header, text, creator_user_id  from discussion", nativeQuery = true)
    public List<Discussion> getAll();
}
