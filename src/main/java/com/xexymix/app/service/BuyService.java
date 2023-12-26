package com.xexymix.app.service;

import com.xexymix.app.dao.BuyDao;
import com.xexymix.app.dao.PointDao;
import com.xexymix.app.domain.BuyDto;
import com.xexymix.app.domain.PointDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class BuyService {
    @Autowired
    BuyDao buyDao;
    @Autowired
    PointDao pointDao;

    public int insertBuy(List<BuyDto> buyDesc){
        long buyNo = Long.parseLong(buyDao.selectBuyNo());
        for (BuyDto buys:buyDesc){ buys.setBuyNo(buyNo); }
        return buyDao.insertBuy(buyDesc);
    }

    public String deleteBuy(BuyDto buyDesc){
        String error = "";
        // 구매 상태 변경
        error += buyDao.deleteBuy(buyDesc.getBuyNo()) > 0? "": "구매 취소 변경 실패, ";
        // 적립 취소
        Map<String, String> selPo = new HashMap<>();
        selPo.put("search", "buy");
        selPo.put("buyNo", buyDesc.getBuyNo()+"");
        List<PointDto> poDesc = pointDao.selectPoint(selPo);
        int totalPoint = 0;
        for(PointDto po:poDesc){
            po.setPoint(-po.getPoint());
            totalPoint += po.getPoint();
            po.setPoTxt("구매 취소에 의한 적립 취소");
        }
        System.out.println("poDesc : " + poDesc);
        error += pointDao.insertPoint(poDesc) > 0? "": "point 적립 오류, ";
        // 유저 적립금 update
        System.out.println("totalPoint : " + totalPoint);
        Map<String, Integer> points = new HashMap<>();
        points.put("userNo", buyDesc.getUserNo());
        points.put("point", totalPoint);
        System.out.println("points : " + points);
        error += pointDao.updatePoint(points) > 0? "": "유저 적립금 update 오류";
        return error;
    }
}
