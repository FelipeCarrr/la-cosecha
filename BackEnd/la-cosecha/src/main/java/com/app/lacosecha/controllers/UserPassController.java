package com.app.lacosecha.controllers;

import com.app.lacosecha.Services.UserAddressService;
import com.app.lacosecha.Services.UserPassService;
import com.app.lacosecha.models.User;
import com.app.lacosecha.models.UserAddress;
import com.app.lacosecha.models.UserPass;
import com.app.lacosecha.repository.UserRepository;
import com.app.lacosecha.utils.ApiResponse;
import com.app.lacosecha.utils.Constants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/auth")
public class UserPassController {
    @Autowired
    private UserPassService userPassService;

    @Autowired
    private UserRepository userRepository;

    private ApiResponse apiResponse;
    Map data= new HashMap();

    @PostMapping(value = "" )
    public ResponseEntity savedUserPass(@RequestBody UserPass userPass){
        Boolean res = userPassService.createUserPass(userPass);
        if(res==true){
            apiResponse = new ApiResponse(Constants.REGISTER_CREATED,"");
            return new ResponseEntity(apiResponse, HttpStatus.CREATED) ;
        }else{
            apiResponse = new ApiResponse(Constants.REGISTER_BAD,"");
            return new ResponseEntity(apiResponse, HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping(value="/login")
    public ResponseEntity login(@RequestBody UserPass userPass){
        try{
            Optional<User> userDB= userRepository.findByUserPhone(userPass.getUserPassPhone());
            data.put("token",userPassService.login(userPass));
            data.put("rol",userDB.get().getRol_id());
            data.put("id",userDB.get().getUserId());
            apiResponse = new ApiResponse(Constants.USER_LOGIN,data);
            return new ResponseEntity(apiResponse, HttpStatus.OK);
        }catch (Exception e){
            apiResponse = new ApiResponse(e.getMessage(),"");
            return new ResponseEntity(apiResponse, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
