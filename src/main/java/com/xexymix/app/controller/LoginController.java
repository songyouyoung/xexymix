package com.xexymix.app.controller;

import com.xexymix.app.domain.UserDto;
import com.xexymix.app.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.Map;

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
    public String showLogin(HttpServletRequest request, Model model){
        model.addAttribute("prevPage", request.getHeader("REFERER"));
        return "login";
    }
// 실제 로그인
    @PostMapping("/login")
    public String login(UserDto userDto, Boolean login_rem, String prevPage, Model model, HttpSession session){
        if (userService.userLogin(userDto) < 1){
            model.addAttribute("welcom", "아이디 / 비밀번호를 다시 한 번 확인해주세요.");
            return "login";
        }
        session.setAttribute("userId", userDto.getUserId());
        if (login_rem != null && login_rem) { session.setAttribute("rememberId", userDto.getUserId()); }

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
    public String join(UserDto userDto, Model model) throws Exception{
        String error = "";
        try {
            // 아이디, 전화번호, 이메일 중복 체크
            Map<String, String> userChk = userService.userChk(userDto);
            if (!userChk.isEmpty()){
                error += userChk.get("id") == null? "" : userChk.get("id");
                error += (!error.equals("")? "<br>" : "") + (userChk.get("phone") == null? "" : userChk.get("phone"));
                error += (!error.endsWith("<br>")? "<br>" : "") + (userChk.get("email") == null? "" : userChk.get("email"));
                throw new Exception("회원가입 오류. 아이디/전화번호 중복.");
            }
            // 회원가입 실패 체크
            int joinChk = userService.joinUser(userDto);
            if (joinChk == 0) { throw new Exception("회원가입 오류."); }
            
            model.addAttribute("welcom", "회원가입 완료!<br>로그인 후 다양한 서비스를 이용해 보세요.");
            return "login";
        }catch (Exception e){
            e.printStackTrace();
            model.addAttribute("error", (error.equals("")?"회원가입 오류<br>관리자에게 문의해주세요.":error));
            return "join";
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