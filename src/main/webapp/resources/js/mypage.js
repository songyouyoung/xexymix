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