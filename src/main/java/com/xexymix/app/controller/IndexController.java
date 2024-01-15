package com.xexymix.app.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.xexymix.app.service.CartService;
import com.xexymix.app.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.Map;

@Controller
public class IndexController {
    @Autowired
    ItemService itemService;
    @Autowired
    CartService cartService;

    @GetMapping("/")
    public String showIndex(HttpSession session, Model model, HttpServletResponse response) throws JsonProcessingException {
        Integer userNo = (Integer) session.getAttribute("userNo");

        Map<String, Object> indexList = itemService.showIndex();

        ObjectMapper mapper = new ObjectMapper();
        String best_js = mapper.writeValueAsString(indexList.get("best"));
        String mdPick_js = mapper.writeValueAsString(indexList.get("mdPick"));
        String cate_js = mapper.writeValueAsString(indexList.get("cate"));

        model.addAttribute("mainBanner", indexList.get("mainBanner"));
        model.addAttribute("best_js", best_js);
        model.addAttribute("mdPick", indexList.get("mdPick"));
        model.addAttribute("mdPick_js", mdPick_js);
        model.addAttribute("cate_js", cate_js);

        // 장바구니 개수 (쿠키)
//        int cartCnt = userNo == null?0:cartService.selectCartCnt(userNo);
//        Cookie cookie = new Cookie("cartCnt", cartCnt+"");
//        cookie.setPath("/");
//        response.addCookie(cookie);

        return "index";
    }
}
