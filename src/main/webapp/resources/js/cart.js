///////////////////////////////////////////////
/////////////////// 화면 구성 ///////////////////
///////////////////////////////////////////////
let cartBox = "";
cart.forEach((cart)=>{
    let itemPrice = cart.evPer == null? cart.itemPrice: cart.itemPrice / 100 * (100-cart.evPer);
    console.log(itemPrice);
    cartBox += `<div class="my_cart_item">
                    <div class="my_cart_chk">
                        <input type="checkbox" name="my_cart_chk" class="my_cart_chkBox">
                    </div>
                    <div class="my_cart_desc_box">
                        <img src="/${C_PATH}/img/item_list/${cart.itemImg}" alt="${cart.itemName}">
                            <div class="my_cart_desc">
                                <div class="my_cart_item_title">${cart.itemName}</div>
                                <div class="my_cart_option">[ 옵션 : ${cart.cartOpt} ]</div>
                            </div>
                    </div>
                    <div class="my_cart_cnt" data-price="${itemPrice}">
                        <button class="my_cart_prevCnt">-</button>
                        <input type="number" min="1" value="${cart.cartCnt}" class="my_cart_cntNum" onblur="cart_cnt('', $(this))">
                            <button class="my_cart_nextCnt">+</button>
                    </div>
                    <div class="my_cart_point">${(itemPrice / 100).toLocaleString("ko")}</div>
                    <div class="my_cart_price">${itemPrice.toLocaleString("ko")}</div>
                    <div class="my_cart_btn">
                        <div class="my_cart_btn_buy" id="buy_one">바로 주문하기</div>
                        <div class="my_cart_btn_cancel">X 삭제</div>
                    </div>
                </div>`;
});
$(".my_cart_list").append(cartBox);

///////////////////////////////////////////////
/////////////////// 수량 변경 ///////////////////
///////////////////////////////////////////////
$(document).on('click', '.my_cart_prevCnt', function(){
    cart_cnt("prev", $(this));
});
$(document).on('click', '.my_cart_nextCnt', function(){
    cart_cnt("next", $(this));
});
function cart_cnt(cart, thisEle){
    let cart_cnt = thisEle.parent().children(".my_cart_cntNum");
    let cart_point = thisEle.parent().parent().children(".my_cart_point");
    let cart_price = thisEle.parent().parent().children(".my_cart_price");
    let price = Number(thisEle.parent().attr("data-price"));
    let cnt = 0;
    if(cart == "prev"){
        cnt = cart_cnt.val() > 1?cart_cnt.val(cart_cnt.val() - 1):cart_cnt.val();
    }else if(cart == "next"){
        cnt = cart_cnt.val(Number(cart_cnt.val()) + 1);
    }else{
        cnt = cart_cnt.val(Number(cart_cnt.val()) + 0);
    }
    cart_point.text(((price * cnt.val()) / 100).toLocaleString("ko"));
    cart_price.text((price * cnt.val()).toLocaleString("ko"));
}

///////////////////////////////////////////////
/////////////////// 전체 선택 ///////////////////
///////////////////////////////////////////////
$(document).on('change', '#my_cart_chk_all', function () {
    let check = $("#my_cart_chk_all").prop("checked");
    $(".my_cart_chkBox").prop("checked", check);
});

///////////////////////////////////////////////
///////////////// 장바구니 삭제 /////////////////
///////////////////////////////////////////////
$(document).on('click', '.my_cart_btn_cancel', function(){
    Swal.fire({
        title: '삭제하시겠습니까?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: "#AD8B73",
        cancelButtonColor: "#BEBCBA",
        confirmButtonText: '확인',
        cancelButtonText: '취소',
        reverseButtons: false,
    }).then(result => {
        if (!result.isConfirmed) return;
        let index = $(this).parent().parent().index();
        console.log("cart[index] : ", cart[index]);
        $.ajax({
            type: 'POST',
            url: '/' + C_PATH + "/cart/delete",
            headers: {"content-type": "application/json"},
            data: JSON.stringify(cart[index]),
            success: function () {
                Swal.fire({
                    title: "장바구니 삭제 완료!",
                }).then(() => { location.reload(); });

            }, error: function () {
                Swal.fire({
                    title: "장바구니 삭제 ERROR. \n 관리자에게 문의해주세요.",
                });
            }
        });
    });
});