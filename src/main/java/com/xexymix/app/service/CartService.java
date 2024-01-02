package com.xexymix.app.service;

import com.xexymix.app.dao.BuyDao;
import com.xexymix.app.dao.CartDao;
import com.xexymix.app.domain.CartDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class CartService {
    @Autowired
    CartDao cartDao;

    public int insertCart(List<CartDto> cartDesc){
        return cartDao.insertCart(cartDesc);
    }

    public int selectCartCnt(int userNo){
        return cartDao.selectCartCnt(userNo);
    }

    public List<CartDto> selectCart(int userNo){
        return cartDao.selectCart(userNo);
    }

    public Integer deleteCart(Map<String, Integer> userDesc){
        return cartDao.deleteCart(userDesc);
    }
}
