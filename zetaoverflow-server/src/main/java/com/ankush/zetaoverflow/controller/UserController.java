package com.ankush.zetaoverflow.controller;

import com.ankush.zetaoverflow.model.User;
import com.ankush.zetaoverflow.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/users/{id}/name")
    public String getUsername(@PathVariable UUID id) {
        return userService.getUsername(id);
    }

    @PostMapping("/users")
    public User addUser(@RequestBody User user) {
        return userService.addUser(user);
    }

    @GetMapping("/users/count")
    public long getUserCount() {
        return userService.getUserCount();
    }
}