package com.example.demo.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Discussion {
    @Id
    private int discussion_id;
    @Column
    private String header;
    @Column
    private String text;
    @JoinColumn
    @ManyToOne(cascade = CascadeType.REMOVE)
    private User creator; 

    // Constructor
    public Discussion() {
        
    }

    public Discussion(int discussion_id, String header, String text, User user) {
        this.discussion_id = discussion_id;
        this.header = header;
        this.text = text;
        this.creator = user;
    }

    public int getDiscussion_id() {
        return discussion_id;
    }
    public void setDiscussion_id(int discussion_id) {
        this.discussion_id = discussion_id;
    }
    
    public String getHeader() {
        return header;
    }
    
    public void setHeader(String header) {
        this.header = header;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    

    public User getCreator() {
        return creator;
    }

    public void setCreator(User creator) {
        this.creator = creator;
    }

    @Override
    public String toString() {
        return "{" +
                "  \"discussion_id\": \"" + discussion_id + "\"," +
                "  \"header\": \"" + header + "\"," +
                "  \"user_id\": \"" + creator.getUser_id() + "\"," +
                "  \"text\": \"" + text + "\"" +
                "}";
    }
}
