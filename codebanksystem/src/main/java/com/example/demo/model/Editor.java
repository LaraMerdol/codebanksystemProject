package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Editor{
    @Id
    String user_id;
    String name;
    String type;
    public Editor(String user_id, String password, String email, String name, String type) {
        this.user_id = user_id;
        this.name = name;
        this.type = type;
    }
    public Editor() {
        this.name = "";
        this.type = "";
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getType() {
        return type;
    }
    public void setType(String type) {
        this.type = type;
    }

}
