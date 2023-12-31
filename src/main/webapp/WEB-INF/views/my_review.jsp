<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" session = "false"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:set var="sessionId" value="${ pageContext.request.getSession(false).getAttribute('userNo')!=null? pageContext.request.getSession(false).getAttribute('userNo'):null}" />
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>xexymix</title>
    <link rel="shortcut icon" href="https://www.xexymix.com/design/xexymix/image/common/xexymix.ico" type="image/x-icon">
    <link rel="stylesheet" href="<c:url value='/css/common.css'/>">
    <link rel="stylesheet" href="<c:url value='/css/mypage.css'/>">
    <link rel="stylesheet" href="<c:url value='/css/item.css'/>">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
</head>
<body>
<div id="wrap">
    <jsp:include page="header.jsp"/>
    <main class="w_main">
        <div class="my_title">리뷰 내역 조회</div>
        <div class="my_rev_area"></div>
        <div class="pagination"></div>
    </main>
    <jsp:include page="footer.jsp"/>
<script>
    let userNo = ${sessionId};
    const C_PATH = (location.pathname).split("/")[1];
    let rev = ${rev};
    let revMaxCnt = ${revMaxCnt};
</script>
<script src="<c:url value='/js/item_qnaRev.js'/>"></script>
<script src="<c:url value='/js/pagination.js'/>"></script>
<script src="<c:url value='/js/myReview.js'/>"></script>
</body>
</html>