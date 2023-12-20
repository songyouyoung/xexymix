const C_PATH = (location.pathname).split("/")[1];
const C_PATH_MY = (location.pathname).split("/")[2] == "myPage";
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

/////////////////////////////////
////////// 회원 정보 수정 /////////
/////////////////////////////////
    if(C_PATH_MY){
        console.log("회원 정보 수정 들어옴");
        $("#id").prop("readonly", true);
        $("#id").val(user.userId);
        $("#name").prop("readonly", true);
        $("#name").val(user.userName);
        $("#phone").val(user.userPhone);
        $("#email").val(user.userEmail);
        $("#birth").prop("readonly", true);
        let dt = new Date(user.userBirth);
        let year = dt.getFullYear();
        let month = dt.getMonth()+1 < 10 ? "0" + (dt.getMonth()+1) : dt.getMonth()+1;
        let date = dt.getDate() < 10 ? "0" + dt.getDate() : dt.getDate();
        $("#birth").val(year+"-"+month+"-"+date);
        $(".btn_sub").val("수정하기");
    }
});

/////////////////////////////////
///////////// join //////////////
/////////////////////////////////
// 정규 표현식
const chkId = /^[a-z]+[a-z0-9]{5,20}$/g;
const chkPw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/;
const chkName = /^[가-힣]+$/;
const chkPhone = /^[0-9]{8}/
function joinit(chk){
    let joinChk = true;

    if(chk) {
        if (!chkId.test($("#id").val().trim())) {
            $("#id").focus();
            joinChk = false;
            joinHint(joinChk, $("#id_chk").prev());
        } else {
            joinHint(true, $("#id_chk").prev());
        }

        if (!chkName.test($("#name").val())) {
            $("#name").focus();
            joinChk = false;
            joinHint(joinChk, $("#name").prev());
        } else {
            joinHint(true, $("#name").prev());
        }

        if (!chkPhone.test($("#phone").val())) {
            $("#phone").focus();
            joinChk = false;
            joinHint(joinChk, $("#phone").prev());
        } else {
            joinHint(true, $("#phone").prev());
        }
    }
    if (!chkPw.test($("#pw").val())) {
        $("#pw").focus();
        joinChk = false;
        joinHint(joinChk, $("#pw_chk"));
    } else {
        joinHint(true, $("#pw_chk"));
    }

    if ($("#pw").val() != $("#pw_re").val()) {
        $("#pw").focus();
        joinChk = false;
        joinHint(joinChk, $("#pw_equal"));
    } else {
        joinHint(true, $("#pw_equal"));
    }

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
                location.replace('/'+C_PATH+'/login/change_pw');
            }
        },
        error: function (e) {
            Swal.fire({
                title: "일치하는 회원정보가<br>없습니다.",
            });
        }
    });
}