package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.jdbc.SqlConfig;
import org.springframework.test.context.jdbc.SqlGroup;
import org.springframework.test.context.jdbc.SqlConfig.TransactionMode;

  @Sql(scripts = "/trig.sql", 
    config = @SqlConfig(transactionMode = TransactionMode.ISOLATED))
  public class TriggerInterview {

  }