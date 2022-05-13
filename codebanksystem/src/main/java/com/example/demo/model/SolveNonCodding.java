package com.example.demo.model;

        import javax.persistence.*;
        import java.io.Serializable;
        import java.util.Set;

@Entity
public class SolveNonCodding implements Serializable {
    @Id
    private int solution_id;
    @ManyToOne(cascade = CascadeType.REMOVE)
    private NonCodingQuestion question;
    @Column
    private String solution_text;
    @JoinColumn
    @ManyToOne(cascade = CascadeType.REMOVE)
    private Coder coder;

    public SolveNonCodding() {

    }

    public SolveNonCodding(int solution_id, NonCodingQuestion question, String solution_text, Coder coder) {
        this.solution_id = solution_id;
        this.question = question;
        this.solution_text = solution_text;
        this.coder = coder;
    }

    public Coder getCoder() {
        return coder;
    }

    public void setCoder(Coder coder) {
        this.coder = coder;
    }

    public int getSolution_id() {
        return solution_id;
    }

    public NonCodingQuestion getChallenge() {
        return question;
    }

    public void setQuestion(NonCodingQuestion question) {
        this.question = question;
    }

    public String getSolution_text() {
        return solution_text;
    }

    public void setSolution_text(String solution_text) {
        this.solution_text = solution_text;
    }

    @Override
    public String toString() {

        return "{" +
                "  \"solution_id\": \"" + solution_id + "\"," +
                "  \"solution_text\": \"" + solution_text + "\"," +
                "  \"user_name\": \"" + coder.getFullname()+ "\"" +
                "}";
    }
}
