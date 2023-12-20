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
        <div class="myBuy my_title">
            <div class="my_buy_title_all">전체 주문 내역 조회</div>
            <div class="my_buy_title_done">주문완료 내역 조회</div>
            <div class="my_buy_title_cancel">주문취소 내역 조회</div>
        </div>
        <ul class="my_date">
            <li id="my_date_today">오늘</li>
            <li id="my_date_week">1주일</li>
            <li id="my_date_month_1">1개월</li>
            <li id="my_date_month_3">3개월</li>
            <li id="my_date_month_6">6개월</li>
            <li id="my_date_input">
                <input type="date" max="9999-12-31" id="my_date_prev">&nbsp;~&nbsp;<input type="date" max="9999-12-31" id="my_date_next">
            </li>
            <li id="my_date_submit">조회</li>
        </ul>
        <div class="my_buy_etc">
            - 주문번호를 클릭하시면 해당 주문에 대한 상세내역을 확인하실 수 있습니다.<br>
            - 개별상품에 대한 배송조회는 상세내역에서 확인하시기 바랍니다.
        </div>
        <div class="my_buy">
            <div class="my_buy_list_title">
                <div class="my_buy_title">주문일자/주문번호</div>
                <div class="my_buy_list_title_desc">
                    <div class="my_buy_desc">주문상품</div>
                    <div class="my_buy_cnt">수량</div>
                    <div class="my_buy_price">주문금액</div>
                    <div class="my_buy_btn">주문상태</div>
                </div>
            </div>
            <div class="my_buy_list">
                <div class="my_buy_title">
                    <div class="my_buy_date">2023.11.13</div>
                    <div class="my_buy_no">20231113-0000001</div>
                </div>
                <div class="my_buy_item_list">
                    <div class="my_buy_item">
                        <img src="<c:url value='/img/main_banner/main_banner_230911_2.jpg'/>" alt="블랙라벨 시그니처 380N 레깅스 1+1" class="my_buy_img">
                        <div class="my_buy_desc">
                            <div class="my_buy_itemName">블랙라벨 시그니처 380N 레깅스 1+1</div>
                            <div class="my_buy_itemOption">[옵션 : L]</div>
                        </div>
                        <div class="my_buy_cnt">1</div>
                        <div class="my_buy_price">33,000</div>
                        <div class="my_buy_btn">
                            <div class="my_buy_curr">주문완료</div>
                            <a class="my_buy_review">구매후기</a>
                            <a class="my_buy_cancel">주문취소</a>
                        </div>
                    </div>
                    <div class="my_buy_item">
                        <img src="<c:url value='/img/main_banner/main_banner_230911_2.jpg'/>" alt="블랙라벨 시그니처 380N 레깅스 1+1" class="my_buy_img">
                        <div class="my_buy_desc">
                            <div class="my_buy_itemName">블랙라벨 시그니처 380N 레깅스 1+1</div>
                            <div class="my_buy_itemOption">[옵션 : L]</div>
                        </div>
                        <div class="my_buy_cnt">1</div>
                        <div class="my_buy_price">33,000</div>
                        <div class="my_buy_btn">
                            <div class="my_buy_curr">주문취소</div>
                            <!-- <a class="my_buy_review">구매후기</a> -->
                            <!-- <a class="my_buy_cancel">주문취소</a> -->
                        </div>
                    </div>
                    <div class="my_buy_item">
                        <img src="<c:url value='/img/main_banner/main_banner_230911_2.jpg'/>" alt="블랙라벨 시그니처 380N 레깅스 1+1" class="my_buy_img">
                        <div class="my_buy_desc">
                            <div class="my_buy_itemName">블랙라벨 시그니처 380N 레깅스 1+1</div>
                            <div class="my_buy_itemOption">[옵션 : L]</div>
                        </div>
                        <div class="my_buy_cnt">1</div>
                        <div class="my_buy_price">33,000</div>
                        <div class="my_buy_btn">
                            <div class="my_buy_curr">주문완료</div>
                            <a class="my_buy_review">구매후기</a>
                            <a class="my_buy_cancel">주문취소</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="my_buy_list">
                <div class="my_buy_title">
                    <div class="my_buy_date">2023.11.13</div>
                    <div class="my_buy_no">20231113-0000001</div>
                </div>
                <div class="my_buy_item_list">
                    <div class="my_buy_item">
                        <img src="<c:url value='/img/main_banner/main_banner_230911_2.jpg'/>" alt="블랙라벨 시그니처 380N 레깅스 1+1" class="my_buy_img">
                        <div class="my_buy_desc">
                            <div class="my_buy_itemName">블랙라벨 시그니처 380N 레깅스 1+1</div>
                            <div class="my_buy_itemOption">[옵션 : L]</div>
                        </div>
                        <div class="my_buy_cnt">1</div>
                        <div class="my_buy_price">33,000</div>
                        <div class="my_buy_btn">
                            <div class="my_buy_curr">주문완료</div>
                            <a class="my_buy_review">구매후기</a>
                            <a class="my_buy_cancel">주문취소</a>
                        </div>
                    </div>
                    <div class="my_buy_item">
                        <img src="<c:url value='/img/main_banner/main_banner_230911_2.jpg'/>" alt="블랙라벨 시그니처 380N 레깅스 1+1" class="my_buy_img">
                        <div class="my_buy_desc">
                            <div class="my_buy_itemName">블랙라벨 시그니처 380N 레깅스 1+1</div>
                            <div class="my_buy_itemOption">[옵션 : L]</div>
                        </div>
                        <div class="my_buy_cnt">1</div>
                        <div class="my_buy_price">33,000</div>
                        <div class="my_buy_btn">
                            <div class="my_buy_curr">주문취소</div>
                            <!-- <a class="my_buy_review">구매후기</a> -->
                            <!-- <a class="my_buy_cancel">주문취소</a> -->
                        </div>
                    </div>
                    <div class="my_buy_item">
                        <img src="<c:url value='/img/main_banner/main_banner_230911_2.jpg'/>" alt="블랙라벨 시그니처 380N 레깅스 1+1" class="my_buy_img">
                        <div class="my_buy_desc">
                            <div class="my_buy_itemName">블랙라벨 시그니처 380N 레깅스 1+1</div>
                            <div class="my_buy_itemOption">[옵션 : L]</div>
                        </div>
                        <div class="my_buy_cnt">1</div>
                        <div class="my_buy_price">33,000</div>
                        <div class="my_buy_btn">
                            <div class="my_buy_curr">주문완료</div>
                            <a class="my_buy_review">구매후기</a>
                            <a class="my_buy_cancel">주문취소</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <jsp:include page="footer.jsp"/>
    <script src="<c:url value='/js/buy.js'/>"></script>
</body>
</html>