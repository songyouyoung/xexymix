let search = "new"
/////////////////////////////////////
/////////////// 상품정렬 /////////////
/////////////////////////////////////
$(document).mouseup(function (e){
    // 외부 영역 클릭 시 정렬 닫음
    if (revMaxCnt > 0){
        document.getElementsByClassName('sort_list')[0].classList.add('sort_list_none');
    }
    $(document).on('click', '.sort', function(){
        document.getElementsByClassName('sort_list')[0].classList.toggle('sort_list_none');
    });
});

// 정렬 선택 시 재정렬
$(document).on('click', '.sort_list li', function(){
    let searchTmp = $(this).data("search");
    if (search != searchTmp){
        search = searchTmp;
        $.ajax({
            type: 'POST',
            url: '/' + C_PATH + "/item/review/select",
            headers: {"content-type": "application/json"},
            data: JSON.stringify({limit: (nowRevPage - 1)*5, itemNo: item.itemNo, search: search}),
            success: function (data) {
                nowRevPage = 1;
                startRevPage = 1;
                review = data;
                $(".m_rev_area").html(createRev(data, "item"));
                let revBox = "";
                for(let i = 1; i <= (revPage>10?10:revPage); i++){
                    revBox += `<span class="page" style=${i==1?"font-weight:bold":""}>${i}</span>`;
                }
                revBox += revPage > 10 ? `<span class="nextBtn">&gt;</span>` : "";
                $(".pagination").html(revBox);
            }, error: function (e) {
                Swal.fire({
                    title: "페이지 조회 ERROR. \n 관리자에게 문의해주세요.",
                });
            }
        });
    }
});

// 리뷰 페이지네이션
let revPage = Math.ceil(revMaxCnt / 5); // 총 페이지 개수
let nowRevPage = 1; // 현재 페이지
let startRevPage = 1; // 시작 페이지
// 문의 페이지네이션
let qnaPage = Math.ceil(qnaMaxCnt / 10); // 총 페이지 개수
let nowQnaPage = 1; // 현재 페이지
let startQnaPage = 1; // 시작 페이지

//////////////////////////////////////
///////// 페이지네이션 선택 ///////////
/////////////////////////////////////
$(document).on('click', '.pagination>span', function() {
    let pageCnt = 0;
    let maxCnt = 0;
    let startPg = 0;
    let nowpg = 0;

    let par = $(this).parent();
    par.children().css({fontWeight: "normal"});
    if (par.parent().prop("id") == "m_qna") {
        pageCnt = 10;
        maxCnt = qnaPage;
        startPg = startQnaPage;
        nowpg = nowQnaPage;
    } else if (par.parent().prop("id") == "m_review") {
        pageCnt = 5;
        maxCnt = revPage;
        startPg = startRevPage;
        nowpg = nowRevPage;
    }

    if ($(this).text() == "<") {
        let pagHtml = "";
        startPg = startPg - pageCnt;
        nowpg = startPg;
        pagHtml = startPg == 1 ? "" : `<span class="prevBtn">&lt;</span>`;
        for (let i = startPg; i <= startPg + 10 - 1; i++) {
            pagHtml += `<span class="page">${i}</span>`;
        }
        pagHtml += `<span class="nextBtn">&gt;</span>`;

        par.html(pagHtml);
        par.children(".page").eq(0).css({fontWeight: "bold"});

    } else if ($(this).text() == ">") {
        let pagHtml = "";
        startPg = startPg + pageCnt;
        nowpg = startPg;
        console.log("startPg : " + startPg)
        console.log("pageCnt : " + pageCnt)
        console.log("maxCnt : " + maxCnt)
        pagHtml = `<span class="prevBtn">&lt;</span>`;
        for (let i = startPg; i <= (maxCnt - startPg > 10 ? startPg + 9 : maxCnt); i++) {
            pagHtml += `<span class="page">${i}</span>`;
        }
        pagHtml += maxCnt - startPg > 10 ? `<span class="nextBtn">&gt;</span>` : "";

        par.html(pagHtml);
        par.children(".page").eq(0).css({fontWeight: "bold"});
    } else {
        $(this).css({fontWeight: "bold"});
        nowpg = Number($(this).text());
    }
    let ajaxLink;
    let jsonData = {};
    if (par.parent().prop("id") == "m_qna") {
        startQnaPage = startPg;
        nowQnaPage = nowpg;
        ajaxLink = "/item/qna/select";
        jsonData = {limit: (nowpg - 1)*pageCnt, itemNo: item.itemNo};
    } else if (par.parent().prop("id") == "m_review") {
        startRevPage = startPg;
        nowRevPage = nowpg;
        ajaxLink = "/item/review/select";
        jsonData = {limit: (nowpg - 1)*pageCnt, itemNo: item.itemNo, search: search};
    }
    $.ajax({
        type: 'POST',
        url: '/' + C_PATH + ajaxLink,
        headers: {"content-type": "application/json"},
        data: JSON.stringify(jsonData),
        success: function (data) {
            if (par.parent().prop("id") == "m_qna") {
                qna = data;
                $(".m_qna_area").html(createQna(data, nowQnaPage, "item"));
            } else if (par.parent().prop("id") == "m_review") {
                review = data;
                $(".m_rev_area").html(createRev(data, "item"));
            }
        }, error: function (e) {
            Swal.fire({
                title: "페이지 조회 ERROR. \n 관리자에게 문의해주세요.",
            });
        }
    });
});

$(document).ready(function(){
    let orderPrice;
    if(item.evPer != null && item.evPer > 0){
        orderPrice = Math.ceil(item.itemPrice / 100 * (100 - item.evPer));
    }else{ orderPrice = item.itemPrice; }

/////////////////////////////////////
///// item info box정보 불러오기 /////
/////////////////////////////////////
    $(".item_info_box").append(infoBox(item));
    
/////////////////////////////////////
////////// 사이즈 옵션 추가 //////////
/////////////////////////////////////    
//     function getSize(item){
//         let xxl = `<option value="XXL">XXL</option>`;
//         let xxxl = `<option value="XXXL">XXXL</option>`;
//         if(item == 1){
//             $('#size').append(xxl);
//         }else if(item == 2){
//             $('#size').append(xxl);
//             $('#size').append(xxxl);
//         }
//     }

//////////////////////////////////////
/////////// 상품 후기 출력 ////////////
/////////////////////////////////////
    let revBox = "";
    if(item.revCnt == 0){
        revBox = `<p class="m_none">아직 작성한 리뷰가 없습니다.</p>`;
    }else{
        // 베스트 리뷰
        if (reviewBest.length > 0){
            revBox += `<div class="m_rev_best_title">베스트 리뷰</div>
                    <div class="m_rev_best_area">`
            reviewBest.forEach((revBest)=>{
                let dt = new Date(revBest.revRegDate);
                let year = dt.getFullYear();
                let month = dt.getMonth()+1 < 10 ? "0" + (dt.getMonth()+1) : dt.getMonth()+1;
                let date = dt.getDate() < 10 ? "0" + dt.getDate() : dt.getDate();
                let revImg = revBest.revFile == null?"":(revBest.revFile.slice(0, -1)).split("|");
                let revImgBox = "";
                revImg == ""? "": revImgBox += `<img src="img/review/${revImg[0]}" alt="리뷰이미지">`;

                revBox += `<div class="m_rev_best_item">
                                <div class="m_rev_best_img">${revImgBox}</div>
                                <div class="m_rev_best_desc">
                                    <div class="m_rev_best_txt">
                                        ${revBest.revTxt}
                                    </div>
                                    <div class="m_rev_best_name">
                                        ${(revBest.userName).slice(0, 1)+"**"}
                                    </div>
                                    <div class="m_rev_best_regDate">${year}.${month}.${date}</div>
                                </div>
                            </div>`;
            });
        }
        //리뷰 차트 & 리뷰 정렬
        revBox += `</div>
                    <div class="m_rev_avr_area">
                        <div class="m_rev_avr_item">
                            ★${(((5*revChart.chart5) + (4*revChart.chart4) + (3*revChart.chart3) + (2*revChart.chart2) + (1*revChart.chart1)) / (revChart.chart5 + revChart.chart4 + revChart.chart3 + revChart.chart2 + revChart.chart1)).toFixed(1)}
                        </div>
                        <div class="m_rev_avr_chart">
                            <canvas id="losTop5Chart"></canvas>
                        </div>
                    </div>
                    <div class="m_rev_sort">
                        <div class="sort">리뷰정렬
                            <ul class="sort_list sort_list_none" style="width: 70px">
                                <li data-search="new">최신순</li>
<!--                                <li data-search="best">인기순</li>-->
                                <li data-search="likeDesc">높은 별점순</li>
                                <li data-search="likeAsc">낮은 별점순</li>
                            </ul>
                        </div>
                    </div>
                    <div class="m_rev_area">`;
        // 전체 리뷰
        revBox += createRev(review, "item");
        revBox += `</div>`;
        // 페이지네이션
        revBox += `<div class="pagination">`;
        for(let i = 1; i <= (revPage>10?10:revPage); i++){
            revBox += `<span class="page" style=${i==1?"font-weight:bold":""}>${i}</span>`;
        }
        revBox += revPage > 10 ? `<span class="nextBtn">&gt;</span>` : "";
        revBox += `</div>`;

        //차트
        $(function(){
            dslosChart.init();
        });
    }
    $("#m_review").append(revBox);

    // 차트
    const dslosChart = {
        losChart: null,
        chartData: {
            labels: ["★5", "★4", "★3", "★2", "★1"],
            datasets: [{
                data: [revChart.chart5, revChart.chart4, revChart.chart3, revChart.chart2, revChart.chart1],
                backgroundColor: '#111',
                borderSkipped: false,
                barThickness: 20,
                borderRadius: [{topLeft: 20, topRight: 20, bottomLeft: 20, bottomRight: 20},],
            }]
        },
        init: function () {
            dslosChart.initChart();
        },
        initChart: function () {
            dslosChart.losChart = new Chart($('#losTop5Chart'), {type: 'bar',});
            dslosChart.getLosChart();
        },
        getLosChart: function () {
            dslosChart.losChart.data = dslosChart.chartData;
            dslosChart.losChart.options.plugins.datalabels = {display: false};
            dslosChart.losChart.options = {
                indexAxis: 'y',
                scales: {
                    x: {stacked: true, display: false,},
                    y: {stacked: true,},
                },
                plugins: {legend: {display: false},},
            }
            dslosChart.losChart.update();
        },
    }

/////////////////////////////////////
///////////// 문의 출력 //////////////
/////////////////////////////////////
    let qnaBox = "";
    if(qna.length == 0){
        qnaBox = `<p class="m_none">아직 작성한 문의가 없습니다.</p>`;
    }else{
        qnaBox += `<table class="m_qna_area">`;
        qnaBox += createQna(qna, nowQnaPage, "item");
        qnaBox += `</table>`;

        // 페이지네이션
        qnaBox += `<div class="pagination">`;
        for(let i = 1; i <= (qnaPage>10?10:qnaPage); i++){
            qnaBox += `<span class="page" style=${i==1?"font-weight:bold":""}>${i}</span>`;
        }
        qnaBox += qnaPage > 10 ? `<span class="nextBtn">&gt;</span>` : "";
        qnaBox += `</div>`;
    }
    $("#m_qna").append(qnaBox);
    $("#m_qna").children(".pagination .page").eq(0).css({fontWeight: "bold"});

    //문의하기 선택
    $(document).on('click', '.m_qna_add', function(){
        if (userNo == ""){
            Swal.fire({
                icon: "warning",
                title: "로그인이 필요한 서비스입니다. "
            }).then(()=>{
                location.href = "/" + C_PATH + "/login/login?prevPage="+location.pathname+"&itemNo="+item.itemNo;
            });
        }else {
            $.ajax({
                url: "/" + C_PATH + "/item/qna/detail",
                type: "GET",
                success: function (data) {
                    $("#wrap").append(data);
                    $("#qnaForm").prop("action", `/${C_PATH}/item/qna/insert?itemNo=${item.itemNo}`);
                    $(".w_h>img").prop("src", `/${C_PATH}/img/item_list/${item.itemImg}`);
                    $(".w_h_title").prop("value", `${item.itemName}`);
                    $(".qnaRemove").css({display: "none"});
                }, error: function () {
                    Swal.fire({
                        icon: "warning",
                        title: "문의 작성 오류.<br> 관리자에게 문의해주세요."
                    });
                }
            });
        }
    });

/////////////////////////////////////
///////////// 상품 선택 //////////////
/////////////////////////////////////
    let item_order = Array.from(Array($('#size').children().length-1), () => new Array(2).fill(""));
    $(document).on('click', '#size', function(){
        let item_no = 0;
        let size_val = $('#size').val();
        if(size_val != ""){
            $('#size').val('').attr('selected', true);
            for(item_no=0; item_no<item_order.length; item_no++){
                if(item_order[item_no][0] == size_val){
                    item_order[item_no][1] += 1;
                    $('.order_cnt').eq(item_no).text(item_order[item_no][1]);
                    $('.order_price').eq(item_no).text((orderPrice * item_order[item_no][1]).toLocaleString('ko'));
                    break;
                }else if(item_order[item_no][0] == ""){
                    item_order[item_no][0] = size_val;
                    item_order[item_no][1] = 1;
                    let order_item = `<div class="order_item"></div>`;
                    $('.order_item_box').append(order_item);
                    let order_size = `<div class="order_size">${size_val}</div>`;
                    $('.order_item').eq(item_no).append(order_size);
                    let order_cnt = `<div class="order_cnt_box">
                                        <div class="order_minus"></div>
                                        <div class="order_cnt">1</div>
                                        <div class="order_plus"></div>
                                    </div>`;
                    $('.order_item').eq(item_no).append(order_cnt);
                    let orderBox = `<div class="order_price">${orderPrice.toLocaleString('ko')}</div>`;
                    $('.order_item').eq(item_no).append(orderBox);
                    let order_del = `<div class="order_del"></div>`;
                    $('.order_item').eq(item_no).append(order_del);
                    break;
                }
            }
        }
        getPriceTotal();
    });
    $(document).on('click', '.order_minus', function(){
        let item_no = $(this).parent().parent().index();
        if(item_order[item_no][1] > 1){
            item_order[item_no][1] -= 1;
            $('.order_cnt').eq(item_no).text(item_order[item_no][1]);
            $('.order_price').eq(item_no).text((orderPrice * item_order[item_no][1]).toLocaleString('ko'));
            getPriceTotal();
        }else{
            Swal.fire({
                icon: "warning",
                title: "최소구매 수량은 1개 입니다."
            });
        }
    });
    $(document).on('click', '.order_plus', function(){
        let item_no = $(this).parent().parent().index();
        item_order[item_no][1] += 1;
        $('.order_cnt').eq(item_no).text(item_order[item_no][1]);
        $('.order_price').eq(item_no).text((orderPrice * item_order[item_no][1]).toLocaleString('ko'));
        getPriceTotal();
    });
    $(document).on('click', '.order_del', function(){
        let item_no = $(this).parent().index();
        for(let i=item_no; i<item_order.length - 1; i++){
            item_order[i][0] = item_order[i+1][0];
            item_order[i][1] = item_order[i+1][1];
        }
        item_order[item_order.length - 1][0] = "";
        item_order[item_order.length - 1][1] = "";
        $(this).parent().remove();
        getPriceTotal();
    });

    function getPriceTotal(){
        let price_total = 0;
        for(let i=0; i<$('.order_price').length; i++){
            price_total += +$('.order_price').eq(i).text().replace(',', '');
        }
        $('.price_total > span').text(price_total.toLocaleString('ko'));
    }
    
/////////////////////////////////////
////////// 내부 스크롤 이동 //////////
/////////////////////////////////////
    let scrollChk = true; // 내부 스크롤 이동과 스크롤 border 변경 충돌 방지
    $('.m_nav a').click(function(){
        scrollChk = false;
        $('.m_nav > div').removeClass('m_nav_after');
        $(this).parent().addClass('m_nav_after');

        event.preventDefault();
        let href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top - 80 -57
        }, 1000);
        setTimeout(function(){
            scrollChk = true;
        }, 1010);
    });

///////////////////////////////////////////////
/////////// 스크롤 - 메뉴바 상단 고정 ///////////
////////// 스크롤 - 메뉴바 border 변경 //////////
///////////////////////////////////////////////
    let nav_bot = $('.m_nav').offset().top;
    // let nav_review = $('#m_review > .m_item_title').offset().top;
    let nav_detail = $('#m_detail > .m_item_title').offset().top;
    let nav_post = $('#m_post > .m_item_title').offset().top;
    let nav_qna = $('#m_qna > .m_item_title').offset().top;
    $(window).scroll(function(){
        // 메뉴바 상단 고정
        if($(window).scrollTop() >= nav_bot - 1) {
            $('.m_nav').addClass('m_nav_fixed');
        }else{
            $('.m_nav').removeClass('m_nav_fixed');
        }

        // 메뉴바 border 변경
        if(scrollChk){
            $('.m_nav > div').removeClass('m_nav_after');
            if($(window).scrollTop() >= nav_qna - 1){
                $("a[href='#m_qna']").parent().addClass('m_nav_after');
            }else if($(window).scrollTop() >= nav_post - 1){
                $("a[href='#m_post']").parent().addClass('m_nav_after');
            }else if($(window).scrollTop() >= nav_detail - 1){
                $("a[href='#m_detail']").parent().addClass('m_nav_after');
            }else{
                $("a[href='#m_review']").parent().addClass('m_nav_after');
            }
        }
    });
});

let buyPar;
let buyCnt;
// 구매 / 장바구니 체크
const buyCartChk = (buyCart)=>{
    buyPar = $(".order_item_box");
    buyCnt = buyPar.children().length;
    if (userNo == ""){
        Swal.fire({
            icon: "warning",
            title: "로그인이 필요한 서비스입니다. "
        }).then(()=>{
            location.href = "/" + C_PATH + "/login/login?prevPage="+location.pathname+"&itemNo="+item.itemNo;
        });
    }else if(buyCnt == 0){
        Swal.fire({
            icon: "warning",
            title: "상품이 선택되지 않았습니다. "
        });
    }else {
        let buyLink = buyCart =="cart"?"/item/cart":"/item/buy";
        let buyTxt = buyCart =="cart"?"장바구니에 추가됐습니다.<br>장바구니 페이지로 가시겠습니까?"
                                            :"구매해주셔서 감사합니다.<br>마이페이지로 가시겠습니까?";
        let buyPage = buyCart == "cart"?"/cart" : "/myPage";
        let buyErrorTxt = buyCart =="cart"?"장바구니":"구매";
        let buyItem = [];
        for (let i = 0; i < buyCnt; i++){
            if(buyCart == "cart"){
                buyItem.push({itemNo: item.itemNo, cartCnt: buyPar.find(".order_cnt").eq(i).text(), cartOpt: buyPar.find(".order_size").eq(i).text()});
            }else{
                buyItem.push({itemNo: item.itemNo, buyCnt: buyPar.find(".order_cnt").eq(i).text(), buyOpt: buyPar.find(".order_size").eq(i).text(), buyCode: "buy", itemPrice:buyPar.find(".order_price").eq(i).text().replaceAll(",", "")});            }
        }
        $.ajax({
            type: 'POST',
            url: '/' + C_PATH + buyLink,
            headers: {"content-type": "application/json"},
            data: JSON.stringify(buyItem),
            success: function (data) {
                Swal.fire({
                    icon: "success",
                    title: buyTxt,
                    showCancelButton: true,
                    confirmButtonColor: "#2778c4",
                    cancelButtonColor: "#BEBCBA",
                    confirmButtonText: '확인',
                    cancelButtonText: '취소',
                    reverseButtons: false,
                }).then(result => {
                    if (!result.isConfirmed) { location.reload(); }
                    else { location.replace('/'+C_PATH+buyPage);
                    }
                });
            }, error: function (e) {
                Swal.fire({
                    icon: "warning",
                    title: buyErrorTxt+" ERROR. \n 관리자에게 문의해주세요."
                });
            }
        });
    }

}
// 구매하기
const buyit = ()=>{ buyCartChk("buy"); }
// 장바구니
const cartit = ()=>{ buyCartChk("cart"); }

$(document).on('click', '.m_rev_update', function(){
    updateRev(review[($(this).parent().parent().parent()).index()], true);
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
        deleteRev(review[($(this).parent().parent().parent()).index()]);
    })
});