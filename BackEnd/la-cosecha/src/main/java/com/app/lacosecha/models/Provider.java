package com.app.lacosecha.models;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
public class Provider {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long providerId;
    @Column(name = "provider_name_enterprise", length = 45, nullable = false)
    private String providerNameEnterprise;
    @Column(name = "provider_photo", length = 250, nullable = false)
    private String providerPhoto;
    @ManyToOne
    @JoinColumn(name = "states_id", nullable = false)
    private States states_id;
    @Column(name = "created_at", nullable = false)
    private Date created_at;
    @Column(name = "updated_at", nullable = false)
    private Date  updated_at;
    @OneToOne
    @JoinColumn(name = "user_id", nullable = false, unique = true)
    private User userId;
}
