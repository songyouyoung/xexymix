<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" session = "false"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
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
    <main>
        <div class="w_main">
            <a class="my_more" href="<c:url value="/myPage/update"/>">회원정보수정</a>
            <div class="my_user"><b>${user.user.userName}</b>님<br>오늘도 젝시믹스와 함께 좋은 하루 되세요🖤</div>
            <div class="my_info">
                <div class="my_info_item">
                    <div class="my_info_title">적립금</div>
                    <a class="my_info_desc" href="my_point.jsp">
                        <fmt:formatNumber type="number" pattern="###,###,###,###,###,###" value="${user.user.point}" />원
                    </a>
                </div>
                <div class="my_info_item">
                    <div class="my_info_title">주문완료</div>
                    <a class="my_info_desc" href="<c:url value="/myPage/buy?buy=done"/>">
                        <fmt:formatNumber type="number" pattern="###,###,###,###,###,###" value="${user.buyCnt}" />
                    </a>
                </div>
                <div class="my_info_item">
                    <div class="my_info_title">주문취소</div>
                    <a class="my_info_desc" href="<c:url value="/myPage/buy?buy=cancel"/>">
                        <fmt:formatNumber type="number" pattern="###,###,###,###,###,###" value="${user.cancelCnt}" />
                    </a>
                </div>
            </div>
        </div>
        <div class="w_main mypage">
            <a class="my_more" href="<c:url value="/myPage/buy?buy=all"/>">더보기 &gt;</a>
            <div class="my_title">최근 주문 내역</div>
            <div class="my_buy_list">
                <c:choose>
                    <c:when test="${!empty user.buy}">
                        <div class="my_buy_title">
                            <div class="my_buy_date"><fmt:formatDate value="${user.buy[0].buyDate}" pattern="yyyy.MM.dd" /></div>
                            <div class="my_buy_no">${user.buy[0].buyNo}</div>
                        </div>
                        <div class="my_buy_item_list">
                            <c:forEach var="buy" items="${user.buy}">
                                <div class="my_buy_item">
                                    <img src="<c:url value='/img/item_list/${buy.itemImg}'/>" alt="${buy.itemName}" class="my_buy_img">
                                    <div class="my_buy_desc">
                                        <div class="my_buy_itemName">${buy.itemName}</div>
                                        <div class="my_buy_itemOption">[옵션 : ${buy.buyOpt}]</div>
                                    </div>
                                    <div class="my_buy_btn">
                                        <c:choose>
                                            <c:when test="${buy.buyCode == 'buy'}">
                                                <div class="my_buy_curr">주문완료</div>
                                                <a class="my_buy_review">구매후기</a>
                                                <a class="my_buy_cancel">주문취소</a>
                                            </c:when>
                                            <c:otherwise>
                                                <div class="my_buy_curr">주문취소</div>
                                            </c:otherwise>
                                        </c:choose>

                                    </div>
                                </div>
                            </c:forEach>
                        </div>
                    </c:when>
                    <c:otherwise>
                        <p class="m_none">아직 구매한 상품이 없습니다.</p>
                    </c:otherwise>
                </c:choose>
            </div>
        </div>
        <section class="w_main" id="m_review">
            <a class="my_more" href="my_review.jsp">더보기 &gt;</a>
            <div class="my_title">최근 리뷰 내역</div>
        </section>
        <div class="w_main" id="m_qna">
            <a class="my_more" href="my_qna.jsp">더보기 &gt;</a>
            <div class="my_title">최근 문의 내역</div>
        </div>
    </main>
    <jsp:include page="footer.jsp"/>
    <script>
        const C_PATH = (location.pathname).split("/")[1];

        let userNo = ${sessionId};
        let userJs = ${user_js};
        let qna = userJs.qna;
        let rev = userJs.rev;

        let welcome = "${param.welcome}";
        if (welcome == "성공"){
            Swal.fire({
                icon: "success",
                title: "회원정보 수정 완료!",
            }).then(()=>{ location.replace('/'+C_PATH+'/myPage'); });
        }
    </script>
    <script src="<c:url value='/js/item_qnaRev.js'/>"></script>
    <script src="<c:url value='/js/mypage.js'/>"></script>
</body>
</html>