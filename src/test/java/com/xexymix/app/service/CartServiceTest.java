package com.xexymix.app.service;

import com.xexymix.app.dao.BuyDao;
import com.xexymix.app.dao.CartDao;
import com.xexymix.app.domain.BuyDto;
import com.xexymix.app.domain.CartDto;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.*;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"file:src/main/webapp/WEB-INF/spring/**/root-context.xml"})
public class CartServiceTest {
    @Autowired
    CartDao cartDao;

    @Test
    public void insertCart() {
        CartDto cartDto = new CartDto();
        cartDto.setItemNo("XWFTP03H3");
        cartDto.setCartCnt(1);
        cartDto.setCartOpt("M");
        cartDto.setUserNo(1);
        List<CartDto> cartDesc = new ArrayList<>();
        cartDesc.add(cartDto);
        assertTrue(cartDao.insertCart(cartDesc) > 0);
    }
}