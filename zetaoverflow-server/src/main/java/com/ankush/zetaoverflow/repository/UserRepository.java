package com.ankush.zetaoverflow.repository;

import com.ankush.zetaoverflow.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface UserRepository extends CrudRepository<User, UUID> {
    public User findByUsername(String username);
}
