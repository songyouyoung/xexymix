<%@ page import="java.util.Date" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" session = "false"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0">
    <title>xexymix</title>
    <link rel="shortcut icon" href="https://www.xexymix.com/design/xexymix/image/common/xexymix.ico" type="image/x-icon">
    <link rel="stylesheet" href="<c:url value='/css/common.css'/>">
    <link rel="stylesheet" href="<c:url value='/css/index.css'/>">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css" />
</head>
<body>
<div id="wrap">
    <jsp:include page="header.jsp"/>
    <main>
        <section class="swiper main_banner">
            <div class="swiper-wrapper">
                <c:forEach var="banner" items="${mainBanner}">
                    <a class="swiper-slide" href="<c:url value='/item.jsp?itemNo=${banner.itemNo}'/>">
                        <img src="<c:url value='/img/main_banner/${banner.itemImg}'/>" alt="${banner.itemName}">
                        <div class="item_desc_none"></div>
                        <div class="m_b_item_desc">
                            <h4 class="desc_txt">${banner.itemCate}</h4>
                            <h1 class="desc_txt">${banner.itemDesc}</h1>
                            <h4 class="desc_txt">${banner.itemName}</h4>
                        </div>
                    </a>
                </c:forEach>
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </section>
        <section class="w_main">
            <div class="swiper best_item">
                <h1 class="sec_title">이유있는 베스트 아이템</h1>
                <ul class="swiper-wrapper best_item_box">
                    <c:forEach var="best" items="${best}">
                        <li class="swiper-slide">
                            <a href="<c:url value='/item.jsp?itemNo=${best.itemNo}'/>">
                                <div class="imgbox">
                                    <img src="<c:url value='/img/item_list/hover/${best.itemImgSub}'/>" alt="${best.itemName}" class="img_hover">
                                    <img src="<c:url value='/img/item_list/${best.itemImg}'/>" alt="${best.itemName}" class="img_orig">
                                </div>
                                <div class="item_desc">
                                    <div class="item_code_box">
                                        <span class="item_code">${best.itemNo}</span>
                                        <span class="item_review">리뷰 <b>
                                            <fmt:formatNumber type="number" pattern="###,###,###,###,###,###" value="${best.revCnt}" />
                                        </b></span>
                                    </div>
                                    <div class="item_title">${best.itemName}</div>
                                    <c:choose>
                                        <c:when test="${best.itemDis > 0}">
                                            <div class="item_price">
                                                    <fmt:formatNumber type="number" pattern="###,###,###,###,###,###" value="${best.itemPrice / 100 * (100 - best.itemDis) }" />
                                                <span class="item_orig_price">
                                                    <fmt:formatNumber type="number" pattern="###,###,###,###,###,###" value="${best.itemPrice}" />
                                            </span></div>
                                        </c:when>
                                        <c:otherwise>
                                            <div class="item_price"><fmt:formatNumber type="number" pattern="###,###,###,###,###,###" value="${best.itemPrice}" /></div>
                                        </c:otherwise>
                                    </c:choose>
                                    <div class="item_info_box"> <%-- 아래 script에서 추가함--%> </div>
                                    <div class="item_txt">${best.itemDesc}</div>
                                </div>
                            </a>


                        </li>
                    </c:forEach>
                </ul>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>
        </section>
        <section class="w_main">
            <div class="swiper main_short_banner">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="<c:url value='/img/main_short_banner/sub_banner_230518.jpg'/>" alt="바이커 쇼츠 컬렉션"></div>
                    <div class="swiper-slide"><img src="<c:url value='/img/main_short_banner/sub_banner_230623.jpg'/>" alt="플레이테니스 컬렉션"></div>
                    <div class="swiper-slide"><img src="<c:url value='/img/main_short_banner/sub_banner_230731.jpg'/>" alt="조거팬츠 컬렉션"></div>
                    <div class="swiper-slide"><img src="<c:url value='/img/main_short_banner/sub_banner_230825.jpg'/>" alt="바람막이 컬렉션"></div>
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>
        </section>
        <section class="w_main">
            <h1 class="sec_title">젝시믹스 엠디가 자신있게 추천합니다.</h1>
            <div class="swiper md_pick">
                <div class="swiper-wrapper"></div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>
        </section>
        <section class="m_item_box w_main">
            <a href="list.jsp?cate_no=1" class="fixed_img_box">
                <video src="<c:url value='/img/m_item_fixed/xt2219g_mv.mp4'/>" class="fixed_video" autoplay muted loop playsinline></video>
                <img src="<c:url value='/img/m_item_fixed/title_img_mens.jpg'/>" alt="맨즈" class="fixed_img">
                <div class="fixed_desc">
                    <h1 class="fixed_title">맨즈</h1>
                    <span class="btn_fixed_more">더보기</span>
                </div>
            </a>
        </section>
        <section class="swiper m_bot_banner">
            <div class="swiper-wrapper">
                <div class="swiper-slide m_b_b_box" href="#">
                    <h1 class="m_b_b_logo"><img src="<c:url value='/img/m_bot_banner/kookmin_logo.png'/>" alt="국민상점"></h1>
                    <p>더 건강한 라이프스타일 플랫폼</p>
                    <img src="<c:url value='/img/m_bot_banner/img_store_kookmin.png'/>" alt="더 건강한 라이프스타일 플랫폼" class="m_b_b_img">
                </div>
                <div class="swiper-slide m_b_b_box" href="#">
                    <h1 class="m_b_b_logo"><img src="<c:url value='/img/m_bot_banner/img_store_whia.png'/>" alt="휘아"></h1>
                    <p>깨끗한 청결습관의 시작, 휘아와 함께하세요</p>
                    <img src="<c:url value='/img/m_bot_banner/img_store_list02.png'/>" alt="깨끗한 청결습관의 시작, 휘아와 함께하세요" class="m_b_b_img">
                </div>
                <div class="swiper-slide m_b_b_box" href="#">
                    <h1 class="m_b_b_logo">OFF-LINE</h1>
                    <p>젝시믹스의 전국 오프라인 매장을 확인해보세요</p>
                    <img src="<c:url value='/img/m_bot_banner/img_store_list03.png'/>" alt="젝시믹스의 전국 오프라인 매장을 확인해보세요" class="m_b_b_img">
                </div>
                <div class="swiper-slide m_b_b_box" href="#">
                    <h1 class="m_b_b_logo"><img src="<c:url value='/img/m_bot_banner/kookmin_logo.png'/>" alt="국민상점"></h1>
                    <p>더 건강한 라이프스타일 플랫폼</p>
                    <img src="<c:url value='/img/m_bot_banner/img_store_kookmin.png'/>" alt="더 건강한 라이프스타일 플랫폼" class="m_b_b_img">
                </div>
                <div class="swiper-slide m_b_b_box" href="#">
                    <h1 class="m_b_b_logo"><img src="<c:url value='/img/m_bot_banner/img_store_whia.png'/>" alt="휘아"></h1>
                    <p>깨끗한 청결습관의 시작, 휘아와 함께하세요</p>
                    <img src="<c:url value='/img/m_bot_banner/img_store_list02.png'/>" alt="깨끗한 청결습관의 시작, 휘아와 함께하세요" class="m_b_b_img">
                </div>
                <div class="swiper-slide m_b_b_box" href="#">
                    <h1 class="m_b_b_logo">OFF-LINE</h1>
                    <p>젝시믹스의 전국 오프라인 매장을 확인해보세요</p>
                    <img src="<c:url value='/img/m_bot_banner/img_store_list03.png'/>" alt="젝시믹스의 전국 오프라인 매장을 확인해보세요" class="m_b_b_img">
                </div>
            </div>
        </section>
    </main>
    <jsp:include page="footer.jsp"/>
</div>
<script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>
<script src="<c:url value='/js/item_db.js'/>"></script>
<script src="<c:url value='/js/common.js'/>"></script>
<script src="<c:url value='/js/index.js'/>"></script>
<script >
    // 베스트 아이템 item_info_box 내용 추가
    let best = ${best_js};
    infoBox(best, ".best_item_box .item_info_box");
</script>
</body>
</html>