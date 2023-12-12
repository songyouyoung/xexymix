/////////////////////////////////////
/////////////// 상품정렬 /////////////
/////////////////////////////////////
$(document).mouseup(function (e){
    // 외부 영역 클릭 시 정렬 닫음
    document.getElementsByClassName('sort_list')[0].classList.add('sort_list_none');
    $(document).on('click', '.sort', function(){
        document.getElementsByClassName('sort_list')[0].classList.toggle('sort_list_none');
    });
});

/////////////////////////////////////
////////////// 문의 선택 /////////////
/////////////////////////////////////
let qnaUpdateChk = false;
$(document).on('click', '.m_qna_area td', function(){
    let thisQna = qna[($(this).parent()).index() - 1];
    // if(userNo == ""){
    //     Swal.fire({
    //         icon: "warning",
    //         title: "로그인이 필요한 서비스입니다. "
    //     }).then(()=>{
    //         location.href = "/" + C_PATH + "/login?prevPage="+location.pathname+"?itemNo="+itemNo;
    //     });
    // }else if (thisQna.userNo == userNo && qnaWrapChk){
            console.log("index", ($(this).parent()).index());
            console.log(thisQna);
            let jspPageURL = "/" + C_PATH + "/read/qna";
            $.ajax({
                url: jspPageURL,
                type: "GET",
                success: function(data) {
                    $("#wrap").append(data);
                    $(".w_h>img").prop("src", `/${C_PATH}/img/item_list/${item.itemImg}`);
                    $(".w_h_title").html(`${item.itemName}`);
                    $("#qnaTxt").prop("readonly", true);
                    $("#qnaTxt").prop("value", `${thisQna.qnaTxt}`);
                    $(".w_m_file_upload").css({display:"none"});
                    let qnaImg = thisQna.qnaFile == null?"":(thisQna.qnaFile).split("|");
                    let qnaImgBox = "";
                    qnaImg == ""? "" : qnaImg.forEach((img)=>{
                        qnaImgBox += `<div class="w_m_file_item"><img src="/img/qna/${img}" alt="문의 이미지"></div>`;
                    });
                    $(".w_m_file_box").append(qnaImgBox);
                    $("button[type='submit']").css({display:"none"});
                    $(".w_f").append("<button type=\"button\" class='qnaUpdate'>수정하기</button>")
                    $(".w_f").append("<button type=\"button\" class='qnaCencel'>닫기</button>")
                    $(".w_f>button").css({width:"calc((100% - 10px) / 2"})
                    $(".qnaCencel").css({
                        marginLeft: "10px",
                        backgroundColor: "#e6e6e6",
                        color: "#111"
                    })
                },
                error: function() {
                    console.error("Failed to load JSP content.");
                }
            });
        // });
    // }else{
    // }
});
// 문의 닫기
$(document).on('click', '.w_h_close', function(){ (document.getElementById("qnaWrap")).remove(); });
$(document).on('click', '.qnaCencel', function(){ (document.getElementById("qnaWrap")).remove(); });
//문의 수정하기
$(document).on('click', '.qnaUpdate', function(){
    if(!qnaUpdateChk) {
        $("#qnaTxt").prop("readonly", false);
        $("#qnaTxt").focus();
        qnaUpdateChk = true;
    }else{
        // 수정하기 ajax
    }
});


$(document).ready(function(){
// 리뷰 페이지네이션
    let revPage = (revMaxCnt / 5) + 1; // 총 페이지 개수
    let nowRevPage = 1; // 현재 페이지
    let startRevNo = 0; // 시작 글 번호
    let endRevNo = 4; // 끝 글 번호
// 문의 페이지네이션
    let qnaPage = (qnaMaxCnt / 10) + 1; // 총 페이지 개수
    let nowQnaPage = 1; // 현재 페이지
    let startQnaNo = 0; // 시작 글 번호
    let endQnaNo = 4; // 끝 글 번호

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
    function getSize(item){
        let xxl = `<option value="XXL">XXL</option>`;
        let xxxl = `<option value="XXXL">XXXL</option>`;
        if(item == 1){
            $('#size').append(xxl);
        }else if(item == 2){
            $('#size').append(xxl);
            $('#size').append(xxxl);
        }
    }

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
                let revImg = revBest.revFile == null?"":(revBest.revFile).split("|");
                let revImgBox = "";
                console.log("img", revImg[0]);
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
                                <li>최신순</li>
                                <li>인기순</li>
                                <li>높은 별점순</li>
                                <li>낮은 별점순</li>
                            </ul>
                        </div>
                    </div>
                    <div class="m_rev_area">`;

        // 전체 리뷰
        review.forEach((rev)=>{
            let dt = new Date(rev.revRegDate);
            let year = dt.getFullYear();
            let month = dt.getMonth()+1 < 10 ? "0" + (dt.getMonth()+1) : dt.getMonth()+1;
            let date = dt.getDate() < 10 ? "0" + dt.getDate() : dt.getDate();
            let revImg = rev.revFile == null?"":(rev.revFile).split("|");
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
                            <div class="m_rev_title">
                                <div class="m_rev_name">${(rev.userName).slice(0, 1)+"**"}</div>
                                <div class="m_rev_right">
                                    <div class="m_rev_regDate">${year}.${month}.${date}</div>
                                    ${revUD}
                                </div>
                            </div>
                            <div class="m_rev_score">${"★".repeat(rev.revScore) + "☆".repeat(5-rev.revScore)}</div>
                            <div class="m_rev_txt">${rev.revTxt}</div>
                            <div class="m_rev_img">${revImgBox}</div>
                        </div>`;
        });

        // 페이지네이션
        revBox += `<div class="pagination">`;
        for(let i = 1; i <= revPage; i++){
            revBox += `<span class="page">${i}</span>`;
        }
        revBox += revPage > 10 ? `<span class="nextBtn">&gt;</span>` : "";
        revBox += `</div>
                </div>`;

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
    console.log("qna크기", qna.length);
    if(qna.length == 0){
        qnaBox = `<p class="m_none">아직 작성한 리뷰가 없습니다.</p>`;
    }else{
        qnaBox += `<table class="m_qna_area">
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>작성일</th>
                        </tr>`;
        // 전체 문의
        let i = 1;
        qna.forEach((qna)=>{
            let dt = new Date(qna.qnaRegDate);
            let year = dt.getFullYear();
            let month = dt.getMonth()+1 < 10 ? "0" + (dt.getMonth()+1) : dt.getMonth()+1;
            let date = dt.getDate() < 10 ? "0" + dt.getDate() : dt.getDate();
            qnaBox += `<tr>
                            <td class="qnaNo">${i++}</td>
                            <td>상품관련 문의 드립니다</td>
                            <td>${(qna.userName).slice(0, 1)+"**"}</td>
                            <td>${year}.${month}.${date}</td>
                        </tr>`;
        });
        qnaBox += `</table>`;

        // 페이지네이션
        qnaBox += `<div class="pagination">`;
        for(let i = 1; i <= qnaPage; i++){
            qnaBox += `<span class="page">${i}</span>`;
        }
        qnaBox += qnaPage > 10 ? `<span class="nextBtn">&gt;</span>` : "";
        qnaBox += `</div>`;

        //차트
        $(function(){
            dslosChart.init();
        });
    }
    $("#m_qna").append(qnaBox);

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
            alert("해당 상품은 최소구매 수량이 1개 입니다.");
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
////////// 리뷰 페이지 선택 ///////////
/////////////////////////////////////
    
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