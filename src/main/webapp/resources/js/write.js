let uploadFiles = [];
let files = null;
function getImageFiles(e) {
    let class_cnt = document.getElementsByClassName('w_m_file_item').length;
    files = e.currentTarget.files;
    const imagePreview = document.querySelector('.w_m_file_box');

    if (uploadFiles.length + class_cnt > 5) {
        Swal.fire({
            icon: "warning",
            title: "이미지는 최대 5개 까지 업로드가 가능합니다."
        });
        return;
    }
    // 파일 갯수 검사
    if ([...files].length + class_cnt < 6) {
        [...files].forEach(file => {
            let chk = true;
            // 파일 타입 검사
            if (!file.type.match("image/.*")) {
                Swal.fire({
                    icon: "warning",
                    title: "이미지 파일만 업로드가 가능합니다."
                });
                return;
            }
            for (let i = 0; i<class_cnt; i++){
                if (file.name == $(".w_m_file_item").eq(1).children("img").data("file")){
                    Swal.fire({
                        icon: "warning",
                        title: "중복된 이미지 파일입니다. "
                    });
                    return;
                }
            }
            // 파일 중복 검사
            [...uploadFiles].forEach(upload => {
                if (upload.name == file.name){
                    Swal.fire({
                        icon: "warning",
                        title: "중복된 이미지 파일입니다. "
                    });
                    chk = false;
                    return false;
                }
                if(!chk){return;}
            });
            if(!chk){return;}

            uploadFiles.push(file);
            const reader = new FileReader();
            reader.onload = (e) => {
                const preview = createElement(e, file);
                imagePreview.appendChild(preview);
            };
            reader.readAsDataURL(file);
            if(uploadFiles.length + class_cnt >= 5){ $(".w_m_file_upload").css({display:"none"}); }
            else{$(".w_m_file_upload").css({display:"flex"});}
        });
    }else{
        Swal.fire({
            icon: "warning",
            title: "이미지는 최대 5개 까지 업로드가 가능합니다."
        });
        return;
    }
    fileControll();
}
function createElement(e, file) {
    const div = document.createElement('div');
    div.setAttribute('class', 'w_m_file_item');
    const img = document.createElement('img');
    img.setAttribute('src', e.target.result);
    img.setAttribute('data-file', file.name);
    const close = document.createElement('div');
    let closeTxt = document.createTextNode("X");
    close.appendChild(closeTxt);
    close.setAttribute('class', "w_m_close");
    div.appendChild(close);
    div.appendChild(img);
    return div;
}
const realUpload = document.querySelector('#w_m_file_input');
const upload = document.querySelector('.w_m_file_upload');
upload.addEventListener('click', () => realUpload.click());
realUpload.addEventListener('change', getImageFiles);

let cancelTxt = "";
$(document).on('click', '.w_m_close', (e)=>{
    let closeImg = e.target.parentElement.getElementsByTagName("img")[0].getAttribute("data-file");
    let upload = [];
    let cancel = document.getElementById("w_cancel");
    let cancelChk = true;
    [...uploadFiles].forEach(file => {
        file.name != closeImg ? upload.push(file) : cancelTxt += closeImg + "|";
        cancelChk = false;
    });
    if(cancelChk){ cancelTxt += closeImg + "|"; }
    uploadFiles = upload;
    fileControll();
    cancel.value = cancelTxt;
    e.target.parentElement.remove();
    $(".w_m_file_upload").css({display:"flex"});
});

function fileControll(){
    // 파일 누적 관리
    let w_input = document.querySelector('#w_input');
    if (uploadFiles.length > 0) {
        let dataTransfer = new DataTransfer();

        // 파일을 DataTransfer에 추가
        for (let i = 0; i < uploadFiles.length; i++) { dataTransfer.items.add(uploadFiles[i]); }

        // DataTransfer에서 FileList-like 객체 생성
        let uploader = dataTransfer.files;

        // 파일 입력 요소에 설정
        w_input.files = uploader;
    }
}