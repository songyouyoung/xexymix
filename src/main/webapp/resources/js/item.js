/////////////////////////////////////
/////////////// 상품정렬 /////////////
/////////////////////////////////////
$(document).mouseup(function (e){
    // 외부 영역 클릭 시 정렬 닫음
    document.getElementsByClassName('sort_list')[0].classList.add('sort_list_none');
    $(document).on('click', '.sort', function(){
        document.getElementsByClassName('sort_list')[0].classList.toggle('sort_list_none');
    });
});

$(document).ready(function(){
    let orderPrice;
    if(item.evPer != null && item.evPer > 0){
        orderPrice = Math.ceil(item.itemPrice / 100 * (100 - item.evPer));
    }else{ orderPrice = item.itemPrice; }

/////////////////////////////////////
///// item info box정보 불러오기 /////
/////////////////////////////////////
    $(".item_info_box").append(infoBox(item));
    
/////////////////////////////////////
////////// 사이즈 옵션 추가 //////////
/////////////////////////////////////    
    function getSize(item){
        let xxl = `<option value="XXL">XXL</option>`;
        let xxxl = `<option value="XXXL">XXXL</option>`;
        if(item == 1){
            $('#size').append(xxl);
        }else if(item == 2){
            $('#size').append(xxl);
            $('#size').append(xxxl);
        }
    }

//////////////////////////////////////
/////////// 상품 후기 출력 ////////////
/////////////////////////////////////
    let revBox = "";
    if(item.revCnt == 0){
        revBox = `<p class="m_none">아직 작성한 리뷰가 없습니다.</p>`;
    }else{
        revBox += `<div class="m_rev_best_title">베스트 리뷰</div>
                <div class="m_rev_best_area">`
        reviewBest.forEach((revBest)=>{
            revBox += `<div class="m_rev_best_item">
                            <div class="m_rev_best_img">
                                <img src="img/review/${revBest.revFile}" alt="리뷰이미지">
                            </div>
                            <div class="m_rev_best_desc">
                                <div class="m_rev_best_txt">
                                    ${revBest.revTxt}
                                </div>
                                <div class="m_rev_best_name">
                                    ${(revBest.userName).replace(/(?<=.{1})./gi, "*")}
                                </div>
                                <div class="m_rev_best_regDate">2023.12.04</div>
                            </div>
                        </div>`;
        });
                `<!--</div>-->
<!--                <div class="m_rev_avr_area">-->
<!--                    <div class="m_rev_avr_item">-->
<!--                        ★4.9-->
<!--                    </div>-->
<!--                    <div class="m_rev_avr_chart">-->
<!--                        <canvas id="losTop5Chart"></canvas>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="m_rev_sort">-->
<!--                    <div class="sort">리뷰정렬-->
<!--                        <ul class="sort_list sort_list_none" style="width: 70px">-->
<!--                            <li>최신순</li>-->
<!--                            <li>인기순</li>-->
<!--                            <li>높은 별점순</li>-->
<!--                            <li>낮은 별점순</li>-->
<!--                        </ul>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="m_rev_area">-->
<!--                    <div class="m_rev_item">-->
<!--                        <div class="m_rev_title">-->
<!--                            <div class="m_rev_name">송**</div>-->
<!--                            <div class="m_rev_regDate">2023.12.04</div>-->
<!--                        </div>-->
<!--                        <div class="m_rev_score">★★★★☆</div>-->
<!--                        <div class="m_rev_txt">-->
<!--                            가볍고 안감이 부드러워 자꾸 손이 가는옷-->
<!--                            다른 컬러도 구매 하려구요 옷이 편하면서도 넘 이뻐요 최고-->
<!--                        </div>-->
<!--                        <div class="m_rev_img">-->
<!--                            <img src="<c:url value='/img/main_banner/main_banner_230915_1.jpg'/>" alt="">-->
<!--                                <img src="<c:url value='/img/main_banner/main_banner_230915_1.jpg'/>" alt="">-->
<!--                                    <img src="<c:url value='/img/main_banner/main_banner_230915_1.jpg'/>" alt="">-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->`;
    }
    $("#m_review").append(revBox);


/////////////////////////////////////
///////////// 상품 선택 /////////////
/////////////////////////////////////
    let item_order = Array.from(Array($('#size').children().length-1), () => new Array(2).fill(""));
    $(document).on('click', '#size', function(){
        let item_no = 0;
        let size_val = $('#size').val();
        if(size_val != ""){
            $('#size').val('').attr('selected', true);
            for(item_no=0; item_no<item_order.length; item_no++){
                if(item_order[item_no][0] == size_val){
                    item_order[item_no][1] += 1;
                    $('.order_cnt').eq(item_no).text(item_order[item_no][1]);
                    $('.order_price').eq(item_no).text((orderPrice * item_order[item_no][1]).toLocaleString('ko'));
                    break;
                }else if(item_order[item_no][0] == ""){
                    item_order[item_no][0] = size_val;
                    item_order[item_no][1] = 1;
                    let order_item = `<div class="order_item"></div>`;
                    $('.order_item_box').append(order_item);
                    let order_size = `<div class="order_size">${size_val}</div>`;
                    $('.order_item').eq(item_no).append(order_size);
                    let order_cnt = `<div class="order_cnt_box">
                                        <div class="order_minus"></div>
                                        <div class="order_cnt">1</div>
                                        <div class="order_plus"></div>
                                    </div>`;
                    $('.order_item').eq(item_no).append(order_cnt);
                    let orderBox = `<div class="order_price">${orderPrice.toLocaleString('ko')}</div>`;
                    $('.order_item').eq(item_no).append(orderBox);
                    let order_del = `<div class="order_del"></div>`;
                    $('.order_item').eq(item_no).append(order_del);
                    break;
                }
            }
        }
        getPriceTotal();
    });
    $(document).on('click', '.order_minus', function(){
        let item_no = $(this).parent().parent().index();
        if(item_order[item_no][1] > 1){
            item_order[item_no][1] -= 1;
            $('.order_cnt').eq(item_no).text(item_order[item_no][1]);
            $('.order_price').eq(item_no).text((orderPrice * item_order[item_no][1]).toLocaleString('ko'));
            getPriceTotal();
        }else{
            alert("해당 상품은 최소구매 수량이 1개 입니다.");
        }
    });
    $(document).on('click', '.order_plus', function(){
        let item_no = $(this).parent().parent().index();
        item_order[item_no][1] += 1;
        $('.order_cnt').eq(item_no).text(item_order[item_no][1]);
        $('.order_price').eq(item_no).text((orderPrice * item_order[item_no][1]).toLocaleString('ko'));
        getPriceTotal();
    });
    $(document).on('click', '.order_del', function(){
        let item_no = $(this).parent().index();
        for(let i=item_no; i<item_order.length - 1; i++){
            item_order[i][0] = item_order[i+1][0];
            item_order[i][1] = item_order[i+1][1];
        }
        item_order[item_order.length - 1][0] = "";
        item_order[item_order.length - 1][1] = "";
        $(this).parent().remove();
        getPriceTotal();
    });

    function getPriceTotal(){
        let price_total = 0;
        for(let i=0; i<$('.order_price').length; i++){
            price_total += +$('.order_price').eq(i).text().replace(',', '');
        }
        $('.price_total > span').text(price_total.toLocaleString('ko'));
    }
/////////////////////////////////////
////////// 내부 스크롤 이동 //////////
/////////////////////////////////////
    let scrollChk = true; // 내부 스크롤 이동과 스크롤 border 변경 충돌 방지
    $('.m_nav a').click(function(){
        scrollChk = false;
        $('.m_nav > div').removeClass('m_nav_after');
        $(this).parent().addClass('m_nav_after');

        event.preventDefault();
        let href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top - 80 -57
        }, 1000);
        setTimeout(function(){
            scrollChk = true;
        }, 1010);
    });

///////////////////////////////////////////////
/////////// 스크롤 - 메뉴바 상단 고정 ///////////
////////// 스크롤 - 메뉴바 border 변경 //////////
///////////////////////////////////////////////
    let nav_bot = $('.m_nav').offset().top;
    // let nav_review = $('#m_review > .m_item_title').offset().top;
    let nav_detail = $('#m_detail > .m_item_title').offset().top;
    let nav_post = $('#m_post > .m_item_title').offset().top;
    let nav_qna = $('#m_qna > .m_item_title').offset().top;
    $(window).scroll(function(){
        // 메뉴바 상단 고정
        if($(window).scrollTop() >= nav_bot - 1) {
            $('.m_nav').addClass('m_nav_fixed');
        }else{
            $('.m_nav').removeClass('m_nav_fixed');
        }

        // 메뉴바 border 변경
        if(scrollChk){
            $('.m_nav > div').removeClass('m_nav_after');
            if($(window).scrollTop() >= nav_qna - 1){
                $("a[href='#m_qna']").parent().addClass('m_nav_after');
            }else if($(window).scrollTop() >= nav_post - 1){
                $("a[href='#m_post']").parent().addClass('m_nav_after');
            }else if($(window).scrollTop() >= nav_detail - 1){
                $("a[href='#m_detail']").parent().addClass('m_nav_after');
            }else{
                $("a[href='#m_review']").parent().addClass('m_nav_after');
            }
        }
    });
});