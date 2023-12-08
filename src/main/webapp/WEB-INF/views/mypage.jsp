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
    <main>
        <div class="w_main">
            <div class="my_more">회원정보수정</div>
            <div class="my_user"><b>ㅇㅇㅇ</b>님<br>오늘도 젝시믹스와 함께 좋은 하루 되세요🖤</div>
            <div class="my_info">
                <div class="my_info_item">
                    <div class="my_info_title">적립금</div>
                    <a class="my_info_desc" href="my_point.jsp">3,000원</a>
                </div>
                <div class="my_info_item">
                    <div class="my_info_title">주문완료</div>
                    <a class="my_info_desc" href="my_buy.jsp?buy=done">0</a>
                </div>
                <div class="my_info_item">
                    <div class="my_info_title">주문취소</div>
                    <a class="my_info_desc" href="my_buy.jsp?buy=cancel">0</a>
                </div>
            </div>
        </div>
        <div class="w_main mypage">
            <a class="my_more" href="my_buy.jsp?buy=all">더보기 &gt;</a>
            <div class="my_title">최근 주문 내역</div>
            <div class="my_buy_list">
                <div class="my_buy_title">
                    <div class="my_buy_date">2023.11.13</div>
                    <div class="my_buy_no">20231113-0000001</div>
                </div>
                <div class="my_buy_item_list">
                    <div class="my_buy_item">
                        <img src="<c:url value='/img/main_banner/main_banner_230911_2.jpg'/>"> alt="블랙라벨 시그니처 380N 레깅스 1+1" class="my_buy_img">
                        <div class="my_buy_desc">
                            <div class="my_buy_itemName">블랙라벨 시그니처 380N 레깅스 1+1</div>
                            <div class="my_buy_itemOption">[옵션 : L]</div>
                        </div>
                        <div class="my_buy_btn">
                            <div class="my_buy_curr">주문완료</div>
                            <a class="my_buy_review">구매후기</a>
                            <a class="my_buy_cancel">주문취소</a>
                        </div>
                    </div>
                    <div class="my_buy_item">
                        <img src="<c:url value='/img/main_banner/main_banner_230911_2.jpg'/>"> alt="블랙라벨 시그니처 380N 레깅스 1+1" class="my_buy_img">
                        <div class="my_buy_desc">
                            <div class="my_buy_itemName">블랙라벨 시그니처 380N 레깅스 1+1</div>
                            <div class="my_buy_itemOption">[옵션 : L]</div>
                        </div>
                        <div class="my_buy_btn">
                            <div class="my_buy_curr">주문취소</div>
                            <!-- <a class="my_buy_review">구매후기</a> -->
                        </div>
                    </div>
                    <div class="my_buy_item">
                        <img src="<c:url value='/img/main_banner/main_banner_230911_2.jpg'/>"> alt="블랙라벨 시그니처 380N 레깅스 1+1" class="my_buy_img">
                        <div class="my_buy_desc">
                            <div class="my_buy_itemName">블랙라벨 시그니처 380N 레깅스 1+1</div>
                            <div class="my_buy_itemOption">[옵션 : L]</div>
                        </div>
                        <div class="my_buy_btn">
                            <div class="my_buy_curr">주문완료</div>
                            <a class="my_buy_review">구매후기</a>
                            <a class="my_buy_cancel">주문취소</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w_main">
            <a class="my_more" href="my_qna.jsp">더보기 &gt;</a>
            <div class="my_title">최근 문의 내역</div>
            <table class="m_qna_area">
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성일</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>상품관련 문의 드립니다</td>
                    <td>2023.11.13</td>
                </tr>
            </table>
        </div>
    </main>
    <jsp:include page="footer.jsp"/>
</body>
</html>