package com.example.demo.model;
        import com.fasterxml.jackson.annotation.JsonFormat;
        import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

        import java.io.Serializable;
        import java.util.*;
        import javax.persistence.*;
        import javax.persistence.Column;
        import java.time.LocalDate;

@Entity
@Table(name = "codding_contests")
public class CoddingContest {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int  contest_id;
    @Column
    private String name;
    @Column
    private int duration;
    @Column
    @JsonFormat(pattern="yyyy-MM-dd")
    private LocalDate startDate;
    @Column
    @JsonFormat(pattern="yyyy-MM-dd")
    private LocalDate endDate;
    @OneToMany(cascade = CascadeType.ALL)
    private List<CoddingChallenge> challenges = new ArrayList<>();


    // Constructor
    public CoddingContest() {
        this.name = "";
        this.duration = 0;

    }

    public CoddingContest(String name, int duration, LocalDate startDate, LocalDate endDate) {
        this.name = name;
        this.duration = duration;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    public int getContest_id() {
        return contest_id;
    }

    public String getName() {
        return name;
    }

    public void setName (String name) {
        this.name = name;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }
    public LocalDate getStartDate () {return startDate;}
    public void setStartDate (LocalDate startDate) {this.startDate= startDate;}
    public LocalDate getEndDate () {return endDate;}
    public void setEndDate (LocalDate endDate) {this.endDate= endDate;}
    public List<CoddingChallenge> getCoddingChallenges() {return challenges;}
    public void setCoddingChallenges(List<CoddingChallenge> coddingChallenges) {this.challenges = coddingChallenges;}

    @Override
    public String toString() {
        return "CoddingContest [contest_id=" + contest_id + ", name=" + name  + ", duration=" + duration +", startDate=" + endDate + ", startDate=" + endDate+ "]";
    }


}


