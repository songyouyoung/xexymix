package com.xexymix.app.service;

import com.xexymix.app.dao.BuyDao;
import com.xexymix.app.domain.BuyDto;
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
public class BuyServiceTest {
    @Autowired
    BuyDao buyDao;

    @Test
    public void insertBuy() {
        BuyDto buyDto = new BuyDto();
        long buyNo = Long.parseLong(buyDao.selectBuyNo());
        buyDto.setBuyNo(buyNo);
        buyDto.setItemNo("XWFTP03H3");
        buyDto.setBuyCnt(1);
        buyDto.setBuyOpt("L");
        buyDto.setBuyCode("buy");
        buyDto.setUserNo(1);
        List<BuyDto> buyDesc = new ArrayList<>();
        buyDesc.add(buyDto);
        assertTrue(buyDao.insertBuy(buyDesc) > 0);
    }
}