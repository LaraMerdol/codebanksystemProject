package com.example.demo.model;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;


@Entity
public class User{
    @Column
    @Id
    private String user_id;
    @Column
    private String password;
    @Column
    private String email;
    @Column
    private String role;

    // Constructor
    public User (String user_id, String password, String email) {
        this.email = email;
        this.password = password;
        this.user_id = user_id;
        role = "ADMIN";
    }

    public User () {
        this.email = "";
        this.password = "";
        this.user_id = "";
    }    

    // Function
    public String getUser_id() {
        return user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }

    public String getPassword() {
        return password;
    }

    
    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "User [email=" + email + ", password=" + password + ", user_id=" + user_id + "]";
    }
}
