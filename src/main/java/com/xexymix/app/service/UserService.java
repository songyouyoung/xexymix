package com.xexymix.app.service;

import com.xexymix.app.dao.UserDao;
import com.xexymix.app.domain.UserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class UserService {
    @Autowired
    UserDao userDao;

    public int joinUser(UserDto userDto){
        return userDao.insertUser(userDto);
    }
///////////////////////////////////
//////////// 로그인
///////////////////////////////////
    public int userLogin(UserDto userDto){
        return userDao.selectLogin(userDto);
    }

///////////////////////////////////
//////////// 회원가입
///////////////////////////////////
    public Map<String, String> userChk(UserDto userDto){
        Map<String, String> userChkResult = new HashMap<>();
        if(userDao.selectIdChk(userDto.getUserId()) > 0){
            userChkResult.put("id", "이미 있는 아이디입니다. ");
        }
        if(userDao.selectPhoneChk(userDto.getUserPhone()) > 0){
            userChkResult.put("phone", "이미 있는 전화번호입니다. ");
        }
        if(userDao.selectEmailChk(userDto.getUserEmail()) > 0){
            userChkResult.put("email", "이미 있는 이메일입니다. ");
        }
        return userChkResult;
    }
}
