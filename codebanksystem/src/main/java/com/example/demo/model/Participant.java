package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;

@Entity
public class Participant {

    @Id 
    private int id;
    private String creator;
    private String participant;

    public Participant(int id, String p1, String p2) {
        this.id = id;
        creator = p1;
        participant = p2;
    }

    public Participant() {

    }

    public String getCreator() {
        return creator;
    }
    public void setCreator(String creator) {
        this.creator = creator;
    }
    public String getParticipant() {
        return participant;
    }
    public void setParticipant(String participant) {
        this.participant = participant;
    }
}
