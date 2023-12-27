//페이지네이션
let qnaPage = Math.ceil(qnaMaxCnt / 20); // 총 페이지 개수
let nowQnaPage = 1; // 현재 페이지
let startQnaPage = 1; // 시작 페이지
// 리뷰 화면 출력
let qnaBox = "";
let qnaPageBox = "";
if(qna.length == 0){
    qnaBox = `<p class="m_none">아직 작성한 문의가 없습니다.</p>`;
}else{
    qnaBox += createQna(qna, nowQnaPage);
    // 페이지네이션
    qnaPageBox += createPage(qnaPage);
}
$(".m_qna_area").append(qnaBox);
$(".pagination").html(qnaPageBox);

//////////////////////////////////////
///////// 페이지네이션 선택 ///////////
/////////////////////////////////////
$(document).on('click', '.pagination>span', function() {
    clickPage("qna", $(this), qnaPage, nowQnaPage, startQnaPage, 20)
});