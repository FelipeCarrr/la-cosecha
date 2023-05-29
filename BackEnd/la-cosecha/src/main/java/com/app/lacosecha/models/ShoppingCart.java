package com.app.lacosecha.models;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
public class ShoppingCart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long shoppingCartId;

    @OneToOne
    @JoinColumn(name = "user_id",nullable = false)
    private User userId;


    @ManyToOne
    @JoinColumn(name = "states_id")
    private States statesId;

    @Column(name = "created_at", nullable = false)
    private Date created_at;

    @Column(name = "updated_at", nullable = false)
    private Date updated_at;
}
