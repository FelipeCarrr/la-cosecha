package com.app.lacosecha.repository;

import com.app.lacosecha.models.States;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StatesRepository extends JpaRepository<States, Long> {
}
