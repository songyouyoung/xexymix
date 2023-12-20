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

///////////////////////////////////
//////////// 아이디 / 비밀번호 찾기
///////////////////////////////////
    public String userFindId(UserDto userDto){
        return userDao.selectFindId(userDto);
    }
    public Integer userFindPw(UserDto userDto){
        return userDao.selectFindPw(userDto);
    }

///////////////////////////////////
//////////// 마이페이지
///////////////////////////////////
    // 회원정보 불러오기
    public Map<String, Object> selectMyPage(Integer userNo){
        Map<String, Object> mypageDesc = new HashMap<>();
        mypageDesc.put("user", userDao.selectUser(userNo));
        mypageDesc.put("buy", userDao.selectUserBuy(userNo));
        Map<String, String> userBuy = new HashMap<>();
        userBuy.put("userNo", userNo+"");
        userBuy.put("buyCode", "buy");
        mypageDesc.put("buyCnt", userDao.selectUserBuyCnt(userBuy));
        userBuy.put("buyCode", "cancel");
        mypageDesc.put("cancelCnt", userDao.selectUserBuyCnt(userBuy));
        mypageDesc.put("qna", userDao.selectUserQna(userNo));
        mypageDesc.put("rev", userDao.selectUserRev(userNo));
        return mypageDesc;
    }
}