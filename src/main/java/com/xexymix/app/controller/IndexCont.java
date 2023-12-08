package com.xexymix.app.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.http.HttpSession;

@Controller
public class IndexCont {
    @GetMapping("/")
    public String showIndex(HttpSession session, Model model) throws JsonProcessingException {
        return "index";
    }
}
