package com.app.lacosecha.repository;

import com.app.lacosecha.models.ShoppingCart;
import com.app.lacosecha.models.States;
import com.app.lacosecha.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ShoppingCartRepository extends JpaRepository<ShoppingCart, Long> {

    Optional<ShoppingCart> findByStatesIdAndUserId(@Param("statesId") States states, @Param("userId") User user);
}
