package com.app.lacosecha.Services.Impl;

import com.app.lacosecha.Services.ShoppingCartService;
import com.app.lacosecha.models.ShoppingCart;
import com.app.lacosecha.models.States;
import com.app.lacosecha.models.User;
import com.app.lacosecha.repository.ShoppingCartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ShoppingCartServiceImpl implements ShoppingCartService {

    @Autowired
    ShoppingCartRepository shoppingCartRepository;
    @Override
    public Boolean saveShoppingCart(ShoppingCart shoppingCart) {
        try{
            shoppingCartRepository.save(shoppingCart);
            return true;
        }catch (Exception e){
            System.out.println(e);
            return false;
        }
    }

    @Override
    public Optional<ShoppingCart> getShoppingCart(States states, User user) {
        try{
            return shoppingCartRepository.findByStatesIdAndUserId(states,user);
        }catch (Exception e){
            System.out.println(e);
            return null;
        }
    }
}
