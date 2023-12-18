package com.xexymix.app.domain;

import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

public class UserDto {
    private Integer userNo;
    private String userId;
    private String userPw;
    private String userName;
    private String userPhone;
    private String userEmail;
    private Integer userBirth;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date userRegDate;
    private Integer userPo;

    public Integer getUserNo() {
        return userNo;
    }

    public void setUserNo(Integer userNo) {
        this.userNo = userNo;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        System.out.println("userId : " + userId);
        this.userId = userId;
    }

    public String getUserPw() {
        return userPw;
    }

    public void setUserPw(String userPw) {
        System.out.println("userPw : " + userPw);
        this.userPw = userPw;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        System.out.println("userName : " + userName);
        this.userName = userName;
    }

    public String getUserPhone() {
        return userPhone;
    }

    public void setUserPhone(String userPhone) {
        System.out.println("String, userPhone : " + userPhone);
        this.userPhone = userPhone;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {

        System.out.println("userEmail : " + userEmail);
        this.userEmail = userEmail;
    }

    public Integer getUserBirth() {
        return userBirth;
    }

    public void setUserBirth(Integer userBirth) {
        System.out.println("userBirth : " + userBirth);
        this.userBirth = userBirth;
    }

    public Date getUserRegDate() {
        return userRegDate;
    }

    public void setUserRegDate(Date userRegDate) {
        this.userRegDate = userRegDate;
    }

    public Integer getUserPo() {
        return userPo;
    }

    public void setUserPo(Integer userPo) {
        this.userPo = userPo;
    }

    @Override
    public String toString() {
        return "UserDto{" +
                "userNo=" + userNo +
                ", userId='" + userId + '\'' +
                ", userPw='" + userPw + '\'' +
                ", userName='" + userName + '\'' +
                ", userPhone='" + userPhone + '\'' +
                ", userEmail='" + userEmail + '\'' +
                ", userBirth=" + userBirth +
                ", userRegDate=" + userRegDate +
                ", userPo=" + userPo +
                '}';
    }
}
