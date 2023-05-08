package com.app.lacosecha.controllers;

import com.app.lacosecha.Services.UserAddressService;
import com.app.lacosecha.models.User;
import com.app.lacosecha.models.UserAddress;
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
@RequestMapping("/address")
public class UserAddressController {

    @Autowired
    private UserAddressService userAddressService;

    private ApiResponse apiResponse;
    Map data= new HashMap();

    @PostMapping(value = "/traer1")
    public ResponseEntity findByUserId(@RequestBody User user){
        try{
            apiResponse = new ApiResponse(Constants.USER_FOUND,userAddressService.getUser_id(user));
            return new ResponseEntity(apiResponse, HttpStatus.OK) ;
        }catch(Exception e) {
            System.out.println(e);
            apiResponse = new ApiResponse(Constants.USER_NOT_FOUND,"");
            return new ResponseEntity(apiResponse, HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping(value = "" )
    public ResponseEntity savedUserAddres(@RequestBody UserAddress userAddress){
        Boolean res = userAddressService.createUserAddress(userAddress);
        if(res==true){
            apiResponse = new ApiResponse(Constants.REGISTER_CREATED,"");
            return new ResponseEntity(apiResponse, HttpStatus.CREATED) ;
        }else{
            apiResponse = new ApiResponse(Constants.REGISTER_BAD,"");
            return new ResponseEntity(apiResponse, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping(value = "" )
    public ResponseEntity UserAddress(){
        try{
            apiResponse = new ApiResponse(Constants.USER_FOUND,userAddressService.allUserAddress());
            return new ResponseEntity(apiResponse, HttpStatus.OK) ;
        }catch(Exception e) {
            apiResponse = new ApiResponse(Constants.USER_NOT_FOUND,"");
            return new ResponseEntity(apiResponse, HttpStatus.NOT_FOUND);
        }
    }
}
