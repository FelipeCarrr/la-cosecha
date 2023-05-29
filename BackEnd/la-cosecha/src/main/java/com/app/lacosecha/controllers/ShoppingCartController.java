package com.app.lacosecha.controllers;


import com.app.lacosecha.Services.ShoppingCartService;
import com.app.lacosecha.models.*;
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
@RequestMapping("/shoppingCart")
public class ShoppingCartController {
    @Autowired
    private ShoppingCartService shoppingCartService;

    private ApiResponse apiResponse;
    Map data= new HashMap();
    @PostMapping(value = "" )
    public ResponseEntity savedShoppingCart(@RequestBody ShoppingCart shoppingCart){
        Boolean res = shoppingCartService.saveShoppingCart(shoppingCart);
        if(res==true){

            apiResponse = new ApiResponse(Constants.REGISTER_CREATED,"");
            return new ResponseEntity(apiResponse, HttpStatus.CREATED) ;
        }else{
            apiResponse = new ApiResponse(Constants.REGISTER_BAD,"");
            return new ResponseEntity(apiResponse, HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping(value = "/consult" )
    public ResponseEntity getShoppingCart(@RequestBody ShoppingCartRequest request){
        try{
            User user = request.getUser();
            States states = request.getStates();
            System.out.println(request);
            apiResponse = new ApiResponse(Constants.USER_FOUND,shoppingCartService.getShoppingCart(states,user));
            return new ResponseEntity(apiResponse, HttpStatus.OK) ;

        }catch(Exception e) {
            apiResponse = new ApiResponse(Constants.USER_NOT_FOUND,"");
            return new ResponseEntity(apiResponse, HttpStatus.NOT_FOUND);
        }
    }

}
