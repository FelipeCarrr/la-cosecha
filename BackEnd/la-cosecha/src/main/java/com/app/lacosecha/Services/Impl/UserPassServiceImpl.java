package com.app.lacosecha.Services.Impl;

import com.app.lacosecha.Services.UserPassService;

import com.app.lacosecha.models.UserPass;
import com.app.lacosecha.repository.UserPassRepository;
import com.app.lacosecha.utils.Constants;
import com.app.lacosecha.utils.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserPassServiceImpl implements UserPassService {

    @Autowired
    private UserPassRepository userPassRepository;

    @Autowired
    private JWTUtil jwtUtil;

    @Override
    public String login( UserPass userPass) {
        Optional<UserPass> userBD = userPassRepository.findByUserPassPhone(userPass.getUserPassPhone());
        if (userBD.isEmpty()) {
            throw new RuntimeException(Constants.USER_NOT_FOUND);
        }
        if (!userBD.get().getUser_pass_pass().equals(userPass.getUser_pass_pass())) {
            throw new RuntimeException(Constants.PASSWORD_INCORRECT);
        }
        return jwtUtil.create(String.valueOf(userBD.get().getUser_id()), String.valueOf(userPass.getUserPassPhone()));
    }
}
