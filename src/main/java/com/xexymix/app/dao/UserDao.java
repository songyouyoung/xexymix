package com.xexymix.app.dao;

import com.xexymix.app.domain.UserDto;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserDao {
    @Autowired
    SqlSession session;

    String namespace = "com.xexymix.app.dao.userMapper.";

    public int insertUser(UserDto userDto){
        return session.insert(namespace + "insertUser", userDto);
    }
}
