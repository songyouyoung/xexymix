//페이지네이션
let revPage = Math.ceil(revMaxCnt / 5); // 총 페이지 개수
let nowRevPage = 1; // 현재 페이지
let startRevPage = 1; // 시작 페이지
// 리뷰 화면 출력
let revBox = "";
let revPageBox = "";
if(rev.length == 0){
    revBox = `<p class="m_none">아직 작성한 리뷰가 없습니다.</p>`;
}else{
    revBox += createRev(rev);
    // 페이지네이션
    revPageBox += createPage(revPage);
}
$(".my_rev_area").append(revBox);
$(".pagination").html(revPageBox);

// 리뷰 수정
$(document).on('click', '.m_rev_update', function(){
    updateRev(rev[($(this).parent().parent().parent()).index()], true);
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
        deleteRev(rev[($(this).parent().parent().parent()).index()]);
    })
});

//////////////////////////////////////
///////// 페이지네이션 선택 ///////////
/////////////////////////////////////
$(document).on('click', '.pagination>span', function() {
    clickPage("review", $(this), revPage, nowRevPage, startRevPage, 5)
});