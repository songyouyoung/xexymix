package com.xexymix.app.controller;

import com.xexymix.app.domain.CartDto;
import com.xexymix.app.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
public class CartController {
    @Autowired
    CartService cartService;

    @PostMapping("/item/cart")
    @ResponseBody
    public int buyItem(@RequestBody List<CartDto> cartDesc, HttpSession session) {
        Integer userNo = (Integer) session.getAttribute("userNo");
        for(CartDto carts:cartDesc){ carts.setUserNo(userNo); }
        return cartService.insertCart(cartDesc);
    }
}
