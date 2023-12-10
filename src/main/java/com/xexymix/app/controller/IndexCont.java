package com.xexymix.app.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.xexymix.app.domain.ItemDto;
import com.xexymix.app.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;

@Controller
public class IndexCont {
    @Autowired
    ItemService itemService;

    @GetMapping("/")
    public String showIndex(HttpSession session, Model model) throws JsonProcessingException {
        Map<String, Object> indexList = itemService.showIndex();

        ObjectMapper mapper = new ObjectMapper();
//        String mainBanner = mapper.writeValueAsString(indexList.get("mainBanner"));
        String best_js = mapper.writeValueAsString(indexList.get("best"));
        String mdPick_js = mapper.writeValueAsString(indexList.get("mdPick"));
        String cate_js = mapper.writeValueAsString(indexList.get("cate"));
//        String cate_mens = mapper.writeValueAsString(indexList.get("cate_mens"));
//        String cate_top = mapper.writeValueAsString(indexList.get("cate_top"));
//        String cate_bottom = mapper.writeValueAsString(indexList.get("cate_bottom"));
//        String cate_outer = mapper.writeValueAsString(indexList.get("cate_outer"));
//        String cate_golf = mapper.writeValueAsString(indexList.get("cate_golf"));
//        String cate_kids = mapper.writeValueAsString(indexList.get("cate_kids"));

        model.addAttribute("mainBanner", indexList.get("mainBanner"));
        model.addAttribute("best", indexList.get("best"));
        model.addAttribute("best_js", best_js);
        model.addAttribute("mdPick", indexList.get("mdPick"));
        model.addAttribute("mdPick_js", mdPick_js);
        model.addAttribute("cate", indexList.get("cate"));
        model.addAttribute("cate_js", cate_js);
//        model.addAttribute("cate_top", indexList.get("cate_top"));
//        model.addAttribute("cate_bottom", indexList.get("cate_bottom"));
//        model.addAttribute("cate_outer", indexList.get("cate_outer"));
//        model.addAttribute("cate_golf", indexList.get("cate_golf"));
//        model.addAttribute("cate_kids", indexList.get("cate_kids"));

        return "index";
    }
}
