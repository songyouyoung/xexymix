package com.xexymix.app.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.xexymix.app.domain.CartDto;
import com.xexymix.app.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
public class CartController {
    @Autowired
    CartService cartService;

    @PostMapping("/item/cart")
    @ResponseBody
    public int cartItem(@RequestBody List<CartDto> cartDesc, HttpSession session, HttpServletResponse response) {
        Integer userNo = (Integer) session.getAttribute("userNo");
        for(CartDto carts:cartDesc){ carts.setUserNo(userNo); }
        int item = cartService.insertCart(cartDesc);

        // 장바구니 개수 (쿠키)
        int cartCnt = cartService.selectCartCnt(userNo);
        Cookie cookie = new Cookie("cartCnt", cartCnt+"");
        cookie.setPath("/");
        response.addCookie(cookie);

        return item;
    }

    @GetMapping("cart")
    public String showCart(HttpSession session, Model model) throws JsonProcessingException {
        Integer userNo = (Integer) session.getAttribute("userNo");
        List<CartDto> cartDtos = cartService.selectCart(userNo);
        ObjectMapper mapper = new ObjectMapper();
        String cart = mapper.writeValueAsString(cartDtos);
        System.out.println("cart : " + cart);

        model.addAttribute("cart", cart);
        return "cart";
    }

    @PostMapping("/cart/delete")
    @ResponseBody
    public ResponseEntity<String> cartItem(@RequestBody CartDto cartDesc, HttpSession session) {
        Integer userNo = (Integer) session.getAttribute("userNo");
        cartDesc.setUserNo(userNo);
        try {
            String userId = userService.userFindId(userDto);
            if (userId.isEmpty()){ throw new Exception("장바구니 삭제 실패. "); }
            return new ResponseEntity<String>(userId, HttpStatus.OK);
        }
        catch (Exception e) {
            return new ResponseEntity<String>(HttpStatus.BAD_REQUEST);
        }
    }
}
