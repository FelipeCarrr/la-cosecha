package com.app.lacosecha.repository;

import com.app.lacosecha.models.ProductLot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductLotRepository extends JpaRepository<ProductLot, Long> {

}
