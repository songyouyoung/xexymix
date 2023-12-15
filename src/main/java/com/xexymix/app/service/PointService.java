package com.xexymix.app.service;

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
public class PointService {
    @Autowired
    PointDao pointDao;

    public Boolean addPoint(List<BuyDto> buyDesc, Integer userNo){
        // 구매에 의한 적립
        List<PointDto> poDesc = new ArrayList<>();
        int totalPoint = 0;
        for(BuyDto buys:buyDesc){
            PointDto poDto = new PointDto();
            poDto.setBuyNo(buys.getBuyNo());
            poDto.setItemNo(buys.getItemNo());
            poDto.setUserNo(userNo);
            poDto.setPoint(buys.getItemPrice()/100);
            poDto.setPoTxt("구매에 대한 적립");
            poDesc.add(poDto);
            totalPoint += poDto.getPoint();
        }
        int insertPoint = pointDao.insertPoint(poDesc);

        // 유저 총 적립금 update
        Map<String, Integer> points = new HashMap<>();
        points.put("userNo", userNo);
        points.put("point", totalPoint);
        int updatePoint = pointDao.updatePoint(points);

        return insertPoint > 0 && updatePoint > 0;
    }
}
