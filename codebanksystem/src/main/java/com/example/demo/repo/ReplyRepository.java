package com.example.demo.repo;

import java.util.List;
import java.util.Optional;

import com.example.demo.model.Reply;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface ReplyRepository extends CrudRepository<Reply, Integer> {
    @Query(value="Select reply_id, reply_text, creator_user_id, dis_discussion_id from reply where dis_discussion_id = :id", nativeQuery = true)
    public List<Reply> getRepliesByDiscussion(@Param("id") int id);
}
