package com.app.lacosecha.models;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
public class UserPass {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long user_pass_id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user_id;

    @Column(name = "user_pass_phone", length = 10, nullable = false)
    private String userPassPhone;

    @Column(name = "user_pass_pass", length = 255, nullable = false)
    private String user_pass_pass;

    @ManyToOne
    @JoinColumn(name = "states_id")
    private States states_id;

    @Column(name = "created_at", nullable = false)
    private Date created_at;

    @Column(name = "updated_at", nullable = false)
    private Date updated_at;
}
