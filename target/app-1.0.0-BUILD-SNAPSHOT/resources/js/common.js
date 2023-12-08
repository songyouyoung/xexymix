///////////////////////////////////////////////
/////////////////swiper////////////////////////
///////////////////////////////////////////////
setTimeout(function(){
    $('.item_desc_none').eq(1).css({display: 'none'});
    $('.m_b_item_desc').eq(1).slideDown(500);
    var swiper_main_banner = new Swiper(".main_banner", {
        observer: true,
        observeParents: true,
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 10,
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
                for(let i=0; i<$('.main_banner .swiper-slide').length; i++){
                    $('.main_banner .item_desc_none').eq(i).css({display: 'block'});
                    $('.m_b_item_desc').eq(i).slideUp(500);
                }
                $('.item_desc_none').eq(this.activeIndex+1).css({display: 'none'});
                $('.m_b_item_desc').eq(this.activeIndex+1).slideDown(300);
            },
            slidePrevTransitionEnd: function () {
                for(let i=0; i<$('.main_banner .swiper-slide').length; i++){
                    $('.main_banner .item_desc_none').eq(i).css({display: 'block'});
                    $('.m_b_item_desc').eq(i).slideUp(500);
                }
                $('.main_banner .item_desc_none').eq(this.activeIndex+1).css({display: 'none'});
                $('.m_b_item_desc').eq(this.activeIndex+1).slideDown(300);
            }
        }
    });
}, 10);

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