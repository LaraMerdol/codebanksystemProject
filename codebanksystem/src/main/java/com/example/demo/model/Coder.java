package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
public class Coder extends User {
    @Column
    String phoneString;
    @Column
    String fullname;

    public Coder(String user_id, String password, String email, String phoneString, String fullname) {
        super(user_id, password, email);
        this.fullname  = fullname;
        this.phoneString = phoneString;
    }
    public Coder() {
        super("--", "", "");
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
