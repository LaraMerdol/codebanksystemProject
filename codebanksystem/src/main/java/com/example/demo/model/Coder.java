package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Coder{
    @Id
    @Column
    String user_id;
    @Column
    String phoneString;
    @Column
    String fullname;

    public Coder(String user_id, String password, String email, String phoneString, String fullname) {
        this.user_id = user_id;
        this.fullname  = fullname;
        this.phoneString = phoneString;
    }
    public Coder() {
        this.phoneString = "";
        this.fullname = "";
    }
    
    public String getPhoneString() {
        return phoneString;
    }
    public void setPhoneString(String phoneString) {
        this.phoneString = phoneString;
    }
    public String getFullname() {
        return fullname;
    }
    public void setFullname(String fullname) {
        this.fullname = fullname;
    }
    
    @Override
    public String toString() {
        return "Coder [fullname=" + fullname + ", phoneString=" + phoneString + "]";
    }
}
