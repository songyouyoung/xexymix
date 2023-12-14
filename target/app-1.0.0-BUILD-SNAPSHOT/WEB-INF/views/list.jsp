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
    <link rel="stylesheet" href="<c:url value='/css/list.css'/>">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css" />
</head>
<body>
<div id="wrap">
    <jsp:include page="header.jsp"/>
    <main>
        <section class="swiper main_banner">
            <div class="swiper-wrapper"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </section>
        <section class="m_nav w_main"></section>
        <section class="m_item_box w_main">
            <div class="m_i_header">
                <div>총 <span class="m_i_cnt"></span>개의 상품이 있습니다.</div>
                <div class="sort">상품정렬
                    <ul class="sort_list sort_list_none">
                        <li>신상품순</li>
                        <li>인기순</li>
                        <li>낮은가격순</li>
                        <li>높은가격순</li>
                    </ul>
                </div>
            </div>
            <div class="m_i_area"></div>
        </section>
    </main>
    <jsp:include page="footer.jsp"/>
</div>
<script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>
<script src="<c:url value='/js/item_db.js'/>"></script>
<script src="<c:url value='/js/list.js'/>"></script>
<script src="<c:url value='/js/common.js'/>"></script>
</body>
</html>