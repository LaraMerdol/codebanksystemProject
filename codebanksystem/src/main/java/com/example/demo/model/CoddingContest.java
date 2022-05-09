package com.example.demo.model;
        import com.fasterxml.jackson.annotation.JsonFormat;

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
    @GeneratedValue(strategy = GenerationType.TABLE)
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
    @ManyToMany(cascade = {
            CascadeType.PERSIST,
            CascadeType.MERGE
    })
    @JoinTable(name = "contest_challenges",
            joinColumns = {
                    @JoinColumn(name = "contest_id", referencedColumnName = "contest_id")},
            inverseJoinColumns = {
                    @JoinColumn(name = "activity_id", referencedColumnName = "activity_id")})
    private Set<CoddingChallenge> coddingChallenges;


    // Constructor
    public CoddingContest() {
        this.name = "";
        this.duration = 0;
        coddingChallenges = new HashSet<>();
    }

    public CoddingContest(String name, int duration, LocalDate startDate, LocalDate endDate) {
        this.name = name;
        this.duration = duration;
        this.startDate = startDate;
        this.endDate = endDate;
        coddingChallenges = new HashSet<>();
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
    public Set<CoddingChallenge> getCoddingChallenges() {return coddingChallenges;}
    public void setCoddingChallenges(Set<CoddingChallenge> coddingChallenges) {this.coddingChallenges = coddingChallenges;}
    public void addCoddingChallenge (CoddingChallenge challenge){
        this.getCoddingChallenges().add(challenge);
        challenge.getCoddingContests().add(this);


    }
    @Override
    public String toString() {
        return "CoddingContest [contest_id=" + contest_id + ", name=" + name  + ", duration=" + duration +", startDate=" + endDate + ", startDate=" + endDate+ "]";
    }


}


