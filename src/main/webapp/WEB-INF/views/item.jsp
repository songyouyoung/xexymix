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
    <link rel="stylesheet" href="<c:url value='/css/item.css'/>">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css" />
</head>
<body>
<div id="wrap">
    <jsp:include page="header.jsp"/>
    <main class="w_item">
        <section class="m_header">
            <div class="m_h_img">
                <img src="<c:url value='/img/item_list/${item.itemImg}'/>" alt="${item.itemName}">
            </div>
            <form class="m_h_desc" action="#" method="post" target="_self" autocomplete="off">
                <div class="desc_info">
                    <div class="item_title">${item.itemName}</div>
                    <div class="item_info_box"></div>
                    <div class="item_txt">
                        <div class="item_txt_event">
                            <c:if test="${item.evPer != null && item.evPer > 0}">
                                ${item.evTxt}
                            </c:if>
                        </div>
                        <span>${item.itemDesc}</span>
                    </div>
                    <div class="item_code">${item.itemNo}</div>
                </div>
                <table class="desc_price">
                    <tr>
                        <th>판매가</th>
                        <td>
                            <c:choose>
                                <c:when test="${item.evPer != null && item.evPer > 0}">
                                    <span class="item_orig_price">
                                            <fmt:formatNumber type="number" pattern="###,###,###,###,###,###" value="${item.itemPrice}" />
                                    </span>
                                    <span class="item_price">
                                        <fmt:formatNumber type="number" pattern="###,###,###,###,###,###" value="${(item.itemPrice / 100 * (100 - item.evPer))}" />
                                    </span>
                                </c:when>
                                <c:otherwise>
                                    <span class="item_orig_price"></span>
                                    <span class="item_price">
                                        <fmt:formatNumber type="number" pattern="###,###,###,###,###,###" value="${(item.itemPrice / 100 * (100 - item.evPer))}" />
                                    </span>
                                </c:otherwise>
                            </c:choose>

                        </td>
                    </tr>
<%--                    <tr>--%>
<%--                        <th>멤버쉽 할인가</th>--%>
<%--                        <td class="mem_sale">--%>
<%--                            <span>펼쳐보기</span>--%>
<%--                            <table class="mem_sale_box mem_sale_box_none">--%>
<%--                                <tr>--%>
<%--                                    <th>멤버쉽 할인가</th><td>X</td>--%>
<%--                                </tr>--%>
<%--                                <tr>--%>
<%--                                    <th>VVIP <span class="mem_sale_per">10%</span></th><td class="mem_sale_price"></td>--%>
<%--                                </tr>--%>
<%--                                <tr>--%>
<%--                                    <th>VIP <span class="mem_sale_per">7%</span></th><td class="mem_sale_price"></td>--%>
<%--                                </tr>--%>
<%--                                <tr>--%>
<%--                                    <th>PREMIUM <span class="mem_sale_per">5%</span></th><td class="mem_sale_price"></td>--%>
<%--                                </tr>--%>
<%--                                <tr>--%>
<%--                                    <th>FAMILY <span class="mem_sale_per">3%</span></th><td class="mem_sale_price"></td>--%>
<%--                                </tr>--%>
<%--                                <tr>--%>
<%--                                    <th>FRIEND <span class="mem_sale_per">1%</span></th><td class="mem_sale_price"></td>--%>
<%--                                </tr>--%>
<%--                                <tr>--%>
<%--                                    <th>HELLO</th><td class="mem_sale_price"></td>--%>
<%--                                </tr>--%>
<%--                            </table>--%>
<%--                        </td>--%>
<%--                    </tr>--%>
                    <tr>
                        <th>포인트</th>
                        <td>1%</td>
                    </tr>
                    <tr>
                        <th>사이즈</th>
                        <td>
                            <select name="size" id="size">
                                <option value="">옵션 선택</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <c:choose>
                                    <c:when test="${item.itemSize == '3372.gif'}">
                                        <option value="XXL">XXL</option>
                                    </c:when>
                                    <c:when test="${item.itemSize == '3370.gif'}">
                                        <option value="XXL">XXL</option>
                                        <option value="XXXL">XXXL</option>
                                    </c:when>
                                </c:choose>
                            </select>
                        </td>
                    </tr>
<%--                    <tr>--%>
<%--                        <th colspan = "2" class="btn_size">--%>
<%--                            <div>--%>
<%--                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" class="svg-inline fit-widget-icon-top">--%>
<%--                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.58757 5.5C4.26846 5.5 2.32914 7.26247 2.10806 9.57103L1.53991 15.5039L5.25002 16.3251V12.9375C5.25002 12.6614 5.47388 12.4375 5.75002 12.4375C6.02617 12.4375 6.25002 12.6614 6.25002 12.9375V30H19.25V12.9375C19.25 12.6614 19.4739 12.4375 19.75 12.4375C20.0262 12.4375 20.25 12.6614 20.25 12.9375V16.3999L24.4467 15.3787L23.6765 9.42287C23.3864 7.17938 21.4758 5.5 19.2137 5.5H17.9883C17.8091 7.88564 15.5924 9.6875 13 9.6875C10.4076 9.6875 8.19094 7.88564 8.01171 5.5H6.58757ZM9.01607 5.5C9.19554 7.2429 10.8606 8.6875 13 8.6875C15.1395 8.6875 16.8045 7.2429 16.984 5.5H9.01607ZM0.891974 16.3847L5.25002 17.3493V30.5C5.25002 30.7761 5.47388 31 5.75002 31H19.75C20.0262 31 20.25 30.7761 20.25 30.5V17.4291L25.1182 16.2444C25.3659 16.1842 25.5286 15.9473 25.4959 15.6945L24.6683 9.29461C24.3137 6.55258 21.9786 4.5 19.2137 4.5H6.58757C3.7531 4.5 1.38282 6.65413 1.11262 9.4757L0.502302 15.8489C0.478227 16.1003 0.645397 16.3302 0.891974 16.3847Z"></path>--%>
<%--                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M31 4.375L31.3 4.6L35.3 7.6L34.7 8.4L31.5 6V30L34.7 27.6L35.3 28.4L31.3 31.4L31 31.625L30.7 31.4L26.7 28.4L27.3 27.6L30.5 30V6L27.3 8.4L26.7 7.6L30.7 4.6L31 4.375Z"></path>--%>
<%--                                </svg>--%>
<%--                                <span>고객님 사이즈를 찾아보세요!</span>--%>
<%--                            </div>--%>
<%--                        </th>--%>
<%--                    </tr>--%>
                    <tr>
                        <th colspan = "2" class="order_item_box"></th>
                    </tr>
                    <tr>
                        <th class="price_total">총 합계</th>
                        <td class="price_total"><span>0</span>원</td>
                    </tr>
                </table>
                <div class="desc_buy">
                    <div class="d_b_cart">장바구니</div>
                    <div class="d_b_buy">구매하기</div>
                </div>
            </form>
        </section>
        <section class="membership">
            <div class="m_main_title">
                회원 혜택안내
            </div>
            <div class="m_item">
                <img src="<c:url value='/img/log_icon_1.gif'/>" alt="">
                <div class="m_title">카카오플친 3천원 즉시할인</div>
                <div class="m_text">회원가입 5천원</div>
                <div class="m_text">앱 다운로드 1만원 쿠폰 지급</div>
            </div>
            <div class="m_item">
                <img src="<c:url value='/img/log_icon_2.gif'/>" alt="">
                <div class="m_title">구매시 1% 적립</div>
                <div class="m_text">구매 금액에 따른 적립금</div>
                <div class="m_text">리뷰 작성 시 추가 적립</div>
            </div>
            <div class="m_item">
                <img src="<c:url value='/img/log_icon_3.gif'/>" alt="">
                <div class="m_title">리뷰 작성시 적립금 지급</div>
                <div class="m_text">매주 포토후기 선정하여</div>
                <div class="m_text">특별 감사 적립금을 지급</div>
            </div>
            <div class="m_item">
                <img src="<c:url value='/img/log_icon_4.gif'/>" alt="">
                <div class="m_title">5만원 이상 무료배송</div>
                <div class="m_text">전 상품 5만원 이상</div>
                <div class="m_text">결제 시 무료배송</div>
            </div>
        </section>
        <section class="m_nav">
            <div><a href="#m_review">상품후기 <span class="item_review"></span></a></div>
            <div><a href="#m_detail">상세정보</a></div>
            <div><a href="#m_post">배송/교환/반품</a></div>
            <div><a href="#m_qna">상품문의</a></div>
        </section>
        <section class="m_detail_box" id="m_review">
            <div class="m_item_title">상품후기
                <b>(<fmt:formatNumber type="number" pattern="###,###,###,###,###,###" value="${item.revCnt}"/>)</b>
            </div>
        </section>
        <section class="m_detail_box" id="m_detail">
            <div class="m_item_title">상세정보</div>
            <img src="<c:url value="/img/item_list/detail/${item.itemImgDetail}"/>" alt="${item.itemName} 상세 정보">
        </section>
        <section class="m_detail_box" id="m_post">
            <div class="m_item_title">배송/교환/반품</div>
            <img src="<c:url value='/img/post.JPG'/>" alt="배송/교환/반품 안내">
        </section>
        <section class="m_detail_box" id="m_qna">
            <div class="m_item_title">상품문의</div>
            <table class="m_qna_area">
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성일</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>상품관련 문의 드립니다</td>
                    <td>송**</td>
                    <td>2023.11.13</td>
                </tr>
            </table>
            <div class="pagination">
                <span class="prevBtn">&lt;</span>
                <span class="page">1</span>
                <span class="page">2</span>
                <span class="page">3</span>
                <span class="page">4</span>
                <span class="page">5</span>
                <span class="page">6</span>
                <span class="page">7</span>
                <span class="page">8</span>
                <span class="page">9</span>
                <span class="page">10</span>
                <span class="nextBtn">&gt;</span>
            </div>
        </section>
    </main>
    <jsp:include page="footer.jsp"/>
</div>
<script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>
<script src="<c:url value='/js/item_db.js'/>"></script>
<script src="<c:url value='/js/common.js'/>"></script>
<script src="<c:url value='/js/item.js'/>"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js"></script>
<script>
    let item = ${item_js};
    let revMaxCnt = ${revMaxCnt};
    let review = ${review_js};
    let reviewBest = ${reviewBest_js};
    let revChart = ${reviewChart_js};
    <%--let qna = ${qna_js};--%>
</script>
</body>
</html>