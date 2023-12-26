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
            <c:set var="userName" value="${user.userName}"/>
            <div class="my_user"><b>${userName}</b>님<br>오늘도 젝시믹스와 함께 좋은 하루 되세요🖤</div>
            <div class="my_info">
                <div class="my_info_item">
                    <div class="my_info_title">적립금</div>
                    <a class="my_info_desc" href="my_point.jsp">
                        <fmt:formatNumber type="number" pattern="###,###,###,###,###,###" value="${user.point}" />원
                    </a>
                </div>
                <div class="my_info_item">
                    <div class="my_info_title">주문완료</div>
                    <a class="my_info_desc" href="<c:url value="/myPage/buy?buyCode=buy"/>">
                        <fmt:formatNumber type="number" pattern="###,###,###,###,###,###" value="${buyCnt}" />
                    </a>
                </div>
                <div class="my_info_item">
                    <div class="my_info_title">주문취소</div>
                    <a class="my_info_desc" href="<c:url value="/myPage/buy?buyCode=cancel"/>">
                        <fmt:formatNumber type="number" pattern="###,###,###,###,###,###" value="${cancelCnt}" />
                    </a>
                </div>
            </div>
        </div>
        <div class="w_main mypage" id="m_buy">
            <a class="my_more" href="<c:url value="/myPage/buy?buyCode=all"/>">더보기 &gt;</a>
            <div class="my_title">최근 주문 내역</div>
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
        let userName = "${userName}";
        let userJs = ${user_js};
        let qna = userJs.qna;
        let rev = userJs.rev;
        let buy = userJs.buy;

        let welcome = "${param.welcome}";
        if (welcome != ""){
            Swal.fire({
                icon: welcome == "리뷰 작성 실패.<br>관리자에게 문의해주세요."? "warning": "success",
                title: welcome,
            }).then(()=>{ location.replace('/'+C_PATH+'/myPage'); });
        }
    </script>
    <script src="<c:url value='/js/item_qnaRev.js'/>"></script>
    <script src="<c:url value='/js/mypage.js'/>"></script>
</body>
</html>