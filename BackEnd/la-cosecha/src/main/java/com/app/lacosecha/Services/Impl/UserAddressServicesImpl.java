package com.app.lacosecha.Services.Impl;


import com.app.lacosecha.Services.UserAddressService;

import com.app.lacosecha.models.User;
import com.app.lacosecha.models.UserAddress;
import com.app.lacosecha.repository.UserAddressRepository;
import com.app.lacosecha.utils.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserAddressServicesImpl implements UserAddressService {

    @Autowired
    private UserAddressRepository userAddressRepository;

    @Autowired
    private JWTUtil jwtUtil;



    public Boolean createUserAddress(UserAddress userAddress){
        try {
            userAddressRepository.save(userAddress);
            return true;
        }catch (Exception e){
            System.out.println(e);
            return false;
        }
    }

    @Override
    public List<UserAddress> getUser_id(User user) {
        return userAddressRepository.findByUserId(user);

    }

    @Override
    public List<UserAddress> allUserAddress() {
        return userAddressRepository.findAll();
    }

}
