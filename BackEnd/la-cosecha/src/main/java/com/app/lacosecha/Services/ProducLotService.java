package com.app.lacosecha.Services;

import com.app.lacosecha.models.ProductLot;
import com.app.lacosecha.models.Provider;

import java.util.List;
import java.util.Optional;

public interface ProducLotService {

    Boolean createProductLot(ProductLot productLot);

    List<ProductLot> getProductLotAll();

    Optional<ProductLot> getProductAll(Long id);

    List<ProductLot> getProductByProvider(Provider provider);
}
