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
    function init(){
        $('.md_pick_img_item').eq(1).css({transform: 'scale(1)'});
        $('.md_pick .item_desc_none').eq(1).css({display: 'none'});
        for(let i=0; i<mdPick.length; i++){
            if(i==1) continue;
            $('.md_pick_item').eq(i).css({display: 'none'});
            $('.md_pick_title').eq(i).css({display: 'none'});
        }
    }
    init();

///////////////////////////////////////////////
//////////////m_item_box -> fixed//////////////
///////////////////////////////////////////////
    $(window).scroll(function(){
        let m_i_box_top = $('.m_item_box').offset().top;
        let m_i_box_bot = ($('.m_item_box').offset().top + $('.m_item_box').innerHeight()) - ($('.fixed_img_box').innerHeight() - 80);
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
                for(let i=0; i<mdPick.length; i++){
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
