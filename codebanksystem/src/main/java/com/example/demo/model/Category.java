package com.example.demo.model;

import javax.persistence.*;

@Entity
public class Category {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int  category_id;
    @Column
    private String name;

    // Constructor
    public Category() {
        name = "";
    }

    public Category(String name) {
        this.name = name;
    }
    public int getCategory_id() {
        return category_id;
    }

    public String getName() {
        return name;
    }



    public void setName(String name) {
        this.name = name;
    }


    @Override
    public String toString() {
        return "Category [category_id=" + category_id + ", name=" + name+"]";
    }

}