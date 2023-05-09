package com.app.lacosecha.Services;


import com.app.lacosecha.models.UserPass;

public interface UserPassService {
    String login (UserPass userPass);

    Boolean createUserPass(UserPass userPass);
}
