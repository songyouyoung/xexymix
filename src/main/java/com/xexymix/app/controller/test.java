package com.xexymix.app.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import javax.servlet.http.HttpSession;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

@Controller
public class test {
    @GetMapping("test")
    public String showItem(HttpSession session, String itemNo, Model model) throws JsonProcessingException {
        return"test";
    }
    @PostMapping("/test/test")
    public String showIttem(HttpSession session, String itemNo, Model model) throws JsonProcessingException {

        return"test";
    }
}
