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
            <div class="my_cart_list">
                <div class="my_cart_item">
                    <div class="my_cart_chk">
                        <input type="checkbox" name="my_cart_chk" class="my_cart_chkBox">
                    </div>
                    <div class="my_cart_desc_box">
                        <img src="<c:url value='/img/main_banner/main_banner_230911_2.jpg'/>"> alt="스트레치 밴딩 부츠컷 슬랙스 1">
                        <div class="my_cart_desc">
                            <div class="my_cart_item_title">블랙라벨 시그니처 380N 레깅스 1+1</div>
                            <div class="my_cart_option">[ 옵션 : L ]</div>
                        </div>
                    </div>
                    <div class="my_cart_cnt" data-price="45000">
                        <button class="my_cart_prevCnt">-</button>
                        <input type="number" min="1" value="1" class="my_cart_cntNum">
                        <button class="my_cart_nextCnt">+</button>
                    </div>
                    <div class="my_cart_point">450</div>
                    <div class="my_cart_price">45,000</div>
                    <div class="my_cart_btn">
                        <div class="my_cart_btn_buy">바로주문하기</div>
                        <div class="my_cart_btn_cancle">X 삭제</div>
                    </div>
                </div>
                <div class="my_cart_item">
                    <div class="my_cart_chk">
                        <input type="checkbox" name="my_cart_chk" class="my_cart_chkBox">
                    </div>
                    <div class="my_cart_desc_box">
                        <img src="<c:url value='/img/main_banner/main_banner_230911_2.jpg'/>"> alt="스트레치 밴딩 부츠컷 슬랙스 1">
                        <div class="my_cart_desc">
                            <div class="my_cart_item_title">블랙라벨 시그니처 380N 레깅스 1+1</div>
                            <div class="my_cart_option">[ 옵션 : L ]</div>
                        </div>
                    </div>
                    <div class="my_cart_cnt" data-price="45000">
                        <button class="my_cart_prevCnt">-</button>
                        <input type="number" min="1" value="1" class="my_cart_cntNum">
                        <button class="my_cart_nextCnt">+</button>
                    </div>
                    <div class="my_cart_point">450</div>
                    <div class="my_cart_price">45,000</div>
                    <div class="my_cart_btn">
                        <div class="my_cart_btn_buy">바로주문하기</div>
                        <div class="my_cart_btn_cancle">X 삭제</div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <jsp:include page="footer.jsp"/>
    <script src="<c:url value='/js/cart.js'/>"></script>
</body>
</html>