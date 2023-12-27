package com.xexymix.app.service;

import com.xexymix.app.dao.UserDao;
import com.xexymix.app.domain.BuyDto;
import com.xexymix.app.domain.QnaDto;
import com.xexymix.app.domain.ReviewDto;
import com.xexymix.app.domain.UserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
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
    public Integer userLogin(UserDto userDto){
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
    public UserDto selectUser(Integer userNo){
        return userDao.selectUser(userNo);
    }

    // 회원정보 전체 불러오기
    public Map<String, Object> selectMyPage(Integer userNo){
        Map<String, Object> mypageDesc = new HashMap<>();
        mypageDesc.put("user", userDao.selectUser(userNo));
        mypageDesc.put("buy", userDao.selectUserBuy(userNo));
        Map<String, String> userBuy = new HashMap<>();
        userBuy.put("userNo", userNo+"");
        userBuy.put("buyCode", "buy");
        mypageDesc.put("buyCnt", selectUserBuyCnt(userBuy));
        userBuy.put("buyCode", "cancel");
        mypageDesc.put("cancelCnt", userDao.selectUserBuyCnt(userBuy));
        Map<String, Integer> userDesc = new HashMap<>();
        userDesc.put("userNo", userNo);
        userDesc.put("limit", 0);
        userDesc.put("limitMax", 5);
        mypageDesc.put("qna", userDao.selectUserQna(userDesc));
        userDesc.put("limitMax", 3);
        mypageDesc.put("rev", userDao.selectUserRev(userDesc));
        return mypageDesc;
    }
    public List<ReviewDto> selectUserRev(Map<String, Integer> userDesc){
        return userDao.selectUserRev(userDesc);
    }
    public List<QnaDto> selectUserQna(Map<String, Integer> userDesc){
        return userDao.selectUserQna(userDesc);
    }
    public Integer selectUserBuyCnt(Map<String, String> userBuy){
        return userDao.selectUserBuyCnt(userBuy);
    }
    public Integer updatePw(UserDto userDto){
        return userDao.updatePw(userDto);
    }

    public Integer updateUser(UserDto userDto){
        return userDao.updateUser(userDto);
    }

    public List<BuyDto> selectUserBuyAll(Map<String, String> userDesc){
        return userDao.selectUserBuyAll(userDesc);
    }

    public Integer selectUserRevCnt(Integer userNo){
        return userDao.selectUserRevCnt(userNo);
    }

    public Integer selectUserQnaCnt(Integer userNo){
        return userDao.selectUserQnaCnt(userNo);
    }
}