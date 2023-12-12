package com.xexymix.app.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.xexymix.app.domain.QnaDto;
import com.xexymix.app.service.ItemService;
import com.xexymix.app.service.QnaService;
import com.xexymix.app.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpSession;
import java.io.File;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/item")
public class ItemController {
    @Autowired
    ItemService itemService;
    @Autowired
    ReviewService reviewService;
    @Autowired
    QnaService qnaService;

    @GetMapping("")
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

        return "item";
    }

    @GetMapping("/qna/detail")
    public String showQnaDetail(){
        return "write_qna";
    }
    private static final String F_PATH = "C:/Users/user/Desktop/portfolio/github/xexymix/src/main/webapp/resources/img/qna/";
    @PostMapping("/qna/update")
    public String updateQna(@RequestParam(value="qFile", required = false) List<MultipartFile> files, @RequestParam(value="w_img", required = false) List<MultipartFile> imgFiles, QnaDto qnaDesc){
        System.out.println("qnaDesc : " + qnaDesc);
        System.out.println("imgFiles : " + imgFiles);

        for(MultipartFile mf : files) {
            String originalFileName = mf.getOriginalFilename();
            String safeFile = F_PATH + System.currentTimeMillis() + originalFileName;
            System.out.println("originalFileName: " + originalFileName);
            System.out.println("safeFile: " + safeFile);
            try {
                mf.transferTo(new File(safeFile));
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        return "";
    }
}
