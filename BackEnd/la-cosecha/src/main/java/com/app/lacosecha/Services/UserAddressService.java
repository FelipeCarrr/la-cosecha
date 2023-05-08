package com.app.lacosecha.Services;



import com.app.lacosecha.models.User;
import com.app.lacosecha.models.UserAddress;

import java.util.List;
import java.util.Optional;

public interface UserAddressService {
    Boolean createUserAddress(UserAddress userAddress );
    List<UserAddress> getUser_id(User user);

    List<UserAddress> allUserAddress();
}
