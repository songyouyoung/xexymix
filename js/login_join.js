$(document).ready(function(){
/////////////////////////////////
///////////// 공용 //////////////
/////////////////////////////////
    $(document).on('click', '.pw_img', function(){
        console.log($("#pw").prop("type"))
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
///////////// join //////////////
/////////////////////////////////
    // 정규 표현식
    const chkId = /^[a-z0-9]{5, 20}/;
    const chkPw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/;
    const chkName = /^[가-힣]+$/;
    // const chkEmail = /^[A-Za-z-0-9\-\.]+@[A-Ja-z-0-9\-\.]+\.[A-Ja-z-0-9]+$/;
    let joinChk = true;
    function sendit(){
        if (!chkId.test($("#id").val())) {
            $("#id").focus();
            joinChk = false;
            return false;
        }
    }
});