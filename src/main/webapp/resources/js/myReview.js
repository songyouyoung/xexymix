// 리뷰 화면 출력
let revBox = "";
if(rev.length == 0){
    revBox = `<p class="m_none">아직 작성한 리뷰가 없습니다.</p>`;
}else{
    revBox += `<div class="m_rev_area">`;
    revBox += createRev(rev);
    revBox += `</div>`;
}
$(".w_main").append(revBox);

// 리뷰 수정
$(document).on('click', '.m_rev_update', function(){
    updateRev(rev[($(this).parent().parent().parent()).index() - 2], true);
});

// 리뷰 삭제
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