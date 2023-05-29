package com.app.lacosecha.Services.Impl;

import com.app.lacosecha.Services.ProducLotService;
import com.app.lacosecha.models.ProductLot;
import com.app.lacosecha.models.Provider;
import com.app.lacosecha.repository.ProductLotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductLotServiceImpl implements ProducLotService {

    @Autowired
    private ProductLotRepository productLotRepository;
    @Override
    public Boolean createProductLot(ProductLot productLot) {
        try{
            productLotRepository.save(productLot);
            return true;
        }catch (Exception e){
            System.out.println(e);
            return false;
        }
    }

    @Override
    public List<ProductLot> getProductLotAll() {
        try{
            return productLotRepository.findAll();
        }catch (Exception e){
            System.out.println(e);
            return null;
        }
    }

    @Override
    public Optional<ProductLot> getProductAll(Long id) {
        try{
            return productLotRepository.findById(id);
        }catch (Exception e){
            System.out.println(e);
            return null;
        }
    }

    @Override
    public List<ProductLot> getProductByProvider(Provider provider) {
        try{
            return productLotRepository.findByProviderId(provider);
        }catch (Exception e){
            System.out.println(e);
            return null;
        }
    }
}
