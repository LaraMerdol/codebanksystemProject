package com.example.demo.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrimaryKeyJoinColumn;

@Entity
public class Reply {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int reply_id;
    @ManyToOne
    @PrimaryKeyJoinColumn(name="d_id", referencedColumnName="discussion_id")
    private Discussion dis;
    @Column
    private String reply_text;
    @JoinColumn
    @ManyToOne(cascade = CascadeType.REMOVE)
    private User creator; 

    public Reply() {

    }

    public Reply(Discussion discussion_id, String reply_text, User user) {
        this.dis = discussion_id;
        this.reply_text = reply_text;
        this.creator = user;
    }

    public User getCreator() {
        return creator;
    }

    public void setCreator(User creator) {
        this.creator = creator;
    }

    public int getReply_id() {
        return reply_id;
    }

    public Discussion getDiscussion_id() {
        return dis;
    }

    public void setDiscussion_id(Discussion discussion_id) {
        this.dis = discussion_id;
    }

    public String getReply_text() {
        return reply_text;
    }

    public void setReply_text(String reply_text) {
        this.reply_text = reply_text;
    }

    @Override
    public String toString() {
        return "Reply [discussion_id=" + dis + ", reply_id=" + reply_id + ", reply_text=" + reply_text + "]";
    }
}
