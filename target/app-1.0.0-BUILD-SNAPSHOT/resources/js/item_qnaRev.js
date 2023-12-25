let qnaUpdateChk = false;
let qnaNo;
let qnaImg;

let revUpdateChk = false;
let revImg;
/////////////////////////////////////
////////////// 문의 선택 /////////////
/////////////////////////////////////
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
            }, error: function() {
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

/////////////////////////////////////
///////// 리뷰 수정 / 삭제 ////////////
/////////////////////////////////////
// revChk = true면 update, false면 insert.
function updateRev(thisRev, revChk){
    let thisLocation = location.pathname.split("/")[1];
    if(userNo == ""){
        Swal.fire({
            icon: "warning",
            title: "로그인이 필요한 서비스입니다. "
        }).then(()=>{
            if (thisLocation == "item") {
                location.href = "/" + C_PATH + "/login?prevPage=" + location.pathname + "&itemNo=" + itemNo;
            }else{
                location.href = "/" + C_PATH + "/login?prevPage=" + location.pathname;
            }
        });
    }else if (!revChk || thisRev.userNo == userNo){
        $.ajax({
            url: "/" + C_PATH + "/item/rev/detail",
            type: "GET",
            success: function(data) {
                $("#wrap").append(data);
                let oriImg = thisRev.revFile==null?"":(thisRev.revFile).replaceAll("|", "%7C");
                if (revChk) { // thisLocation == "item" ||
                    $("#revForm").prop("action", `/${C_PATH}/item/rev/update?prevPage=${location.pathname}&itemNo=${thisRev.itemNo}&oriImg=${oriImg}`);
                    console.log("thisRev.revScore : ", thisRev.revScore)
                    $("#revNo").prop("value", `${thisRev.revNo}`);
                    $("#revScore").val(thisRev.revScore).prop("selected", true);
                    $("#revTxt").prop("readonly", true);
                    $("#revTxt").prop("value", `${thisRev.revTxt}`);
                    $(".w_m_file_upload").css({display:"none"});
                    revImg = thisRev.revFile == null?"":(thisRev.revFile.slice(0, -1)).split("|");
                    let revImgOri = [];
                    revImgOri = thisRev.revFileOri == null?"":(thisRev.revFileOri.slice(0, -1)).split("|");
                    let revImgBox = "";
                    let i = 0;
                    revImg == ""? "" : revImg.forEach((img)=>{
                        revImgBox += `<div class="w_m_file_item">
                                    <img src="/${C_PATH}/img/review/${img}" alt="리뷰 이미지" data-file = "${revImgOri[i++]}">
                                    <div class="w_m_close">X</div>
                                </div>`;
                    });
                    $(".w_m_file_box").append(revImgBox);
                    $(".w_m_close").css({display:"none"});
                    $(".revSubmit").html("수정하기");
                    $(".revSubmit").prop("type", "button");
                }else{
                    $("#revForm").prop("action", `/${C_PATH}/item/rev/insert?prevPage=${location.pathname}`);
                    $(".revRemove").css({display:"none"});
                }
                $(".w_h>img").prop("src", `/${C_PATH}/img/item_list/${thisRev.itemImg}`);
                $(".w_h_title").html(`${thisRev.itemName}`);

            }, error: function() {
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
}

// 문의, 리뷰 닫기
$(document).on('click', '.w_h_close', function(){
    (document.getElementsByClassName("qnarevWrap")[0]).remove();
    qnaUpdateChk = false;
    revUpdateChk = false;
});
$(document).on('click', '.btnCancel', function(){
    (document.getElementsByClassName("qnarevWrap")[0]).remove();
    qnaUpdateChk = false;
    revUpdateChk = false;
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
//리뷰 수정하기
$(document).on('click', '.revSubmit', function(){
    if(!revUpdateChk) {
        $("#revTxt").prop("readonly", false);
        $("#revTxt").focus();
        revImg.length < 5?$(".w_m_file_upload").css({display:"flex"}):"";
        $(".w_m_close").css({display:"block"});
        $(".revSubmit").html(`리뷰 작성하기`);
        revUpdateChk = true;
    }
    else{ $(".revSubmit").prop("type", "submit"); }
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
                            <td>${jsp == "item"?(qna.userName).slice(0, 1)+"**":qna.itemName}</td>
                            <td>${year}.${month}.${date}</td>
                        </tr>`;
    });
    return qnaBox;
};

/////////////////////////////////////
//////////////// 리뷰 ////////////////
/////////////////////////////////////
const createRev = (review, jsp)=>{
    let revBox = "";
    review.forEach((rev)=>{
        let dt = new Date(rev.revRegDate);
        let year = dt.getFullYear();
        let month = dt.getMonth()+1 < 10 ? "0" + (dt.getMonth()+1) : dt.getMonth()+1;
        let date = dt.getDate() < 10 ? "0" + dt.getDate() : dt.getDate();
        let revImg = rev.revFile == null?"":(rev.revFile.slice(0, -1)).split("|");
        let revImgBox = "";
        revImg == ""? "" : revImg.forEach((img)=>{
            revImgBox += `<div class="m_rev_img_box">
                                <img src="img/review/${img}" alt="리뷰이미지">
                            </div>`;
        });
        let revUD = "";
        if (rev.userNo == userNo){
            revUD = `<div class="m_rev_update">수정</div>
                        <div class="m_rev_delete">삭제</div>`;
        }
        revBox += `<div class="m_rev_item">
                            <div class="m_rev_title">`;
        if(jsp == "item"){
            revBox += `<div class="m_rev_name">${(rev.userName).slice(0, 1)+"**"}</div>
                        <div class="m_rev_right">
                            <div class="m_rev_regDate">${year}.${month}.${date}</div>
                            ${revUD}
                        </div>
                    </div>
                    <div class="m_rev_score">${"★".repeat(rev.revScore) + "☆".repeat(5-rev.revScore)}</div>`;
        }else{
            revBox += `<div class="m_rev_score">${"★".repeat(rev.revScore) + "☆".repeat(5-rev.revScore)}</div>
                        <div class="m_rev_right">
                            <div class="m_rev_regDate">${year}.${month}.${date}</div>
                            ${revUD}
                        </div>
                    </div>`;
        }
        revBox += `<div class="m_rev_txt">${rev.revTxt}</div>
                    <div class="m_rev_img">${revImgBox}</div>
                </div>`;
    });
    return revBox;
}

/////////////////////////////////////
//////////////// 구매 ////////////////
/////////////////////////////////////
const createBuy = (buy)=>{
    let buyBox = "";
    let today = new Date();
    today.setDate(today.getDate() - 7)
    for(let i = 0; i < buy.length; i++){
        let dt = new Date(buy[i].buyDate);
        let year = dt.getFullYear();
        let month = dt.getMonth()+1 < 10 ? "0" + (dt.getMonth()+1) : dt.getMonth()+1;
        let date = dt.getDate() < 10 ? "0" + dt.getDate() : dt.getDate();
        let buyCancelChk = today < dt;
        if (i == 0 || buy[i].buyNo != buy[i-1].buyNo){
            buyBox += `<div class="my_buy_list">
                            <div class="my_buy_title">
                                <div class="my_buy_date">${year}.${month}.${date}</div>
                                <div class="my_buy_no">${buy[i].buyNo}</div>
                            </div>
                            <div class="my_buy_item_list">`;
        }
        let buyChk;
        console.log("revNo : ", buy[i].revNo);
        console.log("revNoChk : ", buy[i].revNo != null);
        if (buyCancelChk && buy[i].buyCode == 'buy'){
            buyChk = `<div class="my_buy_curr">주문완료</div>
                        <div class="my_buy_review">${buy[i].revNo == null?"구매후기":"후기보기"}</div>
                        <a class="my_buy_cancel">주문취소</a>`;
        }else if(!buyCancelChk && buy[i].buyCode == 'buy' && buy[i].revNo != null){
            buyChk = `<div class="my_buy_curr">주문완료</div>
                        <div class="my_buy_review">${buy[i].revNo == null?"구매후기":"후기보기"}</div>`;
        }else{
            buyChk = `<div class="my_buy_curr">주문취소</div>`;
            if (buy[i].revNo != null){
                buyChk += `<div class="my_buy_review">후기보기</div>`;
            }
        }

        buyBox += `<div class="my_buy_item">
                        <img src="/${C_PATH}/img/item_list/${buy[i].itemImg}" alt="${buy[i].itemName}" class="my_buy_img">
                            <div class="my_buy_desc">
                                <div class="my_buy_itemName">${buy[i].itemName}</div>
                                <div class="my_buy_itemOption">[옵션 : ${buy[i].buyOpt}]</div>
                            </div>
                            <div class="my_buy_btn">
                                ${buyChk}
                            </div>
                    </div>`;
        if (i == buy.length-1 || buy[i].buyNo != buy[i+1].buyNo){
            buyBox += "</div>";// my_buy_item_list
            buyBox += "</div>";// my_buy_list
        }
    }
    return buyBox;
}

// 구매후기 클릭
$(document).on('click', '.my_buy_review', function(){
    let thisBuy = buy[$(this).parent().parent().index()];
    if (thisBuy.revNo == null){
        console.log("리뷰없음");
        updateRev(thisBuy, false);
    }else{
        console.log("리뷰있음");
        console.log("buyAuto : ", thisBuy.buyAuto);
        $.ajax({
            url: "/" + C_PATH + "/myPage/buyRev",
            type: "POST",
            headers: {"content-type": "application/json"},
            data: thisBuy.buyAuto+"",
            success: function(data) {
                console.log("reviewDto : ", data);
                updateRev(data, true);
            }, error: function() {
                Swal.fire({
                    icon: "warning",
                    title: "리뷰 조회 오류.<br> 관리자에게 문의해주세요."
                });
            }
        });
    }
});