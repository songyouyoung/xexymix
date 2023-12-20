package com.xexymix.app.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.xexymix.app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpSession;
import java.util.Map;

@Controller
@RequestMapping("/myPage")
public class MyPageController {
    @Autowired
    UserService userService;

    @GetMapping("")
    public String showMyPage(HttpSession session, Model model) throws JsonProcessingException {
        Integer userNo = (Integer) session.getAttribute("userNo");
        if (userNo == null || userNo < 1){ return "redirect:/"; }

        Map<String, Object> mypageDesc = userService.selectMyPage(userNo);
        ObjectMapper mapper = new ObjectMapper();
        String user_js = mapper.writeValueAsString(mypageDesc);

        model.addAttribute("user", mypageDesc);
        model.addAttribute("user_js", user_js);
        System.out.println(mypageDesc);
        return "mypage";
    }

    @GetMapping("/update")
    public String showMyPageUpdate(HttpSession session, Model model) throws JsonProcessingException {
        Integer userNo = (Integer) session.getAttribute("userNo");
        ObjectMapper mapper = new ObjectMapper();
        String user = mapper.writeValueAsString(userService.selectUser(userNo));
        model.addAttribute("user", user);
        return "join";
    }
}