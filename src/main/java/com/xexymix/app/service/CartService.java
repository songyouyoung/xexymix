package com.xexymix.app.service;

import com.xexymix.app.dao.BuyDao;
import com.xexymix.app.dao.CartDao;
import com.xexymix.app.dao.ItemDao;
import com.xexymix.app.domain.BuyDto;
import com.xexymix.app.domain.CartDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class CartService {
    @Autowired
    CartDao cartDao;
    @Autowired
    BuyDao buyDao;

    public int insertCart(List<CartDto> cartDesc){
        return cartDao.insertCart(cartDesc);
    }

    public int selectCartCnt(int userNo){
        return cartDao.selectCartCnt(userNo);
    }

    public List<CartDto> selectCart(int userNo){
        return cartDao.selectCart(userNo);
    }

    public Integer deleteCart(List<Map<String, Integer>> userDesc){
        return cartDao.deleteCart(userDesc);
    }

    public String cartToBuy(List<CartDto> cartDesc, Integer userNo){
        String error = "";

        // 구매
        long buyNo = Long.parseLong(buyDao.selectBuyNo());
        List<BuyDto> buyDesc = new ArrayList<>();
        BuyDto buyDto = new BuyDto();
        buyDto.setBuyNo(buyNo);
        buyDto.setUserNo(userNo);
        buyDto.setBuyCode("buy");

        //장바구니 삭제
        List<Map<String, Integer>> userDesc = new ArrayList<>();
        Map<String, Integer> userMap = new HashMap<>();
        userMap.put("userNo", userNo);
        for (CartDto carts:cartDesc){
            // 구매
            buyDto.setItemNo(carts.getItemNo());
            buyDto.setBuyCnt(carts.getCartCnt());
            buyDto.setBuyOpt(carts.getCartOpt());
            buyDto.setItemPrice(carts.getItemPrice());
            buyDesc.add(buyDto);

            // 장바구니 삭제
            userMap.put("cartNo", carts.getCartNo());
            userDesc.add(userMap);
        }
        //구매
        error += buyDao.insertBuy(buyDesc) > 0? "": "구매 실패, ";

        //장바구니 삭제
        error += cartDao.deleteCart(userDesc) > 0? "": "구매 실패, ";
        return error;
    }
}
