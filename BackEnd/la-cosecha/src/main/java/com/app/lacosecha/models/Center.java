package com.app.lacosecha.models;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
public class Center {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long center_id;

    @Column(name = "center_name", length = 45, nullable = false)
    private String center_name;
    @Column(name = "center_location", length = 100, nullable = false)
    private String center_location;

    @Column(name = "center_latitude", length = 100, nullable = false)
    private String center_latitude;

    @Column(name = "center_longitude")
    private String center_longitude;


    @ManyToOne
    @JoinColumn(name = "states_id", nullable = false)
    private States states_id;

    @Column(name = "created_at", nullable = false)
    private Date created_at;

    @Column(name = "updated_at", nullable = false)
    private Date  updated_at;
}
