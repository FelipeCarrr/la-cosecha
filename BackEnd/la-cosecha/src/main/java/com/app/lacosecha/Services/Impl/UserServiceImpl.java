package com.app.lacosecha.Services.Impl;

import com.app.lacosecha.Services.UserService;
import com.app.lacosecha.models.User;
import com.app.lacosecha.repository.UserRepository;
import com.app.lacosecha.utils.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JWTUtil jwtUtil;

    public User getUser(Long id){
        return userRepository.findById(id).get();
    }

    @Override
    public Boolean createUser(User user){
        try {
            userRepository.save(user);
            return true;
        }catch (Exception e){
            System.out.println(e);
            return false;
        }
    }

    @Override
    public List<User> allUsers() {
        return userRepository.findAll();
    }

    @Override
    public Boolean updateUser(Long id, User user) {
        try{
            User userBD = userRepository.findById(id).get();
            userBD.setRol_id(user.getRol_id());
            userBD.setUser_name(user.getUser_name());
            userBD.setUser_phone(user.getUser_phone());
            userBD.setUser_second_phone(user.getUser_second_phone());
            userBD.setStates_id(user.getStates_id());
            userBD.setUpdated_at(user.getUpdated_at());
            userRepository.save(userBD);
            return true;
        }catch (Exception e){
            return false;
        }
    }

}
