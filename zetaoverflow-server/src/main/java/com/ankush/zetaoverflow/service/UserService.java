package com.ankush.zetaoverflow.service;

import com.ankush.zetaoverflow.exception.ZetaOverflowErrorCode;
import com.ankush.zetaoverflow.exception.ZetaOverflowException;
import com.ankush.zetaoverflow.model.User;
import com.ankush.zetaoverflow.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class UserService {

    private PasswordService passwordService;
    private UserRepository userRepository;

    @Autowired
    public UserService(PasswordService passwordService, UserRepository userRepository) {
        this.userRepository = userRepository;
        this.passwordService = passwordService;
    }

    public User getUser(UUID id) {
        Optional<User> userOptional =  userRepository.findById(id);

        if(userOptional.isEmpty()) {
            throw new ZetaOverflowException(ZetaOverflowErrorCode.USER_NOT_FOUND);
        }
        return userOptional.get();
    }

    public User addUser(User user) {
        user.setPassword(passwordService.hashPassword(user.getPassword()));
        return userRepository.save(user);
    }

    public String getUsername(UUID id) {
        User user = userRepository.findById(id).get();
        return user.getUsername();
    }

    public long getUserCount() {
        return userRepository.count();
    }
}
