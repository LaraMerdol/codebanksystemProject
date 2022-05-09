package com.example.demo.repo;

import java.util.List;
import java.util.Optional;

import com.example.demo.model.Participant;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface ParticipantRepo extends CrudRepository<Participant, Integer>{
    
    @Query(value = "Select id, creator, participant from participant where creator = :name or participant = :name", nativeQuery = true)
    public List<Participant> getInterviews(@Param("name") String name);
}
