$(document).ready(function(){
///////////////////////////////////////////////
///////////// 헤더 배너 글 움직이기 /////////////
///////////////////////////////////////////////
    let search_idx = 0;
    let search_length = $('.search_txt').length;
    setInterval(function(){
        $('.search_txt').eq(search_idx % search_length).animate({
            top: '-100%'
        }, 500);
        $('.search_txt').eq((search_idx + 1) % search_length).css({
            top: '100%'
        }).animate({
            top: '0'
        }, 500);
        search_idx += 1;
    }, 3000);

///////////////////////////////////////////////
//////////////// nav_pan 보이기 ///////////////
///////////////////////////////////////////////
    $('.nav_pan_hover, .nav_pan').hover(function(){
        if($(this).prop('class') == "nav_pan" || $(this).prop('class') == 'nav_pan_hover'){
            $('.nav_pan').css({display: 'block'});
            $('.nav_pan_item').css({display: 'block'});
        }
    }, function(){
        $('.nav_pan').css({display: 'none'});
        $('.nav_pan_item').css({display: 'none'});
    });

///////////////////////////////////////////////
//////////// 스크롤 - 헤더 상단 고정 ////////////
///////////////////////////////////////////////
    let h_bot = $('.h_bot').offset().top;
    $(window).scroll(function(){
        if($(window).scrollTop() >= h_bot - 1) {
            $('header').addClass('header_fixed');
            $('.h_bot').addClass('h_bot_fixed');
            $('.h_b.logo, .h_b.icon_box').css({display: 'block'});

        }else{
            $('.h_b.logo, .h_b.icon_box').css({display: 'none'});
            $('header').removeClass('header_fixed');
            $('.h_bot').removeClass('h_bot_fixed');
        }
    });
});