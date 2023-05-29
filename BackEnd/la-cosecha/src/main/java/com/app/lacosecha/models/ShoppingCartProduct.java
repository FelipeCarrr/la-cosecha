package com.app.lacosecha.models;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
public class ShoppingCartProduct {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long shoppingCartProductId;

    @OneToOne
    @JoinColumn(name = "user_id",nullable = false)
    private User userId;


    @ManyToOne
    @JoinColumn(name = "states_id")
    private States statesId;

    @ManyToOne
    @JoinColumn(name = "shopping_cart_id")
    private ShoppingCart shoppingCartId;

    @ManyToOne
    @JoinColumn(name = "product_lot_id")
    private ProductLot productId;

    @Column(name = "shopping_cart_cant", nullable = false)
    private Double shoppingCartCant;
    @Column(name = "created_at", nullable = false)
    private Date created_at;

    @Column(name = "updated_at", nullable = false)
    private Date updated_at;
}
