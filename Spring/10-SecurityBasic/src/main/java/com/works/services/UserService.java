package com.works.services;

import com.works.entities.User;
import com.works.repositories.RoleRepository;
import com.works.repositories.UserRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService implements UserDetailsService {

    final UserRepository uRepo;
    final RoleRepository rRepo;
    final PasswordEncoder encoder;
    public UserService(UserRepository uRepo, RoleRepository rRepo, PasswordEncoder encoder) {
        this.uRepo = uRepo;
        this.rRepo = rRepo;
        this.encoder = encoder;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return null;
    }

    public User register( User user ) {
        Optional<User> oUser = uRepo.findByEmailEqualsIgnoreCase(user.getEmail());
        if (oUser.isPresent() ) {
            // bu  kullanıcı daha önce kayıtlı
            throw new UsernameNotFoundException("User Register Fail");
        }else {
            user.setPassword( encoder.encode(user.getPassword()) );
            return user;
        }
    }


    @Bean
    public PasswordEncoder encoder() {
        return new BCryptPasswordEncoder();
    }



}
