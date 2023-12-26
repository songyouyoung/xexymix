/////////////////////////////////////
///////////// 문의 출력 //////////////
/////////////////////////////////////
let qnaBox = "";
if(qna.length == 0){
    qnaBox = `<p class="m_none">아직 작성한 문의가 없습니다.</p>`;
}else{
    qnaBox += `<table class="m_qna_area">`;
    qnaBox += createQna(qna, 1, "mypage");
    qnaBox += `</table>`;
}
$("#m_qna").append(qnaBox);

/////////////////////////////////////
///////////// 리뷰 출력 //////////////
/////////////////////////////////////
let revBox = "";
if(rev.length == 0){
    revBox = `<p class="m_none">아직 작성한 문의가 없습니다.</p>`;
}else{
    revBox += `<table class="m_qna_area">`;
    revBox += createRev(rev);
    revBox += `</table>`;
}
$("#m_review").append(revBox);

$(document).on('click', '.m_rev_update', function(){
    updateRev(rev[($(this).parent().parent().parent()).index() - 2], true);
});
$(document).on('click', '.m_rev_delete', function(){
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
        deleteRev(rev[($(this).parent().parent().parent()).index() - 2]);
    })
});

/////////////////////////////////////
///////////// 구매 출력 //////////////
/////////////////////////////////////
let buyBox = "";
if(buy.length == 0){
    buyBox = `<p class="m_none">아직 주문한 상품이 없습니다.</p>`;
}else{
    buyBox = createBuy(buy);
}
$("#m_buy").append(buyBox);

//구매 취소
$(document).on('click', '.my_buy_cancel', function(){
    console.log("buy : ", buy[$(this).data("index")]);
    Swal.fire({
        title: '주문 취소 하시겠습니까?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: "#AD8B73",
        cancelButtonColor: "#BEBCBA",
        confirmButtonText: '확인',
        cancelButtonText: '취소',
        reverseButtons: false,
    }).then(result => {
        if (!result.isConfirmed) return;
        $.ajax({
            type: 'POST',
            url: '/' + C_PATH + "/myPage/buy/cancel",
            headers: {"content-type": "application/json"},
            data: JSON.stringify(buy[$(this).data("index")]),
            success: function (data) {
                Swal.fire({
                    icon: "success",
                    title: "구매 취소 완료!",
                }).then(() => {
                    location.reload();
                });
            }, error: function (e) {
                Swal.fire({
                    icon: "warning",
                    title: "구매 취소 ERROR. \n 관리자에게 문의해주세요.",
                });
            }
        });
    })
});