$(document).ready(function(){
/////////////////////////////////////
//////////// cate 값 인식 ///////////
/////////////////////////////////////
    let cate_code = +get_url_info("cate_no");
    let item_code = get_url_info("item_no");
    let item_info = find_item(ITEM_INFO, item_code);
    let item_src = find_item(ITEM_IMG, item_code);

/////////////////////////////////////
//////////// 정보 불러오기 ///////////
/////////////////////////////////////
    $('.m_h_img > img').attr('src', './img/item_list/'+item_src.main_src);
    $('.m_h_img > img').attr('alt', item_info.title);
    $('.item_title').text(item_info.title);
    let item_info_box="";
    if(item_info.color+"" != ""){
        item_info_box += `<img src = "<c:url value='/img/icon/${ICON_IMG[3][item_info.color]}" alt="${ICON_IMG[4][item_info.color]}">`;
    }
    if(item_info.item_info_1+"" != ""){
        item_info_box += `<img src = "<c:url value='/img/icon/${ICON_IMG[0][item_info.item_info_1]}" alt="${ICON_IMG[1][item_info.item_info_1]}">`;
        getSize(item_info.item_info_1);
    }
    if(item_info.item_info_2+"" != ""){
        item_info_box += `<img src = "<c:url value='/img/icon/${ICON_IMG[0][item_info.item_info_2]}" alt="${ICON_IMG[1][item_info.item_info_2]}">`;
        getSize(item_info.item_info_2);
    }
    if(item_info.item_info_3+"" != ""){
        item_info_box += `<img src = "<c:url value='/img/icon/${ICON_IMG[0][item_info.item_info_3]}" alt="${ICON_IMG[1][item_info.item_info_3]}">`;
        getSize(item_info.item_info_3);
    }
    if(item_info.item_hot+"" != ""){
        item_info_box += `<img src = "<c:url value='/img/icon/${ICON_IMG[2][0]}" alt="${ICON_IMG[2][1]}">`;
    }
    $('.item_info_box').append(item_info_box);
    $('.item_txt > span').text(item_info.desc);
    $('.item_txt_event').text(item_info.ec_desc);
    $('.item_code').text(item_code);
    $('.item_price').text(item_info.s_price.toLocaleString('ko'));
    if(item_info.s_price != item_info.o_price) $('.item_orig_price').text(item_info.o_price.toLocaleString('ko'));
    
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

/////////////////////////////////////
/////////// 멤버쉽 할인가 ////////////
/////////////////////////////////////
    let mem_sale = $('.mem_sale_box');
    $(document).on('click', '.mem_sale > span', function(){
        mem_sale.removeClass('mem_sale_box_none');
    });
    $(document).on('click', '.mem_sale_box tr:first-child > *', function(){
        mem_sale.addClass('mem_sale_box_none');
    });
    mem_sale.find('.mem_sale_price').eq(0).text((item_info.s_price * 0.9).toLocaleString('ko'));
    mem_sale.find('.mem_sale_price').eq(1).text((item_info.s_price * 0.93).toLocaleString('ko'));
    mem_sale.find('.mem_sale_price').eq(2).text((item_info.s_price * 0.95).toLocaleString('ko'));
    mem_sale.find('.mem_sale_price').eq(3).text((item_info.s_price * 0.97).toLocaleString('ko'));
    mem_sale.find('.mem_sale_price').eq(4).text((item_info.s_price * 0.99).toLocaleString('ko'));

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
                    $('.order_price').eq(item_no).text((item_info.s_price * item_order[item_no][1]).toLocaleString('ko'));
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
                    let order_price = `<div class="order_price">${item_info.s_price.toLocaleString('ko')}</div>`;
                    $('.order_item').eq(item_no).append(order_price);
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
            $('.order_price').eq(item_no).text((item_info.s_price * item_order[item_no][1]).toLocaleString('ko'));
            getPriceTotal();
        }else{
            alert("해당 상품은 최소구매 수량이 1개 입니다.");
        }
    });
    $(document).on('click', '.order_plus', function(){
        let item_no = $(this).parent().parent().index();
        item_order[item_no][1] += 1;
        $('.order_cnt').eq(item_no).text(item_order[item_no][1]);
        $('.order_price').eq(item_no).text((item_info.s_price * item_order[item_no][1]).toLocaleString('ko'));
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
                $("a[href='#m_qna'").parent().addClass('m_nav_after');
            }else if($(window).scrollTop() >= nav_post - 1){
                $("a[href='#m_post'").parent().addClass('m_nav_after');
            }else if($(window).scrollTop() >= nav_detail - 1){
                $("a[href='#m_detail'").parent().addClass('m_nav_after');
            }else{
                $("a[href='#m_review'").parent().addClass('m_nav_after');
            }
        }
    });
});