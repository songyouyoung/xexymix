///////////////////////////////////////////////
///////////// my_date 날짜 설정하기 ////////////
///////////////////////////////////////////////
let prevDate = document.getElementById("my_date_prev");
let nextDate = document.getElementById("my_date_next");
let today = new Date();
today = today.toISOString().slice(0, 10);
$(document).on('click', '#my_date_today', ()=>{ setMyDate(0); });
$(document).on('click', '#my_date_week', ()=>{ setMyDate(7); });
$(document).on('click', '#my_date_month_1', ()=>{ setMyDate(1); });
$(document).on('click', '#my_date_month_3', ()=>{ setMyDate(3); });
$(document).on('click', '#my_date_month_6', ()=>{ setMyDate(6); });
const setMyDate =(dateChk)=>{
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
}
$(document).ready(function(){
});