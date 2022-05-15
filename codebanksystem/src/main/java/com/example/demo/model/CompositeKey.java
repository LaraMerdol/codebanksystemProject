package com.example.demo.model;

import java.io.Serializable;

import javax.persistence.Entity;

public class CompositeKey implements Serializable{
    private String creator;
    private String participant;
}
