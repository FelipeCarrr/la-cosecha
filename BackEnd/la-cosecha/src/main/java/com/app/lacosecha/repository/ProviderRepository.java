package com.app.lacosecha.repository;

import com.app.lacosecha.models.Provider;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProviderRepository extends JpaRepository <Provider, Long> {

}
