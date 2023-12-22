/////////////////////////////////////
///////////// 구매 출력 //////////////
/////////////////////////////////////
let buyBox = "";
if(buy.length == 0){
    buyBox = `<p class="m_none">주문한 상품이 없습니다.</p>`;
}else{
    buyBox = createBuy(buy);
}
$("#m_buy").append(buyBox);

///////////////////////////////////////////////
/////////////// 구매내역 타이틀 설정 ////////////
///////////////////////////////////////////////
let buyLink = ((location.search).split("?")[1]).split("=")[1];
const buy_titleChk = (thisEle)=>{
    $(".myBuy.my_title > *").css({borderColor:"#d3d3d3"});
    $(thisEle).css({borderColor:"#111"});
}
if(buyLink == "all"){ buy_titleChk(".my_buy_title_all");}
else if(buyLink == "buy"){ buy_titleChk(".my_buy_title_done"); }
else if(buyLink == "cancel"){ buy_titleChk(".my_buy_title_cancel");}

///////////////////////////////////////////////
///////////// my_date 날짜 설정하기 ////////////
///////////////////////////////////////////////
let prevDate = document.getElementById("my_date_prev");
let nextDate = document.getElementById("my_date_next");
let today = new Date();
today = today.toISOString().slice(0, 10);
// 기본 3개월 내역 보여줄 거임.
setMyDate(3, true);
// 선택 시 일자 변경.
$(document).on('click', '#my_date_today', ()=>{ setMyDate(0, false); });
$(document).on('click', '#my_date_week', ()=>{ setMyDate(7, false); });
$(document).on('click', '#my_date_month_1', ()=>{ setMyDate(1, false); });
$(document).on('click', '#my_date_month_3', ()=>{ setMyDate(3, false); });
$(document).on('click', '#my_date_month_6', ()=>{ setMyDate(6, false); });
function setMyDate(dateChk, init){
    if(dateChk == 0){
        prevDate.value = today;
        nextDate.value = today;
    }else{
        let prevday = new Date();
        if(dateChk == 7){ prevday.setDate(prevday.getDate() - dateChk) }
        else{ prevday.setMonth(prevday.getMonth() - dateChk) }

        prevday = prevday.toISOString().slice(0, 10);
        prevDate.value = prevday;
        nextDate.value = today;
    }
    if(!init){ aJax(1); }
}
// String limit,
// let buyCode = ""; buyLink
function aJax(limit){
    let startDate = $("#my_date_prev").val();
    let endDate = $("#my_date_next").val();
    console.log("startDate : ", startDate);
    console.log("endDate : ", endDate);
    let buyBox = "";
    console.log("limit : " + limit);
    console.log("buyLink : " + buyLink);
    $.ajax({
        url: "/" + C_PATH + "/myPage/buy",
        type: "POST",
        headers: {"content-type": "application/json"},
        data: JSON.stringify({limit: limit, buyCode: buyLink, startDate: startDate, endDate: endDate}),
        success: function(data) {
            console.log("성공~");
        }, error: function() {
            Swal.fire({
                icon: "warning",
                title: "구매 내역 오류.<br> 관리자에게 문의해주세요."
            });
        }
    });
    $("#m_buy").html(buyBox);
}