package com.xexymix.app.controller;

import com.xexymix.app.domain.BuyDto;
import com.xexymix.app.service.BuyService;
import com.xexymix.app.service.PointService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
public class BuyController {
    @Autowired
    BuyService buyService;
    @Autowired
    PointService pointService;

    @PostMapping("/item/buy")
    @ResponseBody
    public ResponseEntity<Boolean> buyItem(@RequestBody List<BuyDto> buyDesc, HttpSession session){
        Integer userNo = (Integer) session.getAttribute("userNo");
        for(BuyDto buys:buyDesc){ buys.setUserNo(userNo); }
        Boolean buyChk = true;
        try {
            Integer buyResult = buyService.insertBuy(buyDesc);
            Boolean pointResult = pointService.addPoint(buyDesc, userNo);
            if (buyResult == null || buyResult == 0){
                buyChk = false;
                throw new Exception("구매 오류");
            }else if(!pointResult){
                buyChk = false;
                throw new Exception("적립 오류");
            }
            return new ResponseEntity<Boolean>(buyChk, HttpStatus.OK); // 200
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<Boolean> (HttpStatus.BAD_REQUEST); // 400
        }
    }
}
