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

const C_PATH = (location.pathname).split("/")[1];
/////////////////////////////////////
//////// item_info_box 구성 //////////
/////////////////////////////////////
const infoBox = (item, div)=>{
    let i = 0;
    item.forEach(function(item){
        let itemInfoBox = "";
        let regDate = new Date(item.itemRegDate);
        let today = new Date();
        let newDay = new Date(today.getTime() - 60*60*24*1000*14);
        if(regDate <= newDay){ itemInfoBox += `<img src="img/icon/3322.gif" alt="신상">`; }
        if(((today.getMonth() == 7 || today.getMonth() == 8) && (regDate.getMonth() == 11 || regDate.getMonth() == 12))
            || ((today.getMonth() == 12 || today.getMonth() == 1) && (regDate.getMonth() == 6 || regDate.getMonth() == 7))){
            itemInfoBox += `<img src="img/icon/3561.gif" alt="시즌오프">`; }
        if (item.itemDis != null && item.itemDis > 0){
            itemInfoBox += `<img src="img/icon/3525.gif" alt="이벤트특가">`; }
        if (item.itemEco != null && item.itemEco != ""){
            itemInfoBox += `<img src="img/icon/` + item.itemEco + `" alt="친환경">`; }
        if (item.itemUni != null && item.itemUni != ""){
            itemInfoBox += `<img src="img/icon/` + item.itemUni + `" alt="남녀공용">`; }
        if (item.itemColor != null && item.itemColor != ""){
            itemInfoBox += `<img src="img/icon/` + item.itemColor + `" alt="컬러">`; }
        if (item.itemSize != null && item.itemSize != ""){
            itemInfoBox += `<img src="img/icon/` + item.itemSize + `" alt="사이즈">`; }
        if (item.itemCnt < 20){
            itemInfoBox += `<img src="img/icon/3442.gif" alt="주문폭주">`; }

        $(div).eq(i++).html(itemInfoBox);
    });
}