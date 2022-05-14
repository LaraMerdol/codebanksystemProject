// package com.example.demo.security;

// import com.example.demo.model.User;
// import com.example.demo.repo.UserRepository;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.core.userdetails.UserDetails;
// import org.springframework.security.core.userdetails.UserDetailsService;
// import org.springframework.security.core.userdetails.UsernameNotFoundException;

// public class WebSecurityService implements UserDetailsService{
//     @Autowired
//     UserRepository user_repo; 

//     @Override
//     public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//         User user = user_repo.findById(username).get();
//         return user;
//     }
    
// }
