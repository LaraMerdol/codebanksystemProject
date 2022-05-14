package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Company{
    @Id
    String user_id;
    String companyName;
    int workerCount;
    int hiringStatus;
    int budget;
    double avgRate;
    public Company( String user_id, String password, String email, String companyName,
                                     int workerCount, int hiringStatus, int budget, double avgRate) {
        this.user_id = user_id;                                         
        this.companyName = companyName;
        this.workerCount = workerCount;
        this.hiringStatus = hiringStatus;
        this.budget = budget;
        this.avgRate = avgRate;
    }

    public Company( ){
        this.user_id = "";
        this.companyName = "";
        this.workerCount = 0;
        this.hiringStatus = 0;
        this.budget = 0;
        this.avgRate = 0;
    }
    public String getCompanyName() {
        return companyName;
    }
    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }
    public int getWorkerCount() {
        return workerCount;
    }
    public void setWorkerCount(int workerCount) {
        this.workerCount = workerCount;
    }
    public int getHiringStatus() {
        return hiringStatus;
    }
    public void setHiringStatus(int hiringStatus) {
        this.hiringStatus = hiringStatus;
    }
    public int getBudget() {
        return budget;
    }
    public void setBudget(int budget) {
        this.budget = budget;
    }
    public double getAvgRate() {
        return avgRate;
    }
    public void setAvgRate(double avgRate) {
        this.avgRate = avgRate;
    }
    @Override
    public String toString() {
        return "Company [avgRate=" + avgRate + ", budget=" + budget + ", companyName=" + companyName + ", hiringStatus="
                + hiringStatus + ", workerCount=" + workerCount + "]";
    }
}