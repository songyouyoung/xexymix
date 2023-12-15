<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" session = "false"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>xexymix</title>
    <link rel="shortcut icon" href="https://www.xexymix.com/design/xexymix/image/common/xexymix.ico" type="image/x-icon">
    <link rel="stylesheet" href="<c:url value='/css/common.css'/>">
    <link rel="stylesheet" href="<c:url value='/css/h_f.css'/>">
    <link rel="stylesheet" href="<c:url value='/css/login_join.css'/>">
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
</head>
<body>
<div id="wrap" class="logjoin">
    <div class="find logo"><a href="<c:url value='/'/>">xexymix</a></div>
    <form class="find_box" onsubmit="findit()">
        <div class="find_title">비밀번호 찾기</div>
        <input type="text" name="userId" id="id" class="idpw" placeholder="아이디" autofocus required>
        <input type="text" name="userName" id="name" class="idpw" placeholder="이름" required>
        <div class="phone_area">
            <span>010</span>
            <input type="number" name="userPhone" id="phone" class="idpw" placeholder="전화번호" required onkeyup="checkPw()">
        </div>
        <input type="date" name="userBirth" id="birth" class="idpw" placeholder="생년월일" required max="9999-12-31">
        <input type="submit" value="비밀번호 찾기" class="btn_sub">
    </form>
    <div class="login_btn_etc">
        <div class="login_find">
            <a class="login_id" href="login.jsp">로그인</a>
            <a class="login_pw" href="find_id.jsp">아이디 찾기</a>
        </div>
        <a href="join.jsp" class="login_join">회원가입</a>
    </div>
</div>
<script src="<c:url value='/js/login_join.js'/>"></script>
</body>
</html>