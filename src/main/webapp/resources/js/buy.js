/////////////////////////////////////
///////////// 구매 출력 //////////////
/////////////////////////////////////
let buyBox = "";
//페이지네이션
let buyPage = Math.ceil(buyMaxCnt / 3); // 총 페이지 개수
let nowBuyPage = 1; // 현재 페이지
let startBuyPage = 1; // 시작 페이지
if(buy.length == 0){
    buyBox = `<p class="m_none">주문한 상품이 없습니다.</p>`;
}else{
    buyBox = createBuy(buy);
    // 페이지네이션
    let pageBox = "";
    for(let i = 1; i <= (buyPage>10?10:buyPage); i++){
        pageBox += `<span class="page" style=${i==1?"font-weight:bold":""}>${i}</span>`;
    }
    pageBox += buyPage > 10 ? `<span class="nextBtn">&gt;</span>` : "";
    $(".pagination").html(pageBox);
}
$("#m_buy").append(buyBox);
buyCnt();

function buyCnt(){
    for(let i = 0; i < buy.length; i++) {
        buyBox = `<div class="my_buy_cnt">${buy[i].buyCnt}</div>
            <div class="my_buy_price">${buy[i].itemPrice}</div>`;
        let prevDiv = document.querySelectorAll('.my_buy_desc')[i+1];
        prevDiv.insertAdjacentHTML('afterend', buyBox);
    }
}
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
today = createDate(today, "-");
// 기본 3개월 내역 보여줄 거임.
setMyDate(3, true);
// 선택 시 일자 변경.
$(document).on('click', '#my_date_today', ()=>{ setMyDate(0, false); });
$(document).on('click', '#my_date_week', ()=>{ setMyDate(7, false); });
$(document).on('click', '#my_date_month_1', ()=>{ setMyDate(1, false); });
$(document).on('click', '#my_date_month_3', ()=>{ setMyDate(3, false); });
$(document).on('click', '#my_date_month_6', ()=>{ setMyDate(6, false); });
$(document).on('click', '#my_date_submit', ()=>{ aJax(0, true); });

function setMyDate(dateChk, init){
    if(dateChk == 0){
        prevDate.value = today;
        nextDate.value = today;
    }else{
        let prevday = new Date();
        if(dateChk == 7){ prevday.setDate(prevday.getDate() - dateChk) }
        else{ prevday.setMonth(prevday.getMonth() - dateChk) }

        prevday = createDate(prevday, "-");
        prevDate.value = prevday;
        nextDate.value = today;
    }
    if(!init){ aJax(0, true); }
}

//////////////////////////////////////
///////// 페이지네이션 선택 ///////////
/////////////////////////////////////
$(document).on('click', '.pagination>span', function() {
    let par = $(this).parent();
    par.children().css({fontWeight: "normal"});

    if ($(this).text() == "<") {
        let pagBox = "";
        startBuyPage = startBuyPage - 3;
        nowBuyPage = startBuyPage;
        pagBox = startBuyPage == 1 ? "" : `<span class="prevBtn">&lt;</span>`;
        for (let i = startBuyPage; i <= startBuyPage + 10 - 1; i++) {
            pagBox += `<span class="page">${i}</span>`;
        }
        pagBox += `<span class="nextBtn">&gt;</span>`;

        par.html(pagBox);
        par.children(".page").eq(0).css({fontWeight: "bold"});

    } else if ($(this).text() == ">") {
        let pagBox = "";
        startBuyPage = startBuyPage + 3;
        nowBuyPage = startBuyPage;
        console.log("startBuyPage : " + startBuyPage)
        console.log("buyPage : " + buyPage)
        pagBox = `<span class="prevBtn">&lt;</span>`;
        for (let i = startBuyPage; i <= (buyPage - startBuyPage > 10 ? startBuyPage + 9 : buyPage); i++) {
            pagBox += `<span class="page">${i}</span>`;
        }
        pagBox += buyPage - startBuyPage > 10 ? `<span class="nextBtn">&gt;</span>` : "";

        par.html(pagBox);
        par.children(".page").eq(0).css({fontWeight: "bold"});
    } else {
        $(this).css({fontWeight: "bold"});
        nowBuyPage = Number($(this).text());
    }

    aJax((nowBuyPage - 1)*3, false);
});

function aJax(limit, pagChk){
    let startDate = $("#my_date_prev").val();
    let endDate = $("#my_date_next").val();
    let buyBox = "";
    $.ajax({
        url: "/" + C_PATH + "/myPage/buy",
        type: "POST",
        headers: {"content-type": "application/json"},
        data: JSON.stringify({limit: limit, buyCode: buyLink, startDate: startDate, endDate: endDate}),
        success: function(data) {
            buy = data.buy;
            buyMaxCnt = data.buyMaxCnt;

            console.log(data.buy);
            if(data.buy.length == 0){
                buyBox = `<p class="m_none">주문한 상품이 없습니다.</p>`;
            }else{
                buyPage = Math.ceil(data.buyMaxCnt / 3); // 총 페이지 개수
                buyBox = createBuy(data.buy);
                // 페이지네이션
                if (pagChk) {
                    let pagBox = "";
                    for (let i = 1; i <= (buyPage > 10 ? 10 : buyPage); i++) {
                        pagBox += `<span class="page" style=${i == 1 ? "font-weight:bold" : ""}>${i}</span>`;
                    }
                    pagBox += buyPage > 10 ? `<span class="nextBtn">&gt;</span>` : "";
                    $(".pagination").html(pagBox);
                }
            }
            $("#m_buy").html(buyBox);
            buyCnt();
        }, error: function() {
            buyBox = `<p class="m_none">주문한 상품이 없습니다.</p>`;
            Swal.fire({
                icon: "warning",
                title: "구매 내역 오류.<br> 관리자에게 문의해주세요."
            });
            $("#m_buy").html(buyBox);
        }
    });
}

function createDate(dt, mark){
    let year = dt.getFullYear();
    let month = dt.getMonth()+1 < 10 ? "0" + (dt.getMonth()+1) : dt.getMonth()+1;
    let date = dt.getDate() < 10 ? "0" + dt.getDate() : dt.getDate();

    return year + mark + month + mark + date;
}

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