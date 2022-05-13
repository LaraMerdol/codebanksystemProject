package com.example.demo.model;

import javax.persistence.*;

@Entity
@Table(name = "Activities")
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class Activity {
    @Id
    private int  activity_id;
    @JoinColumn
    @ManyToOne(cascade = CascadeType.REMOVE)
    private Category  category;
    @Column(name="description", length=512)
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

    public Activity (int activity_id, Category category, String description, String status, int duration) {
        this.activity_id=activity_id;
        this.category = category;
        this.description = description;
        this.status = status;
        this.duration = duration;
    }

    public int getActivity_id() {
        return activity_id;
    }
    public void setActivity_id(int activity_id) {
        this.activity_id=activity_id;
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
        return "{" +
                "  \"activity_id\": \""+activity_id+"\"," +
                "  \"category\": \""+category.getName()+"\"," +
                "  \"description\": \""+description+"\"," +
                "  \"status\": \""+status+"\"," +
                "  \"duration\": \""+duration+"\"" +
                "}";
    }

}


