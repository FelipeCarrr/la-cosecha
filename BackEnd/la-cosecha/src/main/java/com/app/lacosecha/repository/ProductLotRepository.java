package com.app.lacosecha.repository;

import com.app.lacosecha.models.ProductLot;
import com.app.lacosecha.models.Provider;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductLotRepository extends JpaRepository<ProductLot, Long> {

    List<ProductLot> findByProviderId(Provider provider);
}
