package com.app.lacosecha.controllers;

import com.app.lacosecha.Services.ProviderService;
import com.app.lacosecha.models.Provider;
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
@RequestMapping("/provider")
public class ProviderController {
    @Autowired
    private ProviderService providerService;

    private ApiResponse apiResponse;

    Map data= new HashMap();
    @PostMapping(value = "" )
    public ResponseEntity savedProvider(@RequestBody Provider provider){
        Boolean res = providerService.saveProvider(provider);
        if(res==true){

            apiResponse = new ApiResponse(Constants.REGISTER_CREATED,"");
            return new ResponseEntity(apiResponse, HttpStatus.CREATED) ;
        }else{
            apiResponse = new ApiResponse(Constants.REGISTER_BAD,"");
            return new ResponseEntity(apiResponse, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping(value = "" )
    public ResponseEntity ProviderAll(){
        try{
            apiResponse = new ApiResponse(Constants.USER_FOUND,providerService.getProviderAll());
            return new ResponseEntity(apiResponse, HttpStatus.OK) ;
        }catch(Exception e) {
            apiResponse = new ApiResponse(Constants.USER_NOT_FOUND,"");
            return new ResponseEntity(apiResponse, HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping(value="/{id}")
    public ResponseEntity getProductLot(@PathVariable Long id) {
        try {
            apiResponse = new ApiResponse(Constants.USER_FOUND,providerService.getProvider(id));
            return new ResponseEntity(apiResponse, HttpStatus.OK) ;
        } catch (Exception e) {
            apiResponse = new ApiResponse(Constants.USER_NOT_FOUND,"");
            return new ResponseEntity(apiResponse, HttpStatus.NOT_FOUND);
        }
    }
}
