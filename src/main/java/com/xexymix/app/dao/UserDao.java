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
///////////////////////////////////
//////////// 로그인
///////////////////////////////////
    public int selectLogin(UserDto userDto){
        return session.selectOne(namespace + "selectLogin", userDto);
    }

///////////////////////////////////
//////////// 회원가입
///////////////////////////////////
    public int insertUser(UserDto userDto){
        return session.insert(namespace + "insertUser", userDto);
    }

    public int selectIdChk(String userId){
        return session.selectOne(namespace + "selectIdChk", userId);
    }

    public int selectPhoneChk(String userPhone){
        return session.selectOne(namespace + "selectPhoneChk", userPhone);
    }

    public int selectEmailChk(String userEmail){
        return session.selectOne(namespace + "selectEmailChk", userEmail);
    }

///////////////////////////////////
//////////// 아이디 / 비밀번호 찾기
///////////////////////////////////
    public String selectFindId(UserDto userDto){
        return session.selectOne(namespace + "selectFindId", userDto);
    }
    public Integer selectFindPw(UserDto userDto){
        return session.selectOne(namespace + "selectFindPw", userDto);
    }
}
