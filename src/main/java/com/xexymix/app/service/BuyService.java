package com.xexymix.app.service;

import com.xexymix.app.dao.BuyDao;
import com.xexymix.app.domain.BuyDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BuyService {
    @Autowired
    BuyDao buyDao;

    public int insertBuy(List<BuyDto> buyDesc){
        long buyNo = Long.parseLong(buyDao.selectBuyNo());
        for (BuyDto buys:buyDesc){ buys.setBuyNo(buyNo); }
        System.out.println("buyDesc : " + buyDesc);
        return buyDao.insertBuy(buyDesc);
    }
}
