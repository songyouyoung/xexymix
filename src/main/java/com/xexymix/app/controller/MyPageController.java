package com.xexymix.app.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.xexymix.app.domain.BuyDto;
import com.xexymix.app.domain.UserDto;
import com.xexymix.app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

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

    Integer userNo;
    @GetMapping("")
    public String showMyPage(HttpSession session, Model model) throws JsonProcessingException {
        userNo = (Integer) session.getAttribute("userNo");
        if (userNo == null || userNo < 1){ return "redirect:/"; }

        Map<String, Object> mypageDesc = userService.selectMyPage(userNo);
        ObjectMapper mapper = new ObjectMapper();
        String user_js = mapper.writeValueAsString(mypageDesc);

        System.out.println(mypageDesc.get("user"));
        model.addAttribute("user", mypageDesc.get("user"));
        model.addAttribute("buyCnt", mypageDesc.get("buyCnt"));
        model.addAttribute("cancelCnt", mypageDesc.get("cancelCnt"));
        model.addAttribute("user_js", user_js);
        System.out.println(mypageDesc);
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
            model.addAttribute("welcome", "성공");
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

        List<BuyDto> buyList = buyList("0", buyCode, startDate, endDate);
        System.out.println("buyCode = " + buyCode);
        System.out.println(buyList);

        ObjectMapper mapper = new ObjectMapper();
        String buy = mapper.writeValueAsString(buyList);

        model.addAttribute("buy", buy);
        return "my_buy";
    }
    @PostMapping("/buy")
    @ResponseBody
    public ResponseEntity<List<BuyDto>> showUserBuyPut(@RequestBody Map<String, Object> buyDesc){
//        Date startDate = new Date(String.valueOf(buyDesc.get("startDate")));
//        System.out.println("startDate : " + startDate);
        System.out.print("buyDesc : ");
        System.out.println(buyDesc);
        try {
            return new ResponseEntity<List<BuyDto>>((List<BuyDto>) null, HttpStatus.OK); // 200
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<List<BuyDto>> (HttpStatus.BAD_REQUEST); // 400
        }
    }

    public List<BuyDto> buyList(String limit, String buyCode, Date startDate, Date endDate) {
        Map<String, String> userDesc = new HashMap<>();
        userDesc.put("userNo", userNo+"");
        userDesc.put("limit", limit);
        userDesc.put("buyCode", buyCode);
        SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        userDesc.put("startDate", sdf1.format(startDate));
        userDesc.put("endDate", sdf1.format(endDate));
        System.out.println("startDate : " + sdf1.format(startDate));
        System.out.println("endDate : " + sdf1.format(endDate));

        return userService.selectUserBuyAll(userDesc);
    }
}