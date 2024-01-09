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

    @PostMapping("/item/buy")
    @ResponseBody
    public ResponseEntity<String> buyItem(@RequestBody List<BuyDto> buyDesc, HttpSession session){
        Integer userNo = (Integer) session.getAttribute("userNo");
        for(BuyDto buys:buyDesc){ buys.setUserNo(userNo); }
        String error = "";
        String errorSub = "";
        try {
            // 품절 체크
            List<CartDto> cartDesc = new ArrayList<>();

            List<Map<String, Integer>> buyItemCnt = itemService.selectItemCnt(cartDesc);
            for(Map<String, Integer> buys:buyItemCnt){
                for (int i = 0; i < buyDesc.size(); i++){
                    if (buys.get("itemCnt") < 1){
                        error = "품절된 상품이 있습니다. \n";
                    }else if(buys.get("itemCnt") < buyDesc.get(i).getBuyCnt()){
                        errorSub += buyDesc.get(i).getItemName()+"은(는) " + buys.get("itemCnt") + "개 있습니다. \n 수량을 조정해주세요. \n";
                    }
                }
            }
            if (!error.isEmpty()){ throw new Exception("구매 실패. 품절된 상품 있음. "); }

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
            return new ResponseEntity<String> (error+errorSub, HttpStatus.BAD_REQUEST); // 400
        }
    }
}
