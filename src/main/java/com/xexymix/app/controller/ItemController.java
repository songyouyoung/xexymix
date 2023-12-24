package com.xexymix.app.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.xexymix.app.domain.ItemDto;
import com.xexymix.app.domain.QnaDto;
import com.xexymix.app.domain.ReviewDto;
import com.xexymix.app.service.ItemService;
import com.xexymix.app.service.QnaService;
import com.xexymix.app.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.*;

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
    public String showItem(HttpServletResponse response, HttpServletRequest request, String itemNo, Model model) throws JsonProcessingException, UnsupportedEncodingException {
        // 화면 구현
        ItemDto itemDetail = itemService.showItemDetail(itemNo);

        ObjectMapper mapper = new ObjectMapper();
        String item_js = mapper.writeValueAsString(itemDetail);
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


        model.addAttribute("item", itemDetail);
        model.addAttribute("item_js", item_js);
        model.addAttribute("revMaxCnt", reviewService.cntReview(itemNo));
        model.addAttribute("review_js", review_js);
        model.addAttribute("reviewBest_js", reviewBest_js);
        model.addAttribute("reviewChart_js", reviewChart_js);
        model.addAttribute("qnaMaxCnt", qnaService.cntQna(itemNo));
        model.addAttribute("qna_js", qna_js);

        // 쿠키 생성 (history)
        int historyNo = 0;
        String prevHistory = "";
        boolean historyChk = true;
        Cookie[] cookies = request.getCookies();
        if (cookies == null){
            addCookie(historyNo, itemNo, itemDetail, response);
            return "item";
        }
        for (Cookie c : cookies) {
            if (c.getName().startsWith("historyItem")) {
                prevHistory = c.getValue();
                if (prevHistory.equals(itemNo)){
                    historyChk = false;
                    break;
                }
                int no = Integer.parseInt(c.getName().replace("historyItem", ""));
                historyNo = Math.max(no, historyNo);
            }
        }
        if (historyChk) {
            addCookie(historyNo, itemNo, itemDetail, response);
        }
        return "item";
    }
    public void addCookie(int historyNo, String itemNo, ItemDto itemDetail, HttpServletResponse response) throws UnsupportedEncodingException {
        historyNo += 1;
        Cookie cookie = new Cookie("historyItem" + historyNo, itemNo);
        cookie.setMaxAge(60 * 60 * 24);
        cookie.setPath("/");
        Cookie cookie2 = new Cookie("historyImg" + historyNo, itemDetail.getItemImg());
        cookie2.setMaxAge(60 * 60 * 24);
        cookie2.setPath("/");
        Cookie cookie3 = new Cookie("historyName" + historyNo, URLEncoder.encode(itemDetail.getItemName(), "UTF-8"));
        cookie3.setMaxAge(60 * 60 * 24);
        cookie3.setPath("/");
        int historyPrice = itemDetail.getItemPrice() / 100 * (itemDetail.getEvPer() > 0?100-itemDetail.getEvPer():100);
        Cookie cookie4 = new Cookie("historyPrice" + historyNo, historyPrice+"");
        cookie4.setMaxAge(60 * 60 * 24);
        cookie4.setPath("/");
        response.addCookie(cookie);
        response.addCookie(cookie2);
        response.addCookie(cookie3);
        response.addCookie(cookie4);
    }

    @GetMapping("/qna/detail")
    public String showQnaDetail(){
        return "write_qna";
    }

    @PostMapping("/qna/update")
    public String updateQna(@RequestParam(value="wFile", required = false) List<MultipartFile> imgFiles, QnaDto qnaDesc, String w_cancel, String oriImg, String prevPage, String itemNo){
        String F_PATH = "C:/Users/user/Desktop/portfolio/github/xexymix/src/main/webapp/resources/img/qna/"; //집
//     String F_PATH = "C:/Users/user1/Documents/GitHub/xexymix/src/main/webapp/resources/img/qna/"; //학원

//        List<String> origImg = new ArrayList<>(Arrays.asList(oriImg.split("\\|")));
//        List<String> deleteImg = List.of(w_cancel.split("\\|"));
//        StringBuilder qnaFile = new StringBuilder();
//        boolean delFileChk = true;
//        for(String ori:origImg){
//            for(String del:deleteImg){
//                if(ori.equals(del)){
//                    delFileChk = false;
//                    break;
//                }
//            }
//            if (delFileChk) { qnaFile.append(ori).append("|"); }
//        }
//        StringBuilder qnaFileOri = new StringBuilder(qnaFile.substring(0));
//
//        for(MultipartFile mf : imgFiles) {
//            if (mf.getOriginalFilename().equals("")){ break; }
//            String originalFileName = mf.getOriginalFilename();
//            String safeFileName = System.currentTimeMillis() + originalFileName;
//            String safeFile = F_PATH + safeFileName;
//            qnaFile.append(safeFileName).append("|");
//            qnaFileOri.append(originalFileName).append("|");
//            try {
//                mf.transferTo(new File(safeFile));
//            } catch (Exception e) {
//                e.printStackTrace();
//            }
//        }
        Map<String, String> files = updateFile(imgFiles, oriImg, w_cancel, F_PATH);

        qnaDesc.setQnaFile(files.get("file"));
        qnaDesc.setQnaFileOri(files.get("fileOri"));
        qnaService.updateQna(qnaDesc);
        prevPage = prevPage.replace("/app","");
        return "redirect:" + prevPage + (itemNo!=null?"?itemNo="+itemNo:"");
    }

    @PostMapping("/qna/select")
    @ResponseBody
    public List<QnaDto> showQna(@RequestBody Map<String, String> qnaDesc){
        List<QnaDto> qnaList = qnaService.showQna(qnaDesc);
        return qnaList;
    }

    @PostMapping("/review/select")
    @ResponseBody
    public List<ReviewDto> showRev(@RequestBody Map<String, String> revDesc){
        List<ReviewDto> revList = reviewService.showReview(revDesc);
        return revList;
    }

    @GetMapping("/rev/detail")
    public String showRevDetail(){
        return "write_review";
    }

    @PostMapping("/rev/update")
    public String updateRev(@RequestParam(value="wFile", required = false) List<MultipartFile> imgFiles, ReviewDto revDesc, String w_cancel, String oriImg, String prevPage, String itemNo, HttpServletRequest request){
        String F_PATH = "C:/Users/user/Desktop/portfolio/github/xexymix/src/main/webapp/resources/img/review/"; //집
//     String F_PATH = "C:/Users/user1/Documents/GitHub/xexymix/src/main/webapp/resources/img/review/"; //학원
        Map<String, String> files = updateFile(imgFiles, oriImg, w_cancel, F_PATH);

        revDesc.setRevFile(files.get("file"));
        revDesc.setRevFileOri(files.get("fileOri"));
        System.out.print("revDesc : ");
        System.out.println(revDesc);
        reviewService.updateRev(revDesc);
        prevPage = prevPage.replace("/app","");
        //prevPageTmp.contains("login")
//        if (prevPage.contains("myPage"))
        System.out.print("이전페이지 : ");
        System.out.println(request.getHeader("REFERER"));
        return "redirect:" + prevPage + (itemNo!=null?"?itemNo="+itemNo:"");
    }
    public Map<String, String> updateFile(List<MultipartFile> imgFiles, String oriImg, String w_cancel, String F_PATH){
        List<String> origImg = new ArrayList<>(Arrays.asList(oriImg.split("\\|")));
        List<String> deleteImg = List.of(w_cancel.split("\\|"));
        StringBuilder file = new StringBuilder();
        boolean delFileChk = true;
        for(String ori:origImg){
            for(String del:deleteImg){
                if(ori.equals(del)){
                    delFileChk = false;
                    break;
                }
            }
            if (delFileChk) { file.append(ori).append("|"); }
        }
        StringBuilder fileOri = new StringBuilder(file.substring(0));

        for(MultipartFile mf : imgFiles) {
            if (mf.getOriginalFilename().equals("")){ break; }
            String originalFileName = mf.getOriginalFilename();
            String safeFileName = System.currentTimeMillis() + originalFileName;
            String safeFile = F_PATH + safeFileName;
            file.append(safeFileName).append("|");
            fileOri.append(originalFileName).append("|");
            try {
                mf.transferTo(new File(safeFile));
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        Map<String, String> imgResult = new HashMap<>();
        System.out.print("file : ");
        System.out.println(file);
        System.out.println(String.valueOf(file).isEmpty());
        System.out.print("fileOri : ");
        System.out.println(fileOri);
        imgResult.put("file", String.valueOf(file).isEmpty() ?null:String.valueOf(file));
        imgResult.put("fileOri", String.valueOf(fileOri).isEmpty() ?null:String.valueOf(fileOri));
        return imgResult;
    }
}
