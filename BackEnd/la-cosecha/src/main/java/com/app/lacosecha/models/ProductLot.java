package com.app.lacosecha.models;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
public class ProductLot {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long productId;

    @Column(name = "product_lot_name", length = 45, nullable = false)
    private String product_lot_name;
    @Column(name = "product_lot_description", length = 250, nullable = false)
    private String product_lot_description;

    @Column(name = "product_lot_price", length = 45, nullable = false)
    private String product_lot_price;

    @Column(name = "product_lot_cant")
    private String product_lot_cant;

    @Column(name = "product_lot_foto", nullable = true)
    private String product_lot_foto;


    @ManyToOne
    @JoinColumn(name = "states_id", nullable = false)
    private States states_id;

    @Column(name = "created_at", nullable = false)
    private Date created_at;

    @Column(name = "updated_at", nullable = false)
    private Date  updated_at;

    @ManyToOne
    @JoinColumn(name = "provider_id", nullable = false)
    private Provider providerId;

}
