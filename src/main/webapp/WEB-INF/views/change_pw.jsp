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
    <script src="<c:url value='/js/login_join.js'/>"></script>
</head>
<body>
<div id="wrap" class="logjoin">
    <div class="logo"><a href="<c:url value='/'/>">xexymix</a></div>
    <div style="text-align: center">${error}</div>
    <form action="<c:url value="/login/change_pw"/>" method="POST" name="changePw" onsubmit="return joinit(false);" class="join_box">
        <div class="pw_area">
            <div class="join_hint" id="pw_chk">비밀번호: 8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.</div>
            <div class="join_hint" id="pw_equal">비밀번호가 일치하지 않습니다. </div>
            <input type="password" name="userPw" id="pw" class="idpw" placeholder="비밀번호" required>
            <div class="pw_img"></div>
        </div>
        <div class="pw_area">
            <input type="password" id="pw_re" class="idpw" placeholder="비밀번호 확인" required>
            <div class="pw_img"></div>
        </div>
        <input type="submit" value="비밀번호 변경하기" class="btn_sub">
    </form>
</div>
</body>
</html>