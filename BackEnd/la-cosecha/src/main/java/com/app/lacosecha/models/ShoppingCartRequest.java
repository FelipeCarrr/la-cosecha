package com.app.lacosecha.models;

import lombok.Data;

@Data
public class ShoppingCartRequest {
    private User user;
    private States states;
}
