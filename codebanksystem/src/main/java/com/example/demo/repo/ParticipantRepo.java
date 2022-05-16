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

    @Query(value="with recursive rec_meetings_part(id, creat, part) as (select P.id, P.creator, P.participant from participant as P where  P.creator=:name or P.participant =:name union select P.id, P.creator, P.participant from rec_meetings_part, " +
                "participant as P where P.participant = creat or P.participant = part) select * " +
                "from rec_meet", nativeQuery = true)
    public List<Participant> getRelatedMeetings(@Param("name") String name);
}
