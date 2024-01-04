let cateDetail = "";
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
$(document).on('click', '.sort_list li', function(){
    showItemList($(this).data("order"), $(this).data("sort"));
});

/////////////////////////////////////
///////////// m_nav 구성 ////////////
/////////////////////////////////////
let m_nav_title = `<div class="m_nav_title">${cate.toUpperCase()}</div>`
$(m_nav_title).appendTo('.m_nav');
let m_nav_item = `<ul class = "m_nav_item"></ul>`
$(m_nav_item).appendTo('.m_nav');
let m_nav_all = `<li>전체</li>`
$(m_nav_all).appendTo('.m_nav_item');
for(let i=0; i<CATE_NAV[CATE_NO[cate]].length; i++){
    let m_nav_li = `<li data-cate="${CATE_NAV[CATE_NO[cate]+1][i]}">${CATE_NAV[CATE_NO[cate]][i]}</li>`;
    $(m_nav_li).appendTo('.m_nav_item');
}

$(document).on('click', '.m_nav_item li', function(){
    $('.m_nav_item li').css({
        border: '1px solid #dfdfdf',
        background: '#f8f8f8',
        color: '#777',

    });
    $(this).css({
        border: '1px solid #000',
        background: '#000',
        color: '#fff',
    });
    cateDetail = $(this).data("cate");
    showItemList("itemRegDate", "DESC");
});

function showItemList(order, sort){
    $.ajax({
        url: "/" + C_PATH + "/list",
        type: "POST",
        headers: {"content-type": "application/json"},
        data: JSON.stringify({cate: cate, cateDetail: cateDetail, order: order, sort: sort}),
        success: function(data) {
            $(".m_i_area").html("");
            itemBox(data, ".m_i_area", "", "");
            $(".m_i_cnt").html(data.length);
        }, error: function() {
            $(".m_i_area").html(`<p class="m_none">상품이 없습니다.</p>`);
            $(".m_i_cnt").html("0");
        }
    });
}