package com.xexymix.app.controller;

import com.xexymix.app.domain.BuyDto;
import com.xexymix.app.domain.CartDto;
import com.xexymix.app.service.BuyService;
import com.xexymix.app.service.ItemService;
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
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Controller
public class BuyController {
    @Autowired
    BuyService buyService;
    @Autowired
    PointService pointService;
    @Autowired
    ItemService itemService;

    @PostMapping(value = "/item/buy", produces="application/text;charset=utf-8")
    @ResponseBody
    public ResponseEntity<String> buyItem(@RequestBody List<BuyDto> buyDesc, HttpSession session){
        Integer userNo = (Integer) session.getAttribute("userNo");
        for(BuyDto buys:buyDesc){ buys.setUserNo(userNo); }
        String error = "";
        try {
            // 품절 체크
            List<CartDto> cartDesc = new ArrayList<>();
            CartDto carts = new CartDto();
            for(BuyDto buy:buyDesc){
                carts.setItemNo(buy.getItemNo());
                cartDesc.add(carts);
            }
            List<Map<String, Integer>> buyItemCnt = itemService.selectItemCnt(cartDesc);
            for(Map<String, Integer> buys:buyItemCnt){
                for (int i = 0; i < buyDesc.size(); i++){
                    System.out.println("현재개수 : " + buys.get("itemCnt") + ", 구매개수 : " + buyDesc.get(i).getBuyCnt());
                    if (buys.get("itemCnt") < 1){
                        error += "해당 상품은 품절입니다. \n";
                    }else if(buys.get("itemCnt") < buyDesc.get(i).getBuyCnt()){
                        error += "해당 상품은 " + buys.get("itemCnt") + "개 있습니다. \n";
                    }
                }
            }
            if (!error.isEmpty()){
                error += "수량을 조정해주세요.";
                throw new Exception("구매 실패. 품절된 상품 있음. ");
            }

            Integer buyResult = buyService.insertBuy(buyDesc);
            Boolean pointResult = pointService.addPoint(buyDesc, userNo);
            if (buyResult == null || buyResult == 0){
                throw new Exception("구매 오류");
            }else if(!pointResult){
                throw new Exception("적립 오류");
            }
            return new ResponseEntity<String>(HttpStatus.OK); // 200
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<String> (error, HttpStatus.BAD_REQUEST); // 400
        }
    }
}
