package com.example.demo.model;

import javax.persistence.*;

@Entity
public class Pass {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int pass_id;
    @ManyToOne
    @JoinColumn(name = "test_id")
    TestCase testcase;

    @ManyToOne
    @JoinColumn(name = "solution_id")
    SolutionToChallenge solution;

    @Column
    private boolean pass;
    public Pass(){

    }
    public Pass(TestCase testcase, SolutionToChallenge solution, boolean pass) {
        this.testcase = testcase;
        this.solution = solution;
        this.pass = pass;
    }

    public int getPass_id() {
        return pass_id;
    }

    public TestCase getTestcase() {
        return testcase;
    }

    public void setTestcase(TestCase student) {
        this.testcase = student;
    }

    public SolutionToChallenge getSolution() {
        return solution;
    }

    public void setSolution(SolutionToChallenge solution) {
        this.solution = solution;
    }

    public boolean isPass() {
        return pass;
    }

    public void setPass(boolean pass) {
        this.pass = pass;
    }

    @Override
    public String toString() {
        return "Pass{" +
                "pass_id=" + pass_id +
                ", pass=" + pass +
                '}';
    }
}
