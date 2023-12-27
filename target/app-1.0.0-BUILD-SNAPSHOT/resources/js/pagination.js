// 처음 페이지네이션 작업
function createPage(page){
    let box = "";
    for(let i = 1; i <= (page>10?10:page); i++){
        box += `<span class="page" style=${i==1?"font-weight:bold":""}>${i}</span>`;
    }
    box += page > 10 ? `<span class="nextBtn">&gt;</span>` : "";
    return box;
}

// 페이지 클릭 시 ajax
function clickPage(thisHTML, thisDiv, page, nowPage, startPage, pageCnt){
    let par = thisDiv.parent();
    par.children().css({fontWeight: "normal"});

    if (thisDiv.text() == "<") {
        let pagBox = "";
        startPage = startPage - pageCnt;
        nowPage = startPage;
        pagBox = startPage == 1 ? "" : `<span class="prevBtn">&lt;</span>`;
        for (let i = startPage; i <= startPage + 10 - 1; i++) {
            pagBox += `<span class="page">${i}</span>`;
        }
        pagBox += `<span class="nextBtn">&gt;</span>`;

        par.html(pagBox);
        par.children(".page").eq(0).css({fontWeight: "bold"});

    } else if (thisDiv.text() == ">") {
        let pagBox = "";
        startPage = startPage + pageCnt;
        nowPage = startPage;
        console.log("startPage : " + startPage)
        console.log("page : " + page)
        pagBox = `<span class="prevBtn">&lt;</span>`;
        for (let i = startPage; i <= (page - startPage > 10 ? startPage + 9 : page); i++) {
            pagBox += `<span class="page">${i}</span>`;
        }
        pagBox += page - startPage > 10 ? `<span class="nextBtn">&gt;</span>` : "";

        par.html(pagBox);
        par.children(".page").eq(0).css({fontWeight: "bold"});
    } else {
        thisDiv.css({fontWeight: "bold"});
        nowPage = Number(thisDiv.text());
    }
    let box = `<div class="my_title">${thisHTML=="review"?"리뷰":"문의"} 내역 조회</div>`;
    console.log("limit : ", (nowPage - 1)*pageCnt);
    $.ajax({
        url: "/" + C_PATH + "/myPage/" + thisHTML,
        type: "POST",
        headers: {"content-type": "application/json"},
        data: JSON.stringify((nowPage - 1)*pageCnt),
        success: function(data) {
            console.log(data);
            if (thisHTML == "review"){
                rev = data;

                box = createRev(data);
                $(".my_rev_area").html(box);
            }else if (thisHTML == "qna"){
                qna = data;

                box = createQna(data, nowPage);
                $(".m_qna_area").html(box);
            }
        }, error: function() {
            Swal.fire({
                icon: "warning",
                title: (thisHTML=="review"?"리뷰 ":"문의 ")+"내역 조회 오류.<br> 관리자에게 문의해주세요."
            });
        }
    });
}