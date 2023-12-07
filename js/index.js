///////////////////////////////////////////////
//////////// 최근 본 상품 전체 선택 ////////////
///////////////////////////////////////////////
function selectAll(select)  {
    let checkboxes = document.querySelectorAll('input[name="history"]');

    checkboxes.forEach((checkbox) => {
        checkbox.checked = select.checked
    });
}

$(document).ready(function(){
    let m_b_width = $('.m_b_item').innerWidth();
    function init(){
        $('.m_b_item').eq(0).css({left: m_b_width * 0});
        $('.m_b_item').eq(1).css({left: m_b_width * 1 + 10});
        $('.m_b_item').eq(2).css({left: m_b_width * 2 + 20});
        
        // BEST_ITEM
        let best_length = BEST_ITEM.length
        let li = '<li class="swiper-slide"></li>';
        for(let i = 0; i<best_length; i++){
            $(li).appendTo('.best_item_box');
            add_img_box($('.best_item_box .swiper-slide'), BEST_ITEM[i], i);
        }
        
        //md_pick
        let div_swiper = '<div class = "swiper-slide"></div>';
        let div_md_pick_img = '<div class = "md_pick_img"></div>';
        let div_md_pick_item = '<div class = "md_pick_item"></div>';
        let div_md_pick_title = '<div class = "md_pick_title"></div>';
        for(let i=0; i<MDPICK.length; i++){
            let item_info = find_item(ITEM_INFO, MDPICK[i][0]);
            $(div_swiper).appendTo('.md_pick .swiper-wrapper');
            $('.md_pick .swiper-slide').eq(i).append(div_md_pick_img);
            let item_img = find_item(ITEM_IMG, MDPICK[i][0]);
            let item_cate;
            for(let j=0; j<CATE.length; j++){
                if(CATE[j] == item_info.cate){
                    item_cate = j;
                    break;
                }
            }
            let a = `<a href="./item.html?cate_no=${item_cate}&item_no=${MDPICK[i][0]}"></a>`;
            $('.md_pick .md_pick_img').eq(i).append(a);
            let img = `<img src="./img/item_list/hover/${item_img.hover_src}" alt="" class = "md_pick_img_item">`;
            $('.md_pick .md_pick_img').eq(i).children('a').append(img);
            let img_none = `<div class="item_desc_none"></div>`;
            $('.md_pick .md_pick_img').eq(i).append(img_none);
            
            $('.md_pick_img').eq(i).append(div_md_pick_item);

            let div_1_md_pick_title = `<div class="title">${item_info.title}</div>`;
            let div_2_md_pick_title = `<div class="desc">${item_info.desc}</div>`;
            $('.md_pick_img').eq(i).append(div_md_pick_title);
            $('.md_pick_title').eq(i).append(div_1_md_pick_title);
            $('.md_pick_title').eq(i).append(div_2_md_pick_title);
            for(let j=0; j<4; j++){
                add_img_box($('.md_pick_item'), MDPICK[i][j+1], i, j);
            }
        }
        $('.md_pick_img_item').eq(1).css({transform: 'scale(1)'});
        $('.md_pick .item_desc_none').eq(1).css({display: 'none'});
        for(let i=0; i<MDPICK.length; i++){
            if(i==1) continue;
            $('.md_pick_item').eq(i).css({display: 'none'});
            $('.md_pick_title').eq(i).css({display: 'none'});
        }

        // m_item_box
        for(let i=0; i<CATE_FIXED[2].length; i++){
            let item_section = `<section class="m_item_list_box"></section>`
            $('.m_item_box').append(item_section);
            let cnt = 0;
            for(let j = 0; j<ITEM_INFO.length; j++){
                if(ITEM_INFO[j].cate_detail == CATE_FIXED[0][i]){
                    add_img_box($('.m_item_list_box'), ITEM_INFO[j].item_code, i, cnt);
                    cnt += 1;
                    if(cnt >= CATE_FIXED[2][i] * 4) {
                        break;
                    }
                    else if(j > ITEM_INFO.length) break;
                }
            }
        }
        
    }
    init();

///////////////////////////////////////////////
//////////////m_item_box -> fixed//////////////
///////////////////////////////////////////////
    // $(window).on('mousewheel DOMMouseScroll', function(){
    $(window).scroll(function(){
        let m_i_box_top = $('.m_item_box').offset().top;
        let m_i_box_bot = ($('.m_item_box').offset().top + $('.m_item_box').innerHeight()) - ($('.fixed_img_box').innerHeight() - 80);
        // let w_scroll = $(window).scrollTop() - event.wheelDelta - 80;
        let w_scroll = $(window).scrollTop() - 80;
        if(w_scroll >= m_i_box_top && w_scroll <= m_i_box_bot){
            $('.fixed_img_box').addClass('fixed_img_box_active');
            for(let i=CATE_FIXED[0].length-1; i>=0; i--){
                if( w_scroll >= $('.m_item_list_box').eq(i).offset().top - 1){
                    if($('.fixed_title').text() == CATE_FIXED[1][i]){
                        break;
                    }
                    else{
                        let j;
                        if(i == 1 || i == 2 || i == 3) j = 0;
                        else if(i == 0) j = 1;
                        else if(i == 4) j = 2;
                        else if(i == 5) j = 3;
                        $('.fixed_img_box').attr('href', `./cate.html?cate_no=${j}`)
                        $('.fixed_title').text(CATE_FIXED[1][i]);
                        $('.fixed_video').attr('src', './img/m_item_fixed/'+CATE_FIXED[4][i]);
                        $('.fixed_img').attr('src', './img/m_item_fixed/'+CATE_FIXED[3][i]);
                        $('.fixed_img').attr('alt', CATE_FIXED[1][i]);
                        
                        break;
                    }
                }
            }
        }else{
            $('.fixed_img_box').removeClass('fixed_img_box_active');
        }
    });

    // $(window).on('mousemove', function(){
    //     console.log(event.pageY);
    // })


    // $(window).scroll(function(){
    //     if($(window).scrollTop() >= 2190) {
            

    //     }
    //     else {
    //         // $(window).off('mousewheel DOMMouseScroll')
    //     }
    // })



///////////////////////////////////////////////
/////////////////swiper////////////////////////
///////////////////////////////////////////////
    var swiper_best_item = new Swiper(".best_item", {
        slidesPerView: 6,
        slidesPerGroup: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        keyboard: true,
    });
    var swiper_short_banner = new Swiper(".main_short_banner", {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 0,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        keyboard: true,
    });
    var swiper_md_pick = new Swiper(".md_pick", {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 100,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        keyboard: true,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        speed: 500,
        on: {
            slideNextTransitionEnd: function () {
                for(let i=0; i<MDPICK.length; i++){
                    $('.md_pick .item_desc_none').eq(i).css({display: 'block'});
                    $('.md_pick_img_item').eq(i).css({transform: 'scale(0.6)'});
                    $('.md_pick_item').eq(i).css({display: 'none'});
                    $('.md_pick_title .desc').eq(i).css({display: 'none'});
                    $('.md_pick_title').eq(i).css({display: 'none'});
                }
                $('.md_pick .item_desc_none').eq(this.activeIndex+1).css({display: 'none'});
                $('.md_pick_img_item').eq(this.activeIndex+1).css({transform: 'scale(1)'});
                $('.md_pick_item').eq(this.activeIndex+1).css({display: 'flex'});
                $('.md_pick_title').eq(this.activeIndex+1).css({display: 'block'});
                $('.md_pick_title .title').eq(this.activeIndex+1).css({left: 50, right: -50}).animate({left: 0, right: 0}, 350);
                setTimeout(() => {
                    $('.md_pick_title .desc').eq(this.activeIndex+1).css({left: 50, right: -50, display: 'block'}).animate({left: 0, right: 0}, 500);
                },350);

            },
            slidePrevTransitionEnd: function(){
                for(let i=0; i<MDPICK.length; i++){
                    $('.md_pick .item_desc_none').eq(i).css({display: 'block'});
                    $('.md_pick_img_item').eq(i).css({transform: 'scale(0.6)'});
                    $('.md_pick_item').eq(i).css({display: 'none'});
                    $('.md_pick_title .desc').eq(i).css({display: 'none'});
                    $('.md_pick_title').eq(i).css({display: 'none'});
                }
                $('.md_pick .item_desc_none').eq(this.activeIndex+1).css({display: 'none'});
                $('.md_pick_img_item').eq(this.activeIndex+1).css({transform: 'scale(1)'});
                $('.md_pick_item').eq(this.activeIndex+1).css({display: 'flex'});
                $('.md_pick_title').eq(this.activeIndex+1).css({display: 'block'});
                $('.md_pick_title .title').eq(this.activeIndex+1).css({left: 50, right: -50}).animate({left: 0, right: 0}, 350);
                setTimeout(() => {
                    $('.md_pick_title .desc').eq(this.activeIndex+1).css({left: 50, right: -50, display: 'block'}).animate({left: 0, right: 0}, 500);
                },350);
            }
        }
    });
    var swiper_m_bot_banner = new Swiper(".m_bot_banner", {
        slidesPerView: 2,
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});
