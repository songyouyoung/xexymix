<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" session = "false"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="<c:url value='/css/write.css'/>">
</head>
<body>
<form action="" method="" id="wrap" class="write">
    <header class="w_h">
        <img src="<c:url value='/img/main_banner/main_banner_230911_2.jpg'/>" alt="포터 라운드넥 골지니트 맨투맨">
        <div class="w_h_title">포터 라운드넥 골지니트 맨투맨</div>
        <div class="w_h_close">X</div>
    </header>
    <main class="w_m">
        <input type="hidden" name="itemNo" value="">
        <div class="w_m_title">제목</div>
        <div class="w_m_text">상품관련 문의드려요!</div>
        <div class="w_m_title">문의 작성란</div>
        <textarea name="qnaTxt" id="qnaTxt" required></textarea>
        <div class="w_m_title">사진 첨부</div>
        <div class="w_m_file_box">
            <input type="file" name="qnaFile" id="w_m_file_input" accept="image/*" multiple style="display: none;">
            <div class="w_m_file_upload">+</div>
        </div>
    </main>
    <footer class="w_f">
        <button type="submit">문의하기</button>
    </footer>
<script src="<c:url value='/js/write.js'/>"></script>
</form>
</body>
</html>