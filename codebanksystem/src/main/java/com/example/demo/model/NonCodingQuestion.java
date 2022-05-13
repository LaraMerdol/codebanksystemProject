package com.example.demo.model;
import javax.persistence.*;
import javax.persistence.Column;

@Entity
@Table(name = "non_coding_questions")
public class NonCodingQuestion extends Activity{
    @Column
    String  question_text;
    public NonCodingQuestion(int activity_id , Category category, String description, String status, int duration, String question_text) {
        super(activity_id,category, description, status,duration);
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
        return "{"+ "\"activity_id\": \""+super.getActivity_id()+"\"," +
                "  \"category\": \""+super.getCategory().getName()+"\"," +
                "  \"description\": \""+super.getDescription()+"\"," +
                "  \"status\": \""+super.getStatus()+"\"," +
                "  \"duration\": \""+super.getDuration()+"\"," +
                "  \"question_text\": \""+question_text+"\"" +
                "}";
    }
}

