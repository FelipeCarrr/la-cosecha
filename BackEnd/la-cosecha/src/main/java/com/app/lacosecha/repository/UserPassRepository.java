package com.app.lacosecha.repository;

import com.app.lacosecha.models.User;
import com.app.lacosecha.models.UserPass;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserPassRepository extends JpaRepository<UserPass, Long> {
    Optional<UserPass> findByUserPassPhone(String userPassPhone);

}
