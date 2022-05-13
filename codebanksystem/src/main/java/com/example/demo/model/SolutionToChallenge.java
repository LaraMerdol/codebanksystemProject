package com.example.demo.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

@Entity
public class SolutionToChallenge implements Serializable {
    @Id
    private int solution_id;
    @ManyToOne(cascade = CascadeType.REMOVE)
    private CoddingChallenge challenge;
    @Column
    private String solution_text;
    @Column
    private String solution_language;
    @JoinColumn
    @ManyToOne(cascade = CascadeType.REMOVE)
    private Coder coder;
    @OneToMany(mappedBy = "solution")
    Set<Pass> passSet;
    public SolutionToChallenge() {

    }

    public SolutionToChallenge(int solution_id, CoddingChallenge challenge, String solution_text, String solution_language, Coder coder) {
        this.solution_id = solution_id;
        this.challenge = challenge;
        this.solution_text = solution_text;
        this.solution_language =solution_language;
        this.coder = coder;
    }

    public Coder getCoder() {
        return coder;
    }

    public void setCoder(Coder coder) {
        this.coder = coder;
    }

    public int getSolution_id() {
        return solution_id;
    }

    public CoddingChallenge getChallenge() {
        return challenge;
    }

    public void setChallenge(CoddingChallenge challenge) {
        this.challenge = challenge;
    }

    public String getSolution_text() {
        return solution_text;
    }

    public void setSolution_text(String solution_text) {
        this.solution_text = solution_text;
    }

    @Override
    public String toString() {
        return "SolutionToChallenge [solution_id=" + solution_id + " solution_text=" + solution_text + "]";
    }

    public String getSolution_language() {
        return solution_language;
    }

    public void setSolution_language(String solution_language) {
        this.solution_language = solution_language;
    }
}
