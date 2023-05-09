package com.app.lacosecha.controllers;

import com.app.lacosecha.Services.UserAddressService;
import com.app.lacosecha.Services.UserPassService;
import com.app.lacosecha.models.UserAddress;
import com.app.lacosecha.models.UserPass;
import com.app.lacosecha.utils.ApiResponse;
import com.app.lacosecha.utils.Constants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/auth")
public class UserPassController {
    @Autowired
    private UserPassService userPassService;

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
}
