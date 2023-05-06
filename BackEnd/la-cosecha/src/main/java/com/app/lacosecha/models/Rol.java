package com.app.lacosecha.models;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Rol {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long rol_id;

    @Column(name = "rol_name", length = 45, nullable = false)
    private String rol_name;

    @ManyToOne
    @JoinColumn(name = "states_id")
    private States states_id;



}
