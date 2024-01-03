package com.xexymix.app.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.xexymix.app.domain.BuyDto;
import com.xexymix.app.domain.ItemDto;
import com.xexymix.app.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class ListController {
    @Autowired
    ItemService itemService;

    @GetMapping("/list")
    public String showList(Model model, String cate) throws JsonProcessingException {
        Map<String, String> itemDesc = new HashMap<>();
        itemDesc.put("cate", cate);
        itemDesc.put("order", "itemRegDate");
        itemDesc.put("sort", "DESC");
        if (cate.equals("event")){
            itemDesc.put("evNo", "1");
        }else if(cate.equals("new")){
            Date endDate = new Date();
            Date startDate = new Date();
            startDate.setDate(startDate.getDate()-14);
            startDate.setHours(0);
            startDate.setMinutes(0);
            startDate.setSeconds(0);
            SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

            itemDesc.put("startDate", sdf1.format(startDate));
            itemDesc.put("endDate", sdf1.format(endDate));
        }
        itemDesc.put("limit", "0");
        List<ItemDto> itemList =  itemService.showListItem(itemDesc);
        System.out.println("itemList : " + itemList);

        ObjectMapper mapper = new ObjectMapper();
        String itemList_js = mapper.writeValueAsString(itemList);
        model.addAttribute("itemList", itemList_js);

        return "list";
    }
}
