package com.xexymix.app.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.xexymix.app.domain.BuyDto;
import com.xexymix.app.domain.QnaDto;
import com.xexymix.app.domain.ReviewDto;
import com.xexymix.app.domain.UserDto;
import com.xexymix.app.service.BuyService;
import com.xexymix.app.service.ReviewService;
import com.xexymix.app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpSession;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/myPage")
public class MyPageController {
    @Autowired
    UserService userService;
    @Autowired
    ReviewService reviewService;
    @Autowired
    BuyService buyService;

    Integer userNo;
    @GetMapping("")
    public String showMyPage(HttpSession session, Model model) throws JsonProcessingException {
        userNo = (Integer) session.getAttribute("userNo");
        if (userNo == null || userNo < 1){ return "redirect:/"; }

        Map<String, Object> mypageDesc = userService.selectMyPage(userNo);
        ObjectMapper mapper = new ObjectMapper();
        String user_js = mapper.writeValueAsString(mypageDesc);

        model.addAttribute("user", mypageDesc.get("user"));
        model.addAttribute("buyCnt", mypageDesc.get("buyCnt"));
        model.addAttribute("cancelCnt", mypageDesc.get("cancelCnt"));
        model.addAttribute("user_js", user_js);
        return "mypage";
    }

    @GetMapping("/update")
    public String showMyPageUpdate(Model model) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        String user = mapper.writeValueAsString(userService.selectUser(userNo));
        model.addAttribute("user", user);
        return "join";
    }
    @PostMapping("/update")
    public String updateMyPage(UserDto userDto, Model model){
        Integer updateChk = userService.updateUser(userDto);
        if (updateChk == null || updateChk < 1){
            model.addAttribute("error", "회원 정보 수정 오류.<br>관리자에게 문의해주세요.");
            return "redirect:/myPage/update";
        }else{
            model.addAttribute("welcome", "회원정보 수정 완료!");
            return "redirect:/myPage?";
        }
    }

    @GetMapping("/buy")
    public String showUserBuy(Model model, String buyCode) throws JsonProcessingException {
        Date endDate = new Date();
        Date startDate = new Date();
        startDate.setMonth(startDate.getMonth()-3);
        startDate.setHours(0);
        startDate.setMinutes(0);
        startDate.setSeconds(0);
        SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

        List<BuyDto> buyList = buyList("0", buyCode, sdf1.format(startDate), sdf1.format(endDate));

        ObjectMapper mapper = new ObjectMapper();
        String buy = mapper.writeValueAsString(buyList);

        model.addAttribute("buy", buy);
        Map<String, String> userBuy = new HashMap<>();
        userBuy.put("userNo", userNo+"");
        userBuy.put("buyCode", buyCode);
        userBuy.put("startDate", sdf1.format(startDate));
        userBuy.put("endDate", sdf1.format(endDate));
        model.addAttribute("buyMaxCnt", userService.selectUserBuyCnt(userBuy));
        return "my_buy";
    }
    @PostMapping("/buy")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> showUserBuyPut(@RequestBody Map<String, String> buyDesc){
        try {
            Map<String, Object> buyResult = new HashMap<>();
            List<BuyDto> buyDtos = buyList(buyDesc.get("limit"), buyDesc.get("buyCode"), buyDesc.get("startDate")+" 00:00:00", buyDesc.get("endDate")+" 23:59:59");
            buyResult.put("buy", buyDtos);

            Map<String, String> userBuy = new HashMap<>();
            userBuy.put("userNo", userNo+"");
            userBuy.put("buyCode", buyDesc.get("buyCode"));
            userBuy.put("startDate", buyDesc.get("startDate")+" 00:00:00");
            userBuy.put("endDate", buyDesc.get("endDate")+" 23:59:59");
            buyResult.put("buyMaxCnt", userService.selectUserBuyCnt(userBuy));

            return new ResponseEntity<Map<String, Object>>(buyResult, HttpStatus.OK); // 200
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<Map<String, Object>> (HttpStatus.BAD_REQUEST); // 400
        }
    }

    public List<BuyDto> buyList(String limit, String buyCode, String startDate, String endDate) {
        Map<String, String> userDesc = new HashMap<>();
        userDesc.put("userNo", userNo+"");
        userDesc.put("limit", limit);
        userDesc.put("buyCode", buyCode);
        userDesc.put("startDate", startDate);
        userDesc.put("endDate", endDate);

        return userService.selectUserBuyAll(userDesc);
    }

    @PostMapping("/buy/cancel")
    @ResponseBody
    public ResponseEntity<String> deleteBuy(@RequestBody BuyDto buyDesc){
        try{
            buyDesc.setUserNo(userNo);
            System.out.println("buyDesc : " + buyDesc);
            String result = buyService.deleteBuy(buyDesc);
            System.out.println("result : " + result);
            if (!result.isEmpty()){ throw new Exception("구매 취소 오류");}
            return new ResponseEntity<>(HttpStatus.OK);
        }catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/buyRev")
    @ResponseBody
    public ResponseEntity<ReviewDto> selectBuyRev(@RequestBody int buyAuto){
        try {
            ReviewDto review = reviewService.selectBuyRev(buyAuto);
            if (review == null){ throw new Exception("구매한 상품의 리뷰 찾기 오류. "); }
            return new ResponseEntity<ReviewDto>(review, HttpStatus.OK); // 200
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<ReviewDto> (HttpStatus.BAD_REQUEST); // 400
        }
    }

    @PostMapping("/rev/insert")
    public String insertRev(@RequestParam(value="wFile", required = false) List<MultipartFile> imgFiles, ReviewDto revDesc, Model model){
//        String F_PATH = "C:/Users/user/Desktop/portfolio/github/xexymix/src/main/webapp/resources/img/review/"; //집
        String F_PATH = "C:/Users/user1/Documents/GitHub/xexymix/src/main/webapp/resources/img/review/"; //학원

        ItemController itemController = new ItemController();
        Map<String, String> files = itemController.updateFile(imgFiles, "", "", F_PATH);
        revDesc.setRevFile(files.get("file"));
        revDesc.setRevFileOri(files.get("fileOri"));

        revDesc.setUserNo(userNo);

        String revResult = reviewService.insertRev(revDesc);
        revResult = revResult.isEmpty()? "리뷰 작성 완료!": "리뷰 작성 실패.<br>관리자에게 문의해주세요.";
        model.addAttribute("welcome", revResult);

        return "redirect:/myPage";
    }

    @PostMapping(value = "/rev/delete", produces = "application/text; charset=utf8")
    @ResponseBody
    public ResponseEntity<String> deleteRev(@RequestBody ReviewDto revDesc){
        try {
            revDesc.setUserNo(userNo);
            String revResult = reviewService.deleteRev(revDesc);
            if (!revResult.isEmpty()){ throw new Exception("리뷰 삭제 오류"); }
            return new ResponseEntity<>("리뷰 삭제 완료!", HttpStatus.OK); // 200
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(  "리뷰 삭제 실패.<br>관리자에게 문의해주세요.", HttpStatus.BAD_REQUEST); // 400
        }
    }

    @GetMapping("/review")
    public String showReview(Model model) throws JsonProcessingException {
        Map<String, Integer> userDesc = new HashMap<>();
        userDesc.put("userNo", userNo);
        userDesc.put("limit", 0);
        userDesc.put("limitMax", 5);
        List<ReviewDto> reviews = userService.selectUserRev(userDesc);
        Integer revMaxCnt = userService.selectUserRevCnt(userNo);
        System.out.println(reviews);

        ObjectMapper mapper = new ObjectMapper();
        String rev = mapper.writeValueAsString(reviews);

        model.addAttribute("rev", rev);
        model.addAttribute("revMaxCnt", revMaxCnt);
        return "my_review";
    }

    @PostMapping("/review")
    @ResponseBody
    public ResponseEntity<List<ReviewDto>> showReviews(@RequestBody int limit){
        try{
            Map<String, Integer> userDesc = new HashMap<>();
            userDesc.put("userNo", userNo);
            userDesc.put("limit", limit);
            userDesc.put("limitMax", 5);
            List<ReviewDto> revResult = userService.selectUserRev(userDesc);

            System.out.println("revResult : " + revResult);

            if (revResult.isEmpty()){ throw new Exception("리뷰 조회 오류"); }
            return new ResponseEntity<>(revResult, HttpStatus.OK);
        }catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/qna")
    public String showQna(Model model) throws JsonProcessingException {
        Map<String, Integer> userDesc = new HashMap<>();
        userDesc.put("userNo", userNo);
        userDesc.put("limit", 0);
        userDesc.put("limitMax", 20);
        List<QnaDto> qnas = userService.selectUserQna(userDesc);
        Integer qnaMaxCnt = userService.selectUserQnaCnt(userNo);
        System.out.println(qnas);
        System.out.println("qnaMaxCnt : " + qnaMaxCnt);

        ObjectMapper mapper = new ObjectMapper();
        String qna = mapper.writeValueAsString(qnas);

        model.addAttribute("qna", qna);
        model.addAttribute("qnaMaxCnt", qnaMaxCnt);
        return "my_qna";
    }

    @PostMapping("/qna")
    @ResponseBody
    public ResponseEntity<List<QnaDto>> showQnas(@RequestBody int limit){
        try{
            Map<String, Integer> userDesc = new HashMap<>();
            userDesc.put("userNo", userNo);
            userDesc.put("limit", limit);
            userDesc.put("limitMax", 20);
            List<QnaDto> qnaResult = userService.selectUserQna(userDesc);

            System.out.println("qnaResult : " + qnaResult);

            if (qnaResult.isEmpty()){ throw new Exception("문의 조회 오류"); }
            return new ResponseEntity<>(qnaResult, HttpStatus.OK);
        }catch (Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}