<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" session = "false"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="<c:url value='/css/write.css'/>">
</head>
<body>
<div id="revWrap" class="qnarevWrap">
    <form action="" method="POST" enctype="multipart/form-data" id="revForm" class="write">
        <header class="w_h">
            <img src="<c:url value='/img/main_banner/main_banner_230911_2.jpg'/>" alt="포터 라운드넥 골지니트 맨투맨">
            <div class="w_h_title">포터 라운드넥 골지니트 맨투맨</div>
            <div class="w_h_close">X</div>
        </header>
        <main class="w_m">
            <input type="hidden" name="revNo" id="revNo" value="">
            <div class="w_m_title">만족도</div>
            <select name="revScore" id="revScore">
                <option value="5">★★★★★</option>
                <option value="4">★★★★☆</option>
                <option value="3">★★★☆☆</option>
                <option value="2">★★☆☆☆</option>
                <option value="1">★☆☆☆☆</option>
            </select>
            <div class="w_m_title">리뷰 작성란</div>
            <textarea name="revTxt" id="revTxt" required></textarea>
            <div class="w_m_title">사진 첨부</div>
            <div class="w_m_file_box">
                <input type="file" name="rFile" id="w_m_file_input" accept="image/*" multiple style="display: none;">
                <input type="file" name="wFile" id="w_input" accept="image/*" multiple style="display: none;">
                <input type="hidden" name="w_cancel" id="w_cancel">
                <div class="w_m_file_upload">+</div>
            </div>
        </main>
        <footer class="w_f">
            <button type="submit" class="revSubmit">리뷰<br>작성하기</button>
            <button type="button" class="revRemove">삭제하기</button>
            <button type="button" class="btnCancel">닫기</button>
        </footer>
    </form>
</div>
<script src="<c:url value='/js/write.js'/>"></script>
</body>
</html>