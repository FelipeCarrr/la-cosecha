package com.app.lacosecha.Services;



import com.app.lacosecha.models.Provider;

import java.util.List;
import java.util.Optional;

public interface ProviderService {
    Boolean saveProvider(Provider provider);

    List<Provider> getProviderAll();

    Optional<Provider> getProvider(Long id);
}
