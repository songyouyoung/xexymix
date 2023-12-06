$(document).on('click', '.my_cart_prevCnt', function(){
    cart_cnt("prev", $(this));
});
$(document).on('click', '.my_cart_nextCnt', function(){
    cart_cnt("next", $(this));
});
let cart_cnt = (cart, thisEle)=>{
    let cart_cnt = thisEle.parent().children(".my_cart_cntNum");
    let cart_point = thisEle.parent().parent().children(".my_cart_point");
    let cart_price = thisEle.parent().parent().children(".my_cart_price");
    let price = Number(thisEle.parent().attr("data-price"));
    let cnt = 0;
    if(cart == "prev"){
        cnt = cart_cnt.val() > 1?cart_cnt.val(cart_cnt.val() - 1):cart_cnt.val();
    }else{
        cnt = cart_cnt.val(Number(cart_cnt.val()) + 1);
    }
    cart_point.text(((price * cnt.val()) / 100).toLocaleString("ko"));
    cart_price.text((price * cnt.val()).toLocaleString("ko"));
}