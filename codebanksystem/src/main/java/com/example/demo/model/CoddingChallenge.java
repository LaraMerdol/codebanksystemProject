package com.example.demo.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Column;
@Entity
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
        return "Codding_language [level=" + level + ", codding_language=" + codding_language + "]";
    }
}
