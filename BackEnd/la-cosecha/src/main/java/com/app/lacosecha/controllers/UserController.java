package com.app.lacosecha.controllers;

import com.app.lacosecha.Services.UserService;
import com.app.lacosecha.models.User;
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
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;
    private ApiResponse apiResponse;
    Map data= new HashMap();

    @GetMapping(value = "/{id}")
    public ResponseEntity findUserById(@PathVariable Long id){
        try{
            apiResponse = new ApiResponse(Constants.USER_FOUND,userService.getUser(id));
            return new ResponseEntity(apiResponse, HttpStatus.OK) ;
        }catch(Exception e) {
            apiResponse = new ApiResponse(Constants.USER_NOT_FOUND,"");
            return new ResponseEntity(apiResponse, HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping(value = "" )
    public ResponseEntity savedUser(@RequestBody User user){
        Boolean res = userService.createUser(user);
        if(res==true){
            apiResponse = new ApiResponse(Constants.REGISTER_CREATED,user.getUserId());
            return new ResponseEntity(apiResponse, HttpStatus.CREATED) ;
        }else{
            apiResponse = new ApiResponse(Constants.REGISTER_BAD,"");
            return new ResponseEntity(apiResponse, HttpStatus.BAD_REQUEST);
        }
    }
    @GetMapping(value = "" )
    public ResponseEntity Users(){
        try{
            apiResponse = new ApiResponse(Constants.USER_FOUND,userService.allUsers());
            return new ResponseEntity(apiResponse, HttpStatus.OK) ;
        }catch(Exception e) {
            apiResponse = new ApiResponse(Constants.USER_NOT_FOUND,"");
            return new ResponseEntity(apiResponse, HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity updateUser(@PathVariable Long id,@RequestBody User user){
        Boolean res = userService.updateUser(id,user);
        if(res==true){
            apiResponse = new ApiResponse(Constants.REGISTER_UPDATED,"");
            return new ResponseEntity(apiResponse, HttpStatus.OK) ;
        }else{
            apiResponse = new ApiResponse(Constants.REGISTER_NOT_UPDATED,"");
            return new ResponseEntity(apiResponse, HttpStatus.BAD_REQUEST);
        }
    }
}
