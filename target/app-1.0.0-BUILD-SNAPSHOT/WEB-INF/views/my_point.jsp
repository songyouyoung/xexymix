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
    <link rel="stylesheet" href="<c:url value='/css/mypage.css'/>">
</head>
<body>
<div id="wrap">
    <jsp:include page="header.jsp"/>
    <main class="w_main">
        <div class="my_title">적립금 내역 조회</div>
        <table class="m_qna_area my_point">
            <tr>
                <th>번호</th>
                <th>주문날짜</th>
                <th>적립금</th>
                <th>주문번호</th>
                <th>적립내용</th>
            </tr>
            <tr>
                <td>1</td>
                <td>2023.11.13</td>
                <td>500</td>
                <td>20231207-0000001</td>
                <td>구매에 대한 적립금</td>
            </tr>
        </table>
    </main>
    <jsp:include page="footer.jsp"/>
</body>
</html>