package com.app.lacosecha.models;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity

public class States {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long states_id;

    @Column(name = "states_name", length = 45, nullable = false)
    private String states_name;
}
