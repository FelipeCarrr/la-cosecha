package com.app.lacosecha.models;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;


@Data
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long userId;

    @ManyToOne
    @JoinColumn(name = "rol_id")
    private Rol rol_id;

    @Column(name = "user_name", length = 100, nullable = false)
    private String user_name;

    @Column(name = "user_phone", length = 10, nullable = false, unique = true)
    private String userPhone;

    @Column(name = "user_second_phone", length = 10, nullable = true)
    private String user_second_phone;

    @Column(name = "created_at", nullable = false)
    private Date created_at;

    @Column(name = "updated_at", nullable = false)
    private Date updated_at;

    @ManyToOne
    @JoinColumn(name = "states_id")
    private States states_id;


}
