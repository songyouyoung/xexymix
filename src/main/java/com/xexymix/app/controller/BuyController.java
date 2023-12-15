package com.xexymix.app.controller;

import com.xexymix.app.domain.BuyDto;
import com.xexymix.app.service.BuyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
public class BuyController {
    @Autowired
    BuyService buyService;
    @PostMapping("/item/buy")
    @ResponseBody
    public int buyItem(@RequestBody List<BuyDto> buyDesc, HttpSession session){
        Integer userNo = (Integer) session.getAttribute("userNo");
        for(BuyDto buys:buyDesc){ buys.setUserNo(userNo); }
        return buyService.insertBuy(buyDesc);
    }
}
