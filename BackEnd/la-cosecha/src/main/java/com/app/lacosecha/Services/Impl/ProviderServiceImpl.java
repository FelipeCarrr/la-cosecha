package com.app.lacosecha.Services.Impl;

import com.app.lacosecha.Services.ProviderService;
import com.app.lacosecha.models.Provider;
import com.app.lacosecha.repository.ProviderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProviderServiceImpl implements ProviderService {
    @Autowired
    ProviderRepository providerRepository;
    @Override
    public Boolean saveProvider(Provider provider) {
        try{
            providerRepository.save(provider);
            return true;
        }catch(Exception e){
            System.out.println(e);
            return null;
        }
    }

    @Override
    public List<Provider> getProviderAll() {
        try{
            return providerRepository.findAll();
        }catch (Exception e){
            System.out.println(e);
            return null;
        }
    }

    @Override
    public Optional<Provider> getProvider(Long id) {
        try{
            return providerRepository.findById(id);
        }catch (Exception e){
            System.out.println(e);
            return null;
        }
    }
}
