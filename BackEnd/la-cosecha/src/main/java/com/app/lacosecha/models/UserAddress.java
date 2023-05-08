package com.app.lacosecha.models;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class UserAddress {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long user_address_id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User userId;

    @Column(name = "user_address_name", length = 45, nullable = false)
    private String user_address_name;

    @Column(name = "user_address_address", length = 45, nullable = false)
    private String user_address_address;

    @Column(name = "user_address_indication", length = 100, nullable = false)
    private String user_address_indication;

    @ManyToOne
    @JoinColumn(name = "states_id", nullable = false)
    private States states_id;

    @Column(name = "created_at", nullable = false)
    private String created_at;

    @Column(name = "updated_at", nullable = false)
    private String  updated_at;

}
