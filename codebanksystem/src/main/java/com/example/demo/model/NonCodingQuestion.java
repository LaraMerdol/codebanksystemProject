package com.example.demo.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Column;

public class NonCodingQuestion extends Activity{
    @Column
    String  question_text;
    public NonCodingQuestion(Category category, String description, String status, int duration, String question_text) {
        super(category, description, status,duration);
        this.question_text  = question_text;
    }

    public NonCodingQuestion() {
        this.question_text  = "";
    }

    public String getQuestion_text() {
        return question_text;
    }
    public void setQuestion_text(String question_text) {
        this.question_text = question_text;
    }

    @Override
    public String toString() {
        return "Codding_language [question_text=" + question_text  + "]";
    }
}

