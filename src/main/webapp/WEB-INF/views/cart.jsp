<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" session = "false"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0">
    <title>xexymix</title>
    <link rel="shortcut icon" href="https://www.xexymix.com/design/xexymix/image/common/xexymix.ico" type="image/x-icon">
    <link rel="stylesheet" href="<c:url value='/css/common.css'/>">
    <link rel="stylesheet" href="<c:url value='/css/cart.css'/>">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
</head>
<body>
<div id="wrap">
    <jsp:include page="header.jsp"/>
    <main class="w_main">
        <div class="my_title">장바구니</div>
        <div class="my_cart">
            <div class="my_cart_title">
                <div class="my_cart_chk">
                    <input type="checkbox" name="my_cart_chk_all" id="my_cart_chk_all" class="my_cart_chkBox">
                </div>
                <div class="my_cart_desc_box">상품정보</div>
                <div class="my_cart_cnt">수량</div>
                <div class="my_cart_point">적립금</div>
                <div class="my_cart_price">판매가</div>
                <div class="my_cart_btn">선택</div>
            </div>
            <div class="my_cart_list"></div>
            <div class="my_cart_btn_box">
                <div class="my_cart_btn_buy" id="buy_choice">선택 주문하기</div>
                <div class="my_cart_btn_buy" id="buy_all">전체 주문하기</div>
            </div>
        </div>
    </main>
    <jsp:include page="footer.jsp"/>
    <script>
        const C_PATH = (location.pathname).split("/")[1];
        let cart = ${cart};
    </script>
    <script src="<c:url value='/js/cart.js'/>"></script>
</body>
</html>