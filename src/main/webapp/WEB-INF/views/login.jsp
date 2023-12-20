<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" session = "false"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:set var="rememberId" value="${ pageContext.request.getSession(false).getAttribute('rememberId')!=null? pageContext.request.getSession(false).getAttribute('rememberId'):''}" />
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
    <div style="text-align: center">${welcom}</div>
    <form action="<c:url value="/login/login"/>" method="POST" class="login_box">
        <input type="hidden" name="prevPage" value="${prevPage}">
        <input type="text" name="userId" id="id" class="idpw" placeholder="아이디" value="${empty param.idTmp?cookie.rememberId.value : param.idTmp}" autofocus required>
        <div class="pw_area">
            <input type="password" name="userPw" id="pw" class="idpw" placeholder="비밀번호" required>
            <div class="pw_img"></div>
        </div>
        <div class="login_rem_area">
            <input type="checkbox" name="login_rem" id="login_rem" autocomplete='off' ${empty param.idTmp?(empty cookie.rememberId.value?"":"checked class='login_rem_chk'"):""}>
            <span>아이디저장</span>
        </div>
        <input type="submit" value="로그인" class="btn_sub">
    </form>
    <div class="login_btn_etc">
        <div class="login_find">
            <a class="login_id" href="<c:url value="/login/find_id"/>">아이디 찾기</a>
            <a class="login_pw" href="<c:url value="/login/find_pw"/>">비밀번호 찾기</a>
        </div>
        <a href="<c:url value="/login/join"/>" class="login_join">회원가입</a>
    </div>
</div>
<script src="<c:url value='/js/login_join.js'/>"></script>
</body>
</html>