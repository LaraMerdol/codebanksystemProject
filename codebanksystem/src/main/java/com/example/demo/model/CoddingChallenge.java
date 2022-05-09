package com.example.demo.model;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "codding_challenges")
public class CoddingChallenge extends Activity{
    @Column
    String  level;
    @Column
    String codding_language;


    public CoddingChallenge(Category category, String description, String status, int duration, String level, String codding_language) {
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
