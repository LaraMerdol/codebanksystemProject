package com.example.demo.model;

import javax.persistence.*;

@Entity
public class Activity {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int  activity_id;
    @JoinColumn
    @ManyToOne(cascade = CascadeType.REMOVE)
    private Category  category;
    @Column
    private String description;
    @Column
    private String status;
    @Column
    private int duration;

    // Constructor
    public Activity() {
        this.description = "";
        this.status = "";
        this.duration = 0;
    }

    public Activity (Category category, String description, String status, int duration) {
        this.category = category;
        this.description = description;
        this.status = status;
        this.duration = duration;
    }

    public int getActivity_id() {
        return activity_id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }


    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    @Override
    public String toString() {
        return "Category [activity_id=" + activity_id + ", description=" + description + ", status=" + status + ", duration=" + duration +"]";
    }
}


