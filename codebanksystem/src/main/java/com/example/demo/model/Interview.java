package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Entity
public class Interview {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int interview_id;
    @Column
    private String date;
    @Column
    private int difficulty;
    @Column
    private int duration;

    public Interview(String date, int difficulty, int duration) {
        this.date = date;
        this.difficulty = difficulty;
        this.duration = duration;
    }

    public Interview() {
        duration =0;
    }

    public int getId() {
        return interview_id;
    }
 
    public int getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(int difficulty) {
        this.difficulty = difficulty;
    }

    public int getInterview_id() {
        return interview_id;
    }

    public void setInterview_id(int interview_id) {
        this.interview_id = interview_id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "Interview [date=" + date + ", interview_id=" + interview_id + "]";
    }
}