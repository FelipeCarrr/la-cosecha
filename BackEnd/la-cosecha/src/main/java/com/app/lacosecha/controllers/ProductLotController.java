package com.app.lacosecha.controllers;

import com.app.lacosecha.Services.ProducLotService;
import com.app.lacosecha.models.ProductLot;
import com.app.lacosecha.models.Provider;
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
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/productLot")
public class ProductLotController {
    @Autowired
    private ProducLotService producLotService;

    private ApiResponse apiResponse;

    Map data= new HashMap();
    @PostMapping(value = "" )
    public ResponseEntity savedProductLot(@RequestBody ProductLot productLot){
        Boolean res = producLotService.createProductLot(productLot);
        if(res==true){

            apiResponse = new ApiResponse(Constants.REGISTER_CREATED,"");
            return new ResponseEntity(apiResponse, HttpStatus.CREATED) ;
        }else{
            apiResponse = new ApiResponse(Constants.REGISTER_BAD,"");
            return new ResponseEntity(apiResponse, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping(value = "" )
    public ResponseEntity ProductLotAll(){
        try{
            apiResponse = new ApiResponse(Constants.USER_FOUND,producLotService.getProductLotAll());
            return new ResponseEntity(apiResponse, HttpStatus.OK) ;
        }catch(Exception e) {
            apiResponse = new ApiResponse(Constants.USER_NOT_FOUND,"");
            return new ResponseEntity(apiResponse, HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping(value="/{id}")
    public ResponseEntity getProductLot(@PathVariable Long id) {
        try {
            apiResponse = new ApiResponse(Constants.USER_FOUND,producLotService.getProductAll(id));
            return new ResponseEntity(apiResponse, HttpStatus.OK) ;
        } catch (Exception e) {
            apiResponse = new ApiResponse(Constants.USER_NOT_FOUND,"");
            return new ResponseEntity(apiResponse, HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping(value="/provider")
    public ResponseEntity getProductByProvider(@RequestBody Provider provider) {
        try {
            apiResponse = new ApiResponse(Constants.USER_FOUND,producLotService.getProductByProvider(provider));
            return new ResponseEntity(apiResponse, HttpStatus.OK) ;
        } catch (Exception e) {
            System.out.println(e);
            apiResponse = new ApiResponse(Constants.USER_NOT_FOUND,"");
            return new ResponseEntity(apiResponse, HttpStatus.NOT_FOUND);
        }
    }
}
