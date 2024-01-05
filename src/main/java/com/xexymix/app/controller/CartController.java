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
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class CartController {
    @Autowired
    CartService cartService;

    @PostMapping("/item/cart")
    @ResponseBody
    public int cartItem(@RequestBody List<CartDto> cartDesc, HttpSession session) {
        Integer userNo = (Integer) session.getAttribute("userNo");
        for(CartDto carts:cartDesc){ carts.setUserNo(userNo); }
        int item = cartService.insertCart(cartDesc);

        return item;
    }

    @GetMapping("cart")
    public String showCart(HttpSession session, Model model, HttpServletResponse response) throws JsonProcessingException {
        Integer userNo = (Integer) session.getAttribute("userNo");
        if (userNo == null){return "redirect:/login/login?prevPage=/cart";}
        List<CartDto> cartDtos = cartService.selectCart(userNo);
        ObjectMapper mapper = new ObjectMapper();
        String cart = mapper.writeValueAsString(cartDtos);

        model.addAttribute("cart", cart);

        // 장바구니 개수 (쿠키)
        int cartCnt = cartService.selectCartCnt(userNo);
        Cookie cookie = new Cookie("cartCnt", cartCnt+"");
        cookie.setPath("/");
        response.addCookie(cookie);

        return "cart";
    }

    @PostMapping("/cart/delete")
    @ResponseBody
    public ResponseEntity<String> cartItem(@RequestBody Integer cartNo, HttpSession session) {
        Integer userNo = (Integer) session.getAttribute("userNo");
        try {
            List<Map<String, Integer>> userDesc = new ArrayList<>();
            Map<String, Integer> userMap = new HashMap<>();
            userMap.put("userNo", userNo);
            userMap.put("cartNo", cartNo);
            userDesc.add(userMap);
            Integer result = cartService.deleteCart(userDesc);
            if (result == null || result < 1){ throw new Exception("장바구니 삭제 실패. "); }
            return new ResponseEntity<String>(HttpStatus.OK);
        }
        catch (Exception e) {
            return new ResponseEntity<String>(HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/cart/buy")
    @ResponseBody
    public ResponseEntity<String> cartToBuy(@RequestBody List<CartDto> cartDesc, HttpSession session) {
        Integer userNo = (Integer) session.getAttribute("userNo");
        try {
            if (cartDesc == null){ throw new Exception("구매 실패. 구매할 상품 없음. "); }
            System.out.println("cartDesc : " + cartDesc);
            String result = cartService.cartToBuy(cartDesc, userNo);
            System.out.println("result : " + result);
            if (!result.isEmpty()){ throw new Exception("구매 실패. "); }
            return new ResponseEntity<String>(HttpStatus.OK);
        }
        catch (Exception e) {
            return new ResponseEntity<String>(HttpStatus.BAD_REQUEST);
        }
    }
}
