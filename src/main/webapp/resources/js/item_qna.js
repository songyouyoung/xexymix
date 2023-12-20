/////////////////////////////////////
////////////// 문의 선택 /////////////
/////////////////////////////////////
let qnaUpdateChk = false;
let qnaNo;
let qnaImg;
$(document).on('click', '.m_qna_area td', function(){
    let thisQna = qna[($(this).parent()).index() - 1];
    qnaNo = thisQna.qnaNo;
    if(userNo == ""){
        Swal.fire({
            icon: "warning",
            title: "로그인이 필요한 서비스입니다. "
        }).then(()=>{
            location.href = "/" + C_PATH + "/login?prevPage="+location.pathname+"&itemNo="+itemNo;
        });
    }else if (thisQna.userNo == userNo){ // && qnaWrapChk
        $.ajax({
            url: "/" + C_PATH + "/item/qna/detail",
            type: "GET",
            success: function(data) {
                $("#wrap").append(data);
                let oriImg = thisQna.qnaFile==null?"":(thisQna.qnaFile).replaceAll("|", "%7C");
                $("#qnaForm").prop("action", `/${C_PATH}/item/qna/update?prevPage=${location.pathname}&itemNo=${thisQna.itemNo}&oriImg=${oriImg}`);
                $(".w_h>img").prop("src", `/${C_PATH}/img/item_list/${thisQna.itemImg}`);
                $(".w_h_title").html(`${thisQna.itemName}`);
                $("#qnaNo").prop("value", `${thisQna.qnaNo}`);
                $("#qnaTxt").prop("readonly", true);
                $("#qnaTxt").prop("value", `${thisQna.qnaTxt}`);
                $(".w_m_file_upload").css({display:"none"});
                qnaImg = thisQna.qnaFile == null?"":(thisQna.qnaFile.slice(0, -1)).split("|");
                let qnaImgOri = [];
                qnaImgOri = thisQna.qnaFileOri == null?"":(thisQna.qnaFileOri.slice(0, -1)).split("|");
                let qnaImgBox = "";
                let i = 0;
                qnaImg == ""? "" : qnaImg.forEach((img)=>{
                    qnaImgBox += `<div class="w_m_file_item">
                                    <img src="/${C_PATH}/img/qna/${img}" alt="문의 이미지" data-file = "${qnaImgOri[i++]}">
                                    <div class="w_m_close">X</div>
                                </div>`;
                });
                $(".w_m_file_box").append(qnaImgBox);
                $(".w_m_close").css({display:"none"});
                $(".qnaSubmit").html("수정하기");
                $(".qnaSubmit").prop("type", "button");
            },
            error: function() {
                Swal.fire({
                    icon: "warning",
                    title: "문의 수정 오류.<br> 관리자에게 문의해주세요."
                });
            }
        });
    }else{
        Swal.fire({
            icon: "warning",
            title: "조회 권한이 없습니다. "
        });
    }
});
// 문의 닫기
$(document).on('click', '.w_h_close', function(){
    (document.getElementById("qnaWrap")).remove();
    qnaUpdateChk = false;
});
$(document).on('click', '.qnaCencel', function(){
    (document.getElementById("qnaWrap")).remove();
    qnaUpdateChk = false;
});
//문의 수정하기
$(document).on('click', '.qnaSubmit', function(){
    if(!qnaUpdateChk) {
        $("#qnaTxt").prop("readonly", false);
        $("#qnaTxt").focus();
        qnaImg.length < 5?$(".w_m_file_upload").css({display:"flex"}):"";
        $(".w_m_close").css({display:"block"});
        $(".qnaSubmit").html(`문의하기`);
        qnaUpdateChk = true;
    }
    else{ $(".qnaSubmit").prop("type", "submit"); }
});


const createQna = (qna, nowQnaPage, jsp)=>{
    let qnaBox = `<tr>
                <th>번호</th>
                <th>제목</th>
                <th>${jsp == "item"?"작성자":"상품명"}</th>
                <th>작성일</th>
            </tr>`;
    // 전체 문의
    let i = (nowQnaPage - 1)*10+1;
    qna.forEach((qna)=>{
        let dt = new Date(qna.qnaRegDate);
        let year = dt.getFullYear();
        let month = dt.getMonth()+1 < 10 ? "0" + (dt.getMonth()+1) : dt.getMonth()+1;
        let date = dt.getDate() < 10 ? "0" + dt.getDate() : dt.getDate();
        qnaBox += `<tr>
                            <td class="qnaNo">${i++}</td>
                            <td>상품관련 문의드려요!</td>
                            <td>${jsp == "item"?`${(qna.userName).slice(0, 1)+"**"}`:qna.itemName}</td>
                            <td>${year}.${month}.${date}</td>
                        </tr>`;
    });
    return qnaBox;
};