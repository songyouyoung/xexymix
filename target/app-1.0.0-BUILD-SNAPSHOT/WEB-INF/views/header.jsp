<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" session = "false"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%--<c:set var="sessionId" value="${ pageContext.request.getSession(false).getAttribute('liogdin')!=null? pageContext.request.getSession(false).getAttribute('liogdin'):null}" />--%>
<%--<c:set var="sessionNick" value="${ pageContext.request.getSession(false).getAttribute('liogdinn')!=null? pageContext.request.getSession(false).getAttribute('liogdinn'):null}" />--%>

<%--<c:set var="logIO_link" value="${ sessionId==null?'/login/login':'/login/logout'}" />--%>
<%--<c:set var="logIO_txt" value="${ sessionId==null?'로그인':'로그아웃'}" />--%>

<%--<c:set var="signIO_link" value="${ sessionId==null?'/signUp/add':'/myPage'}" />--%>
<%--<c:set var="signIO_txt" value="${ sessionId==null?'회원가입':'마이페이지'}" />--%>
<html>
<head>
    <link rel="stylesheet" href="<c:url value='/css/h_f.css'/>">
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
</head>
<body>
<header>
    <div class="h_banner"><a href="https://pf.kakao.com/_VGxmxeu" target="_blank">카카오톡 채널 추가 시 3천원 추가 할인!</a></div>
    <div class="h_top w_h_f">
        <div class="logo"><a href="<c:url value='/'/>">xexymix</a></div>
        <div class="h_t_R">
            <div class="search_box">
                <div class="search_txt"><a href="#">가을 특가 대전. 젝시믹스에 역대급 혜택이 쏟아진다!</a></div>
                <div class="search_txt"><a href="#">오늘의 신상. 입는 순간 느껴지는 기분 좋은 편안함. </a></div>
                <div class="search_txt"><a href="#">2023 올해의 브랜드 대상 수상 기념 1+1</a></div>
                <div class="search_txt"><a href="#">3년 연속 애슬레저 1위의 자부심. 젝시믹스 베스트 특가전</a></div>
                <div class="search_txt"><a href="#">당신의 여름을 더 다이나믹하게! Summer Activity!</a></div>
                <div class="search_txt"><a href="#">카카오톡 채널 추가 시 3천원 추가 할인!</a></div>
                <svg data-name="*ic_header_search" xmlns="http://www.w3.org/2000/svg" width="19.748" height="18.849" viewBox="0 0 19.748 18.849">
                    <g data-name="Path 113" style="fill:none">
                        <path d="M8.1 0A8.1 8.1 0 1 1 0 8.1 8.1 8.1 0 0 1 8.1 0z" style="stroke:none"/>
                        <path d="M8.096 1.2A6.904 6.904 0 0 0 1.2 8.096a6.904 6.904 0 0 0 6.896 6.896 6.904 6.904 0 0 0 6.896-6.896A6.904 6.904 0 0 0 8.096 1.2m0-1.2a8.096 8.096 0 1 1 0 16.192A8.096 8.096 0 0 1 8.096 0z" style="fill:#000;stroke:none"/>
                    </g>
                    <path data-name="Path 114" d="m1 1 5 5" transform="translate(12.9 12)" style="stroke:#000;stroke-linecap:round;stroke-width:1.2px;fill:none"/>
                </svg>
            </div>
            <ul class="h_t_icon_box">
                <li>
                    <a href="login.jsp">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
                            <g data-name="*ic_header_logout">
                                <path data-name="Rectangle 2119" style="opacity:.5;fill:none" d="M0 0h28v28H0z"/>
                                <g data-name="Group 1783">
                                    <path data-name="Path 1909" d="M10.045 19.068h-8.59a.456.456 0 0 1-.477-.432V1.364a.456.456 0 0 1 .477-.432h8.591V.5H1.455a.913.913 0 0 0-.955.864v17.272a.913.913 0 0 0 .955.864h8.591z" transform="translate(4.5 4)" style="stroke:#000;stroke-width:.8px;fill:none"/>
                                    <path data-name="Path 1910" d="M184.909 125.769a.682.682 0 0 0 .682.682h12.321l-3.839 3.82a.682.682 0 1 0 .964.964l5-4.983a.683.683 0 0 0 0-.964l-5-4.959a.682.682 0 0 0-.964.964l3.839 3.795h-12.321a.682.682 0 0 0-.682.682z" transform="translate(-174.909 -111.778)" style="stroke:#fff;stroke-width:.2px"/>
                                </g>
                            </g>
                        </svg>
                    </a>
                </li><!--login-->
                <li>
                    <a href="join.jsp">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
                            <g data-name="*ic_header_recent">
                                <path data-name="Rectangle 2075" style="opacity:.5;fill:none" d="M0 0h28v28H0z"/>
                                <g data-name="*mypage">
                                    <path data-name="Path 1203" d="M.5 18.354v-1.143a6.2 6.2 0 0 1 6.415-5.968h6.677a6.2 6.2 0 0 1 6.415 5.968v1.142" transform="translate(3.681 4.951)" style="stroke-linecap:round;stroke-miterlimit:10;stroke:#000;stroke-width:1.2px;fill:none"/>
                                    <g data-name="Ellipse 313" transform="translate(9.301 4)" style="stroke:#000;stroke-width:1.2px;fill:none">
                                        <circle cx="4.6" cy="4.6" r="4.6" style="stroke:none"/>
                                        <circle cx="4.6" cy="4.6" r="4" style="fill:none"/>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </a>
                </li><!--mypage-->
                <li class="history">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
                        <g data-name="*ic_header_recent">
                            <g data-name="Group 1779">
                                <path data-name="Path 1387" d="M16.888 20.188H3.8a3.308 3.308 0 0 1-3.3-3.3V3.8A3.308 3.308 0 0 1 3.8.5h13.088a3.309 3.309 0 0 1 3.3 3.3v13.089" transform="translate(3.062 4)" style="stroke-linejoin:round;stroke:#000;stroke-linecap:round;stroke-width:1.2px;fill:none"/>
                                <path data-name="Path 1389" d="M4.915 9.4h5.344V2.131" transform="translate(3.742 6.491)" style="stroke-linejoin:round;stroke:#000;stroke-linecap:round;stroke-width:1.2px;fill:none"/>
                                <path data-name="Path 1776" d="M3.328 0 2.213 2.165 0 1.08" transform="rotate(18.01 -46.39 77.968)" style="stroke-miterlimit:10;stroke:#000;stroke-linecap:round;stroke-width:1.2px;fill:none"/>
                            </g>
                            <path data-name="Rectangle 2075" style="opacity:.5;fill:none" d="M0 0h28v28H0z"/>
                        </g>
                    </svg>
                    <div class="history_box">
                        <div class="history_item_box">
                            <div class="history_item_box_point"></div>
                            <label class="history_chkAll">
                                <input type="checkbox" name="history" onclick='selectAll(this)'> 전체 선택
                            </label>
                            <div class="history_item_list">
                                <div class="history_item">
                                    <input type="checkbox" name="history">
                                    <div class="history_img">
                                        <img src="<c:url value='/img/main_banner/main_banner_230911_2.jpg'/>" alt="">
                                    </div>
                                    <div class="history_desc">
                                        <div class="item_title">스트레치 밴딩 부츠컷 슬랙스 1+1</div>
                                        <div class="item_price">25,800</div>
                                        <div class="history_btn">
                                            <div class="history_btn_cart">장바구니</div>
                                            <div class="history_btn_buy">구매하기</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="history_item">
                                    <input type="checkbox" name="history">
                                    <div class="history_img">
                                        <img src="<c:url value='/img/main_banner/main_banner_230911_2.jpg'/>" alt="">
                                    </div>
                                    <div class="history_desc">
                                        <div class="item_title">스트레치 밴딩 부츠컷 슬랙스 1+1</div>
                                        <div class="item_price">25,800</div>
                                        <div class="history_btn">
                                            <div class="history_btn_cart">장바구니</div>
                                            <div class="history_btn_buy">구매하기</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="history_item">
                                    <input type="checkbox" name="history">
                                    <div class="history_img">
                                        <img src="<c:url value='/img/main_banner/main_banner_230911_2.jpg'/>" alt="">
                                    </div>
                                    <div class="history_desc">
                                        <div class="item_title">스트레치 밴딩 부츠컷 슬랙스 1+1</div>
                                        <div class="item_price">25,800</div>
                                        <div class="history_btn">
                                            <div class="history_btn_cart">장바구니</div>
                                            <div class="history_btn_buy">구매하기</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="history_item">
                                    <input type="checkbox" name="history">
                                    <div class="history_img">
                                        <img src="<c:url value='/img/main_banner/main_banner_230914.jpg'/>" alt="">
                                    </div>
                                    <div class="history_desc">
                                        <div class="item_title">스트레치 밴딩 부츠컷 슬랙스 1+1asdfasdfasdfasdfasdfasdfafsadfsadfsafd</div>
                                        <div class="item_price">25,800</div>
                                        <div class="history_btn">
                                            <div class="history_btn_cart">장바구니</div>
                                            <div class="history_btn_buy">구매하기</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="history_btn">
                                <div class="history_btn_cart">장바구니</div>
                                <div class="history_btn_buy">구매하기</div>
                            </div>
                        </div>
                    </div>
                </li><!--history-->
                <li class="cart">
                    <a href="cart.jsp">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
                            <g id="_ic_header_cart" data-name="*ic_header_cart" transform="translate(-330 -15)">
                                <rect id="Rectangle_91" data-name="Rectangle 91" width="28" height="28" transform="translate(330 15)" fill="#fff" opacity="0"/>
                                <g id="_ic_shopping" data-name="*ic_shopping" transform="translate(334 16.374)">
                                    <path id="Path_1411" data-name="Path 1411" d="M18.634,22.135H1.218a.682.682,0,0,1-.715-.7L1.884,5.752a.694.694,0,0,1,.714-.6H17.252a.7.7,0,0,1,.715.6L19.349,21.43A.682.682,0,0,1,18.634,22.135Z" transform="translate(0.075 0.772)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1"/>
                                    <path id="Path_1412" data-name="Path 1412" d="M5.179,7.888V2.271A1.714,1.714,0,0,1,6.829.5h4.79a1.714,1.714,0,0,1,1.65,1.771V7.888" transform="translate(0.776 1.125)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1"/>
                                </g>
                            </g>
                        </svg>
                    </a>
                </li><!--cart-->
            </ul>
        </div>
    </div>
    <div class="h_bot">
        <div class="w_h_f">
            <ul class="h_b_nav_L">
                <li class="h_b logo"><a href="<c:url value='/'/>">xexymix</a></li>
                <li><a href="#">가을특가대전</a></li>
                <li><a href="#">신상할인</a></li>
                <li><a href="#">베스트</a></li>
                <li class="nav_pan_hover">
                    <a href="list.jsp?cate_no=0">우먼즈</a>
                    <ul class="nav_pan_item">
                        <li><a href="#">레깅스</a></li>
                        <li><a href="#">조거팬츠</a></li>
                        <li><a href="#">상의</a></li>
                        <li><a href="#">패드탑</a></li>
                        <li><a href="#">아우터</a></li>
                        <li><a href="#">하의</a></li>
                        <li><a href="#">이너웨어</a></li>
                        <li><a href="#">블랙라벨</a></li>
                        <li><a href="#">스윔웨어</a></li>
                        <li><a href="#">바람막이</a></li>
                        <li><a href="#">테니스룩</a></li>
                    </ul>
                </li>
                <li class="nav_pan_hover">
                    <a href="list.jsp?cate_no=1">맨즈</a>
                    <ul class="nav_pan_item">
                        <li><a href="#">신상</a></li>
                        <li><a href="#">상의</a></li>
                        <li><a href="#">아우터</a></li>
                        <li><a href="#">하의</a></li>
                        <li><a href="#">슬랙스</a></li>
                        <li><a href="#">조거팬츠</a></li>
                        <li><a href="#">탄성팬츠</a></li>
                        <li><a href="#">이너웨어</a></li>
                        <li><a href="#">블랙라벨</a></li>
                        <li><a href="#">스윔웨어</a></li>
                    </ul>
                </li>
                <li class="nav_pan_hover">
                    <a href="list.jsp?cate_no=2">골프</a>
                    <ul class="nav_pan_item">
                        <li><a href="#">우먼즈</a></li>
                        <li><a href="#">맨즈</a></li>
                        <li><a href="#">용품</a></li>
                    </ul>
                </li>
                <li class="nav_pan_hover">
                    <a href="list.jsp?cate_no=3">키즈</a>
                    <ul class="nav_pan_item">
                        <li><a href="#">상의</a></li>
                        <li><a href="#">아우터</a></li>
                        <li><a href="#">하의</a></li>
                        <li><a href="#">슈즈&용품</a></li>
                        <li><a href="#">스윔웨어</a></li>
                    </ul>
                </li>
                <li class="nav_pan_hover">
                    <a href="list.jsp?cate_no=4">슈즈&용품</a>
                    <ul class="nav_pan_item">
                        <li><a href="#">슈즈</a></li>
                        <li><a href="#">용품</a></li>
                        <li><a href="#">코스메틱</a></li>
                    </ul>
                </li>
            </ul>
            <ul class="h_b_nav_R">
                <li><a href="#">시즌오프</a></li>
                <li><a href="#">친환경</a></li>
                <li>
                    <a href="#" class="h_b icon_box">
                        <svg data-name="*ic_header_search" xmlns="http://www.w3.org/2000/svg" width="19.748" height="18.849" viewBox="0 0 19.748 18.849">
                            <g data-name="Path 113" style="fill:none">
                                <path d="M8.1 0A8.1 8.1 0 1 1 0 8.1 8.1 8.1 0 0 1 8.1 0z" style="stroke:none"/>
                                <path d="M8.096 1.2A6.904 6.904 0 0 0 1.2 8.096a6.904 6.904 0 0 0 6.896 6.896 6.904 6.904 0 0 0 6.896-6.896A6.904 6.904 0 0 0 8.096 1.2m0-1.2a8.096 8.096 0 1 1 0 16.192A8.096 8.096 0 0 1 8.096 0z" style="fill:#000;stroke:none"/>
                            </g>
                            <path data-name="Path 114" d="m1 1 5 5" transform="translate(12.9 12)" style="stroke:#000;stroke-linecap:round;stroke-width:1.2px;fill:none"/>
                        </svg>
                    </a>
                </li><!--searcg-->
                <li>
                    <a href="login.jsp" class="h_b icon_box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
                            <g data-name="*ic_header_logout">
                                <path data-name="Rectangle 2119" style="opacity:.5;fill:none" d="M0 0h28v28H0z"/>
                                <g data-name="Group 1783">
                                    <path data-name="Path 1909" d="M10.045 19.068h-8.59a.456.456 0 0 1-.477-.432V1.364a.456.456 0 0 1 .477-.432h8.591V.5H1.455a.913.913 0 0 0-.955.864v17.272a.913.913 0 0 0 .955.864h8.591z" transform="translate(4.5 4)" style="stroke:#000;stroke-width:.8px;fill:none"/>
                                    <path data-name="Path 1910" d="M184.909 125.769a.682.682 0 0 0 .682.682h12.321l-3.839 3.82a.682.682 0 1 0 .964.964l5-4.983a.683.683 0 0 0 0-.964l-5-4.959a.682.682 0 0 0-.964.964l3.839 3.795h-12.321a.682.682 0 0 0-.682.682z" transform="translate(-174.909 -111.778)" style="stroke:#fff;stroke-width:.2px"/>
                                </g>
                            </g>
                        </svg>
                    </a>
                </li><!--login-->
                <li>
                    <a href="join.jsp" class="h_b icon_box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
                            <g data-name="*ic_header_recent">
                                <path data-name="Rectangle 2075" style="opacity:.5;fill:none" d="M0 0h28v28H0z"/>
                                <g data-name="*mypage">
                                    <path data-name="Path 1203" d="M.5 18.354v-1.143a6.2 6.2 0 0 1 6.415-5.968h6.677a6.2 6.2 0 0 1 6.415 5.968v1.142" transform="translate(3.681 4.951)" style="stroke-linecap:round;stroke-miterlimit:10;stroke:#000;stroke-width:1.2px;fill:none"/>
                                    <g data-name="Ellipse 313" transform="translate(9.301 4)" style="stroke:#000;stroke-width:1.2px;fill:none">
                                        <circle cx="4.6" cy="4.6" r="4.6" style="stroke:none"/>
                                        <circle cx="4.6" cy="4.6" r="4" style="fill:none"/>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </a>
                </li><!--mypage-->
                <li class="history h_b icon_box">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
                        <g data-name="*ic_header_recent">
                            <g data-name="Group 1779">
                                <path data-name="Path 1387" d="M16.888 20.188H3.8a3.308 3.308 0 0 1-3.3-3.3V3.8A3.308 3.308 0 0 1 3.8.5h13.088a3.309 3.309 0 0 1 3.3 3.3v13.089" transform="translate(3.062 4)" style="stroke-linejoin:round;stroke:#000;stroke-linecap:round;stroke-width:1.2px;fill:none"/>
                                <path data-name="Path 1389" d="M4.915 9.4h5.344V2.131" transform="translate(3.742 6.491)" style="stroke-linejoin:round;stroke:#000;stroke-linecap:round;stroke-width:1.2px;fill:none"/>
                                <path data-name="Path 1776" d="M3.328 0 2.213 2.165 0 1.08" transform="rotate(18.01 -46.39 77.968)" style="stroke-miterlimit:10;stroke:#000;stroke-linecap:round;stroke-width:1.2px;fill:none"/>
                            </g>
                            <path data-name="Rectangle 2075" style="opacity:.5;fill:none" d="M0 0h28v28H0z"/>
                        </g>
                    </svg>
                    <div class="history_box">
                        <div class="history_item_box">
                            <div class="history_item_box_point"></div>
                            <label class="history_chkAll">
                                <input type="checkbox" name="history" onclick='selectAll(this)'> 전체 선택
                            </label>
                            <div class="history_item_list">
                                <div class="history_item">
                                    <input type="checkbox" name="history">
                                    <div class="history_img">
                                        <img src="<c:url value='/img/main_banner/main_banner_230911_2.jpg'/>" alt="">
                                    </div>
                                    <div class="history_desc">
                                        <div class="item_title">스트레치 밴딩 부츠컷 슬랙스 1+1</div>
                                        <div class="item_price">25,800</div>
                                        <div class="history_btn">
                                            <div class="history_btn_cart">장바구니</div>
                                            <div class="history_btn_buy">구매하기</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="history_item">
                                    <input type="checkbox" name="history">
                                    <div class="history_img">
                                        <img src="<c:url value='/img/main_banner/main_banner_230911_2.jpg'/>" alt="">
                                    </div>
                                    <div class="history_desc">
                                        <div class="item_title">스트레치 밴딩 부츠컷 슬랙스 1+1</div>
                                        <div class="item_price">25,800</div>
                                        <div class="history_btn">
                                            <div class="history_btn_cart">장바구니</div>
                                            <div class="history_btn_buy">구매하기</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="history_item">
                                    <input type="checkbox" name="history">
                                    <div class="history_img">
                                        <img src="<c:url value='/img/main_banner/main_banner_230911_2.jpg'/>" alt="">
                                    </div>
                                    <div class="history_desc">
                                        <div class="item_title">스트레치 밴딩 부츠컷 슬랙스 1+1</div>
                                        <div class="item_price">25,800</div>
                                        <div class="history_btn">
                                            <div class="history_btn_cart">장바구니</div>
                                            <div class="history_btn_buy">구매하기</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="history_item">
                                    <input type="checkbox" name="history">
                                    <div class="history_img">
                                        <img src="<c:url value='/img/main_banner/main_banner_230914.jpg'/>" alt="">
                                    </div>
                                    <div class="history_desc">
                                        <div class="item_title">스트레치 밴딩 부츠컷 슬랙스 1</div>
                                        <div class="item_price">25,800</div>
                                        <div class="history_btn">
                                            <div class="history_btn_cart">장바구니</div>
                                            <div class="history_btn_buy">구매하기</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="history_btn">
                                <div class="history_btn_cart">장바구니</div>
                                <div class="history_btn_buy">구매하기</div>
                            </div>
                        </div>
                    </div>
                    </svg>
                </li><!--history-->
                <li class="cart h_b icon_box">
                    <a href="cart.jsp">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
                            <g id="_ic_header_cart" data-name="*ic_header_cart" transform="translate(-330 -15)">
                                <rect id="Rectangle_91" data-name="Rectangle 91" width="28" height="28" transform="translate(330 15)" fill="#fff" opacity="0"/>
                                <g id="_ic_shopping" data-name="*ic_shopping" transform="translate(334 16.374)">
                                    <path id="Path_1411" data-name="Path 1411" d="M18.634,22.135H1.218a.682.682,0,0,1-.715-.7L1.884,5.752a.694.694,0,0,1,.714-.6H17.252a.7.7,0,0,1,.715.6L19.349,21.43A.682.682,0,0,1,18.634,22.135Z" transform="translate(0.075 0.772)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1"/>
                                    <path id="Path_1412" data-name="Path 1412" d="M5.179,7.888V2.271A1.714,1.714,0,0,1,6.829.5h4.79a1.714,1.714,0,0,1,1.65,1.771V7.888" transform="translate(0.776 1.125)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.1"/>
                                </g>
                            </g>
                        </svg>
                    </a>
                </li><!--cart-->
            </ul>
        </div>
        <div class="nav_pan"></div>
    </div>
    <script src="<c:url value='/js/h_f.js'/>"></script>
</header>
</body>
</html>
