package com.app.lacosecha.repository;




import com.app.lacosecha.models.User;
import com.app.lacosecha.models.UserAddress;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface UserAddressRepository extends JpaRepository<UserAddress, Long> {

    List<UserAddress> findByUserId(User user);


}
