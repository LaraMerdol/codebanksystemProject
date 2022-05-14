package com.example.demo.model;

import javax.persistence.Entity;

@Entity
public class Editor extends User{
    String name;
    String type;
    public Editor(String user_id, String password, String email, String name, String type) {
        super(user_id, password, email);
        this.name = name;
        this.type = type;
    }
    public Editor() {
        super("--", "", "");
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
