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
    <div class="logo"><a href="<c:url value='/'/>">xexymix</a></div>
    <form class="login_box" onsubmit="loginit()">
        <div class="join_hint" id="">일치하는 회원 정보가 없습니다. </div>
        <input type="text" name="userId" id="id" class="idpw" placeholder="아이디" autofocus required>
        <div class="pw_area">
            <input type="password" name="userPw" id="pw" class="idpw" placeholder="비밀번호" required>
            <div class="pw_img"></div>
        </div>
        <div class="login_rem_area">
            <input type="checkbox" name="login_rem" id="login_rem">
            <span>아이디저장</span>
        </div>
        <input type="submit" value="로그인" class="btn_sub">
    </form>
    <div class="login_btn_etc">
        <div class="login_find">
            <a class="login_id" href="find_id.jsp">아이디 찾기</a>
            <a class="login_pw" href="find_pw.jsp">비밀번호 찾기</a>
        </div>
        <a href="join.jsp" class="login_join">회원가입</a>
    </div>
</div>
<script src="<c:url value='/js/login_join.js'/>"></script>
</body>
</html>