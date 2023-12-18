const C_PATH = (location.pathname).split("/")[1];
$(document).ready(function(){
/////////////////////////////////
///////////// 공용 //////////////
/////////////////////////////////
    $(document).on('click', '.pw_img', function(){
        let pw = $(this).parent().children("input");
        pw.prop("type")== "text" ? pw.prop("type", "password") : pw.prop("type", "text")
        $(this).toggleClass('pw_chk');
    });

/////////////////////////////////
///////////// login /////////////
/////////////////////////////////
    $(document).on('click', '.login_rem_area>span, #login_rem', function(){
        $("#login_rem").toggleClass("login_rem_chk");
    });
});

/////////////////////////////////
///////////// join //////////////
/////////////////////////////////
// 정규 표현식
const chkId = /^[a-z]+[a-z0-9]{5,20}$/g;
const chkPw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/;
const chkName = /^[가-힣]+$/;
const chkPhone = /^[0-9]{8}/
function joinit(){
    let joinChk = true;

    if (!chkId.test($("#id").val().trim())) {
        $("#id").focus();
        joinChk = false;
        joinHint(joinChk, $("#id_chk").prev());
    }else{joinHint(true, $("#id_chk").prev());}

    if (!chkPw.test($("#pw").val())) {
        $("#pw").focus();
        joinChk = false;
        joinHint(joinChk, $("#pw_chk"));
    }else{joinHint(true, $("#pw_chk"));}

    if($("#pw").val() != $("#pw_re").val()){
        $("#pw").focus();
        joinChk = false;
        joinHint(joinChk, $("#pw_equal"));
    }else{joinHint(true, $("#pw_equal"));}

    if (!chkName.test($("#name").val())) {
        $("#name").focus();
        joinChk = false;
        joinHint(joinChk, $("#name").prev());
    }else{joinHint(true, $("#name").prev());}

    if (!chkPhone.test($("#phone").val())) {
        $("#phone").focus();
        joinChk = false;
        joinHint(joinChk, $("#phone").prev());
    }else{joinHint(true, $("#phone").prev());}

    return joinChk;
}
const joinHint = (chk, hint) => {
    chk? hint.css({display:"none"}) : hint.css({display:"block"});
}

function checkPw(){
    if($("#phone").val().length > 8){
        $("#phone").prop("value", $("#phone").val().slice(0, -1));
    }
}

/////////////////////////////////
/////// 아이디/비밀번호 찾기 /////
/////////////////////////////////
function findit(find){
    let findLink = "";
    let findData = {};
    findLink = "/login/find_"+find
    let findDesc = $(".logjoin").find("input")
    for(let i = 0; i < findDesc.length; i++){
        findData[findDesc.eq(i).prop("name")] = findDesc.eq(i).prop("value");
    }
    console.log(findData)

    $.ajax({
        type: 'POST',
        url: '/' + C_PATH + findLink,
        headers: {"content-type": "application/json"},
        data: JSON.stringify(findData),
        success: function (data) {
            if (find == "id"){
                Swal.fire({
                    title: "아이디는 "+data+"입니다. ",
                }).then(() => {
                    location.replace('/'+C_PATH+'/login/login?idTmp='+data);
                });
            }else {

            }
        },
        error: function (e) {
            Swal.fire({
                title: "일치하는 회원정보가<br>없습니다.",
            });
        }
    });
}