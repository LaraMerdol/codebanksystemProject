package com.example.demo.model;
import javax.persistence.*;
import javax.persistence.Column;

@Entity
@Table(name = "CoddingChallenges")
public class CoddingChallenge extends Activity{
    @Column
    String  level;
    @Column
    String codding_language;

    public CoddingChallenge(Category category, String description, String status, int duration, String level, String codding_language ) {
        super(category, description, status,duration);
        this.level  = level;
        this.codding_language = codding_language;
    }

    public CoddingChallenge() {
        this.level  = "";
        this.codding_language = "";
    }

    public String getLevel() {
        return level;
    }
    public void setLevel(String level) {
        this.level = level;
    }
    public String getCodding_language() {
        return codding_language;
    }
    public void getCodding_language(String codding_language) {
        this.codding_language = codding_language;
    }


    @Override
    public String toString() {
        return "CoddingChallenge [level=" + level + ", codding_language=" + codding_language + "]";
    }
}
