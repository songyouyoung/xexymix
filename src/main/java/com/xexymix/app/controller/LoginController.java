package com.xexymix.app.controller;

import com.xexymix.app.domain.UserDto;
import com.xexymix.app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpSession;

@Controller
@RequestMapping("/login")
public class LoginController {
    @Autowired
    UserService userService;

//////////////////////
// 로그인
//////////////////////
//폼 보여주기
    @GetMapping("/login")
    public String showLogin(){
        return "login";
    }
// 실제 로그인
    @PostMapping("/login")
    public String login(UserDto userDto, String prevPage){
//        int

        return "redirect:"+prevPage;
    }

//////////////////////
// 로그아웃
//////////////////////
    @GetMapping("/logout")
    public String showLogout(HttpSession session){
        session.invalidate();
        return "redirect:/";
    }

//////////////////////
// 회원가입
//////////////////////
// 회원가입 폼 보여주기
    @GetMapping("/join")
    public String join(){
        return "join";
    }
// 실제 회원가입
    @PostMapping("/join")
    public String join(UserDto userDto, Model model){
//    public String join(Model model){
        System.out.println("userDto : " + userDto);
        int joinChk = userService.joinUser(userDto);
        if (joinChk == 0){
            model.addAttribute("error", "회원가입 오류<br>관리자에게 문의해주세요.");
            return "redirect:/login/join";
        }else {
            return "redirect:/login/join";
        }
    }

//////////////////////
// 아이디/비밀번호 찾기
//////////////////////
// 아이디 찾기 폼 보여주기
    @GetMapping("/find_id")
    public String findId(){
        return "find_id";
    }
// 비밀번호 찾기 폼 보여주기
    @GetMapping("/find_pw")
    public String findPw(){
        return "find_pw";
    }
}
