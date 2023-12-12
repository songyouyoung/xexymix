package com.xexymix.app.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.xexymix.app.service.ItemService;
import com.xexymix.app.service.QnaService;
import com.xexymix.app.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;

@Controller
public class ItemController {
    @Autowired
    ItemService itemService;
    @Autowired
    ReviewService reviewService;
    @Autowired
    QnaService qnaService;

    @GetMapping("/item")
    public String showItem(HttpSession session, String itemNo, Model model) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        String item_js = mapper.writeValueAsString(itemService.showItemDetail(itemNo).get("item"));
        Map<String, String> revDesc = new HashMap<>();
        revDesc.put("itemNo", itemNo);
        revDesc.put("limit", "0");
        revDesc.put("search", "new");
        String review_js = mapper.writeValueAsString(reviewService.showReview(revDesc));
        String reviewBest_js = mapper.writeValueAsString(reviewService.showBestReview(revDesc));
        String reviewChart_js = mapper.writeValueAsString(reviewService.showRevChart(itemNo));
        Map<String, String> qnaDesc = new HashMap<>();
        qnaDesc.put("itemNo", itemNo);
        qnaDesc.put("limit", "0");
        String qna_js = mapper.writeValueAsString(qnaService.showQna(qnaDesc));

        model.addAttribute("item", itemService.showItemDetail(itemNo).get("item"));
        model.addAttribute("item_js", item_js);
        model.addAttribute("revMaxCnt", reviewService.cntReview(itemNo));
        model.addAttribute("review_js", review_js);
        model.addAttribute("reviewBest_js", reviewBest_js);
        model.addAttribute("reviewChart_js", reviewChart_js);
        model.addAttribute("qnaMaxCnt", qnaService.cntQna(itemNo));
        model.addAttribute("qna_js", qna_js);
        System.out.println("qna" + qna_js);

        return "item";
    }

    @GetMapping("/read/qna")
    public String showQnaDetail(){
        return "write_qna";
    }
}
