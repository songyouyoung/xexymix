package com.xexymix.app.service;

import com.xexymix.app.dao.UserDao;
import com.xexymix.app.domain.UserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    UserDao userDao;

    public int joinUser(UserDto userDto){
        return userDao.insertUser(userDto);
    }
}
