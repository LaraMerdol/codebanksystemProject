package com.example.demo.model;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "test_cases")
public class TestCase {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int  test_id;
    @Column
    private String test_code;
    @ManyToOne(cascade = CascadeType.REMOVE)
    private CoddingChallenge challenge;
    @OneToMany(mappedBy = "testcase")
    Set<Pass> passSet;
    // Constructor
    public TestCase() {
        test_code = "";
    }

    public TestCase(String test_code,CoddingChallenge challenge ) {
        this.test_code = test_code;
        this.challenge =challenge;
    }
    public int getTest_id() {
        return test_id;
    }

    public String getTest_code() {
        return test_code;
    }

    public void setTest_code(String test_code) {
        this.test_code = test_code;
    }

    public void setChallenge(CoddingChallenge challenge) {
        this.challenge = challenge;
    }

    public CoddingChallenge getChallenge() {
        return challenge;
    }

    @Override
    public String toString() {
        return "TestCase [test_id=" + test_id + ", test_code=" + test_code+"]";
    }

}