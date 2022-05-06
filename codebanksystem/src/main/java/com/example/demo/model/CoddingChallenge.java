package com.example.demo.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Column;

public class CoddingChallenge extends Activity{
    @Column
    String  level;
    @Column
    String codding_language;
}
