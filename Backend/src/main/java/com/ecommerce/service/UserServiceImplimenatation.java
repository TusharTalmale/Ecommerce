package com.ecommerce.service;

import com.ecommerce.config.JwtTokenProvider;
import com.ecommerce.exception.UserException;
import com.ecommerce.model.User;
import com.ecommerce.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
public class UserServiceImplimenatation implements UserService{
   @Autowired private UserRepository userRepository;
   @Autowired private JwtTokenProvider jwtTokenProvider;

    @Override
    public User findUserById(Long userId) throws UserException {
        Optional<User> user = userRepository.findById(userId);
        if(user.isPresent()){
            return user.get();
        }

        throw new UserException("User Not found with this id : " + userId);
    }

    @Override
    public User findUserProfileByJwt(String jwt) throws UserException {
        System.out.println("User Service");
        String email = jwtTokenProvider.getEmailFromJwtToken(jwt);
        System.out.println("email"+email);
        User user = userRepository.findByEmail(email);
        if(user==null) {
            throw new UserException("user not exist with email "+email);
        }
        System.out.println("email user"+user.getEmail());
        return user;
    }
}
