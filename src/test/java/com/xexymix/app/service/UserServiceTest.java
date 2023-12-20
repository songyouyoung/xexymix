package com.xexymix.app.service;

import com.xexymix.app.dao.CartDao;
import com.xexymix.app.dao.UserDao;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.HashMap;
import java.util.Map;

import static org.junit.Assert.*;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"file:src/main/webapp/WEB-INF/spring/**/root-context.xml"})
public class UserServiceTest {
    @Autowired
    UserDao userDao;

    @Test
    public void selectMyPage() {
        int userNo = 3;
//        Map<String, Object> mypageDesc = new HashMap<>();
//        mypageDesc.put("user", userDao.selectUser(userNo));
//        mypageDesc.put("buy", userDao.selectUserBuy(userNo));
        Map<String, String> userBuy = new HashMap<>();
        userBuy.put("userNo", userNo+"");
        userBuy.put("buyCode", "buy");
        assertTrue( userDao.selectUserBuyCnt(userBuy) > 0);
        userBuy.put("buyCode", "cancel");
        assertTrue( userDao.selectUserBuyCnt(userBuy) > 0);
//        mypageDesc.put("qna", userDao.selectUserQna(userNo));
//        mypageDesc.put("rev", userDao.selectUserRev(userNo));
    }
}