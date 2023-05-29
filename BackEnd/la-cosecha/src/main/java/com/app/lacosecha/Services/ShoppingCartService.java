package com.app.lacosecha.Services;


import com.app.lacosecha.models.ShoppingCart;
import com.app.lacosecha.models.States;
import com.app.lacosecha.models.User;
import com.app.lacosecha.repository.ShoppingCartRepository;

import java.util.Optional;

public interface ShoppingCartService {
    Boolean saveShoppingCart(ShoppingCart shoppingCart);


    Optional<ShoppingCart> getShoppingCart(States states, User user);
}
