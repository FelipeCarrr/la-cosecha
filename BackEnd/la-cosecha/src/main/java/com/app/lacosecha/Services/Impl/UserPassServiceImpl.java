package com.app.lacosecha.Services.Impl;

import com.app.lacosecha.Services.UserPassService;

import com.app.lacosecha.models.UserAddress;
import com.app.lacosecha.models.UserPass;
import com.app.lacosecha.repository.UserPassRepository;
import com.app.lacosecha.utils.Constants;
import com.app.lacosecha.utils.JWTUtil;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserPassServiceImpl implements UserPassService {

    @Autowired
    private UserPassRepository userPassRepository;

    @Autowired
    private JWTUtil jwtUtil;

    @Autowired
    private PasswordEncoder passwordEncoder;
    @Override
    public String login( UserPass userPass) {
        Optional<UserPass> userBD = userPassRepository.findByUserPassPhone(userPass.getUserPassPhone());
        if (userBD.isEmpty()) {
            throw new RuntimeException(Constants.USER_NOT_FOUND);
        }
        if (!passwordEncoder.matches(userPass.getUser_pass_pass(),userBD.get().getUser_pass_pass())) {
            throw new RuntimeException(Constants.PASSWORD_INCORRECT);
        }
        return jwtUtil.create(String.valueOf(userBD.get().getUserId()), String.valueOf(userPass.getUserPassPhone()));
    }

    @Override
    public Boolean createUserPass(UserPass userPass) {
        try {
            userPass.setUser_pass_pass(passwordEncoder.encode(userPass.getUser_pass_pass()));
            userPassRepository.save(userPass);
            return true;
        }catch (Exception e){
            System.out.println(e);
            return false;
        }
    }
}
