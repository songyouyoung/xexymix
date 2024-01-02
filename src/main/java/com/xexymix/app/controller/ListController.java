package com.xexymix.app.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.xexymix.app.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@Controller
public class ListController {
    @Autowired
    ItemService itemService;

    @GetMapping("/list")
    public String showIndex(Model model) throws JsonProcessingException {
        return "list";
    }
}
