package com.xexymix.app.service;

import com.xexymix.app.dao.BuyDao;
import com.xexymix.app.dao.CartDao;
import com.xexymix.app.domain.CartDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {
    @Autowired
    CartDao cartDao;

    public int insertCart(List<CartDto> cartDesc){
        return cartDao.insertCart(cartDesc);
    }
}
