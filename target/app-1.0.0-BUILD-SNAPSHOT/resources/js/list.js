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
console.log("CATE_NO.get(cate) : ", CATE_NO[cate])
$(document).ready(function(){
/////////////////////////////////////
//////////// cate 값 인식 ///////////
/////////////////////////////////////
//     let cate_no = +get_url_info("cate_no");
//     let cate_name = CATE[cate_no];

/////////////////////////////////////
///// 해당 cate 아이템 가져오기 //////
/////////////////////////////////////
//     let cate_item = new Array();
//     let cate_item_img = new Array();
//     let cate_ctn = -1;
//     for(let i=0; i<ITEM_INFO.length; i++){
//         if(ITEM_INFO[i].cate == cate_name){
//             cate_item[cate_ctn+=1] = ITEM_INFO[i];
//             cate_item_img[cate_ctn] = find_item(ITEM_IMG, ITEM_INFO[i].item_code);
//         }
//     }

    // $('.sec_head').text(title_array[cate_no])
    // // sec에 아이디 넣기
    // let v_id = menu_array[cate_no];
    // $('.sec').prop('id',v_id);

/////////////////////////////////////
////////// main_banner 구성 /////////
/////////////////////////////////////
    let main_banner_item = `<a href="" class="swiper-slide">
                                <img src="" alt="">
                                <div class="item_desc_none"></div>
                                <div class="m_b_item_desc">
                                    <h4 class="desc_txt"></h4>
                                    <h1 class="desc_txt"></h1>
                                    <h4 class="desc_txt"></h4>
                                </div>
                            </a>`
    for(let i=0; i<9; i++){
        $(main_banner_item).appendTo('.swiper-wrapper');
        $('.swiper-slide').eq(i).attr('href', `/item?itemNo=${cate_item[i].item_code}`);
        $('.swiper-slide').eq(i).children('img').attr('src', `./img/item_list/${cate_item_img[i].main_src}`);
        $('.swiper-slide').eq(i).children('img').attr('alt', cate_item[i].title);
        $('.m_b_item_desc').eq(i).children('.desc_txt').eq(0).text(cate_item[i].cate.toUpperCase());
        $('.m_b_item_desc').eq(i).children('.desc_txt').eq(1).text(cate_item[i].desc);
        $('.m_b_item_desc').eq(i).children('.desc_txt').eq(2).text(cate_item[i].title);
    }

/////////////////////////////////////
///////////// m_nav 구성 ////////////
/////////////////////////////////////
    let m_nav_title = `<div class="m_nav_title">${cate.toUpperCase()}</div>`
    $(m_nav_title).appendTo('.m_nav');
    let m_nav_item = `<ul class = "m_nav_item"></ul>`
    $(m_nav_item).appendTo('.m_nav');
    let m_nav_all = `<li>전체</li>`
    $(m_nav_all).appendTo('.m_nav_item');
    for(let i=0; i<CATE_NAV[CATE_NO.get(cate)].length; i++){
        let m_nav_li = `<li>${CATE_NAV[CATE_NO.get(cate)][i]}</li>`;
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
    });

/////////////////////////////////////
/////////////// 상품정렬 /////////////
/////////////////////////////////////
    $('.m_i_cnt').text(cate_item.length.toLocaleString('ko'));

/////////////////////////////////////
///////////// m_item 구성 ///////////
/////////////////////////////////////
//     for(let i=0; i<cate_item.length; i++){
//         add_img_box($('.m_i_area'), cate_item[i].item_code, 0, i);
//     }

});