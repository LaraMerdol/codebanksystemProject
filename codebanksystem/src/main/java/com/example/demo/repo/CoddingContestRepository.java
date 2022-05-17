package com.example.demo.repo;
import com.example.demo.model.CoddingChallenge;
import com.example.demo.model.CoddingContest;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.Date;
import java.util.List;
import java.util.Set;

public interface CoddingContestRepository extends CrudRepository<CoddingContest, Integer> {
    @Query(value="SELECT  0 AS clazz_, contest_id, duration, end_date, name,start_date from codding_contests where start_date between :date1  and :date2 ", nativeQuery = true)
    public List<CoddingContest> getContestByDate (@Param("date1") String date1, @Param("date2") String date2);


}
