<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" session = "false"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="<c:url value='/css/write.css'/>">
</head>
<body>
<div id="qnaWrap" class="qnarevWrap">
    <form action="" method="POST" enctype="multipart/form-data" id="qnaForm" class="write">
        <header class="w_h">
            <img src="" alt="">
            <input type="text" class="w_h_title" name="itemName" readonly value="">
            <div class="w_h_close">X</div>
        </header>
        <main class="w_m">
            <input type="hidden" name="qnaNo" id="qnaNo" value="">
            <div class="w_m_title">제목</div>
            <div class="w_m_text">상품관련 문의드려요!</div>
            <div class="w_m_title">문의 작성란</div>
            <textarea name="qnaTxt" id="qnaTxt" required></textarea>
            <div class="w_m_title">사진 첨부</div>
            <div class="w_m_file_box">
                <input type="file" name="qFile" id="w_m_file_input" accept="image/*" multiple style="display: none;">
                <input type="file" name="wFile" id="w_input" accept="image/*" multiple style="display: none;">
                <input type="hidden" name="w_cancel" id="w_cancel">
                <div class="w_m_file_upload">+</div>
            </div>
        </main>
        <footer class="w_f">
            <button type="submit" class="qnaSubmit">문의하기</button>
            <button type="button" class="qnaRemove">삭제하기</button>
            <button type="button" class="btnCancel">닫기</button>
        </footer>
    </form>
</div>
    <script src="<c:url value='/js/write.js'/>"></script>
</body>
</html>