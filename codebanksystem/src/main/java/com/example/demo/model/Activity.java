package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Activity {
    @Column
    @Id
    String activity_id;
    @Column
    String category_id;
    @Column
    String description;
    @Column
    String status; 
    @Column
    String duration;

}
