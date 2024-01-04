package com.xexymix.app.service;

import com.xexymix.app.dao.BuyDao;
import com.xexymix.app.dao.ItemDao;
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
    @Autowired
    ItemDao itemDao;

    public Integer insertBuy(List<BuyDto> buyDesc){
        long buyNo = Long.parseLong(buyDao.selectBuyNo());
        for (BuyDto buys:buyDesc){ buys.setBuyNo(buyNo); }
        Integer result = itemDao.updateItemBuy(buyDesc);
        if (result == null || result < 1){ return result; }

        Integer result2 = buyDao.insertBuy(buyDesc);
        return result2;
    }

    public String deleteBuy(BuyDto buyDesc){
        String error = "";
        // 구매 상태 변경
        error += buyDao.deleteBuy(buyDesc.getBuyNo()) > 0? "": "구매 취소 변경 실패, ";
        // 구매 item 정보 변경
        List<BuyDto> buys = new ArrayList<>();
        buys.add(buyDesc);
        buys.get(0).setBuyCnt(-buys.get(0).getBuyCnt());
        System.out.println("buys : " + buys);
        error += itemDao.updateItemBuy(buys) > 0? "": "구매 취소 item 정보 변경 실패, ";
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
