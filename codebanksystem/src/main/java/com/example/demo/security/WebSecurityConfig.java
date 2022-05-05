package com.example.demo.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import javax.sql.DataSource;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter{
    @Autowired
    private DataSource data;

    @Autowired
    public  void configAuthentication(AuthenticationManagerBuilder am) throws Exception {
        am.jdbcAuthentication().dataSource(data).usersByUsernameQuery("select user_id, password, true from user where user_id=?")
        .authoritiesByUsernameQuery("select ADMIN");
    ;
    }

    @Override
    protected void configure (HttpSecurity http) throws Exception {
        http.httpBasic().disable();
        http.cors().and().csrf().disable();

        // http.authorizeRequests()
        //     .antMatchers("/", "/home").permitAll()
        //     .anyRequest().authenticated()
        //     .and()
        //     .formLogin().permitAll()
        //     .and().logout().permitAll();      
    }

    @Bean
    @Override
    public UserDetailsService userDetailsService() {
        UserDetails user = User.withDefaultPasswordEncoder()
                                .username("username")
                                .password("password")
                                .roles("ADMIN")
                                .build();
                                
        return new InMemoryUserDetailsManager(user);
    }
    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring().antMatchers("/addEditor", "/addCompany", "/addCoder");
    }
    @Bean
    public PasswordEncoder passwordEncoder() {
        return NoOpPasswordEncoder.getInstance();
    }
}
