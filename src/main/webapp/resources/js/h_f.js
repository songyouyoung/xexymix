///////////////////////////////////////////////
////////// 카테고리별 상세 카테고리 출력 ///////////
///////////////////////////////////////////////
let ii = 0;
for (let i = 0; i<5; i++) {
    for (let j = 0; j < CATE_NAV[ii].length; j++) {
        let PATH = (location.pathname).split("/")[1];
        let cate = $(".nav_pan_item").eq(i).parent().children("a").prop("href").split("=")[1];
        let nav_li = `<li><a href="/${PATH}/list?cate=${cate}&cateDetail=${CATE_NAV[ii+1][j]}">${CATE_NAV[ii][j]}</a></li>`;
        $(".nav_pan_item").eq(i).append(nav_li);
    }
    ii += 2;
}

///////////////////////////////////////////////
////////////// 헤더 호버 시 설명 ////////////////
///////////////////////////////////////////////
$(".h_t_icon_box li, .h_b_nav_R li").hover(function(){
    $(this).children(".h_icon_desc").css({ display: "block" });
}, function(){
    $(this).children(".h_icon_desc").css({ display: "none" });
});

///////////////////////////////////////////////
//////////////// 최근 본 상품 //////////////////
///////////////////////////////////////////////
$(".history").hover(()=>{
    let cookies = document.cookie.split(";");
    let c_itemNo = [];
    let c_itemPrice = [];
    let c_itemImg = [];
    let c_itemName = [];
    cookies.forEach((cookie)=>{
        let c_name = cookie.split("=");
        if(c_name[0].trim().startsWith("historyItem")){
            c_itemNo.push(c_name[1].trim());
        }else if(c_name[0].trim().startsWith("historyPrice")){
            c_itemPrice.push(Number(c_name[1].trim()));
        }else if(c_name[0].trim().startsWith("historyImg")){
            c_itemImg.push(c_name[1].trim());
        }else if(c_name[0].trim().startsWith("historyName")){
            c_itemName.push(decodeURIComponent(c_name[1].trim()).replaceAll("+", " "));
        }
    });
    let historyItem = "";
    if (c_itemNo.length > $(".h_t_icon_box .history_item_list").children().length){
        for(let i = 0; i < c_itemNo.length; i++){
            historyItem += `<a href="item?itemNo=${c_itemNo[i]}" class="history_item">
                                <div class="history_img">
                                    <img src="/${C_PATH}/img/item_list/${c_itemImg[i]}" alt="${c_itemName[i]}">
                                </div>
                                <div class="history_desc">
                                    <div class="item_title">${c_itemName[i]}</div>
                                    <div class="item_price">${c_itemPrice[i].toLocaleString("ko")}</div>
                                </div>
                            </a>`;
        }
    }else if(c_itemNo.length == 0){
        historyItem = "최근 본 상품이 없습니다. ";
    }
    $(".history_item_list").html(historyItem);
});

$(document).ready(function(){
///////////////////////////////////////////////
//////////////// 장바구니 개수 //////////////////
///////////////////////////////////////////////
    let cookies = document.cookie.split(";");
    let cartCnt = 0;
    cookies.forEach((cookie)=>{
        let c_name = cookie.split("=");
        if(c_name[0].trim() == "cartCnt"){
            cartCnt = c_name[1].trim();
        }
    });
    $(".h_cart_cnt").html(cartCnt);

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