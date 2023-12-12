const uploadFiles = [];
function getImageFiles(e) {
    const files = e.currentTarget.files;
    const imagePreview = document.querySelector('.w_m_file_box');

    if (uploadFiles.length >= 5) {
        alert('이미지는 최대 5개 까지 업로드가 가능합니다.');
        return;
    }
    // 파일 갯수 검사
    if ([...files].length < 6) {
        [...files].forEach(file => {
            let chk = true;
            // 파일 타입 검사
            if (!file.type.match("image/.*")) {
                alert('이미지 파일만 업로드가 가능합니다.');
                return;
            }
            // 파일 중복 검사
            [...uploadFiles].forEach(upload => {
                if (upload.name == file.name){
                    alert('중복된 이미지 파일입니다. ');
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
            if(uploadFiles.length == 5){ $(".w_m_file_upload").css({display:"none"}); }
            else{$(".w_m_file_upload").css({display:"flex"});}
        });
    }else{
        alert('이미지는 최대 5개 까지 업로드가 가능합니다.');
        return;
    }
}
function createElement(e, file) {
    const div = document.createElement('div');
    div.setAttribute('class', 'w_m_file_item');
    const img = document.createElement('input');
    console.log("asdfasdf");
    img.setAttribute('type', "image");
    img.setAttribute('src', e.target.result);
    img.setAttribute('data-file', file.name);
    img.setAttribute('name', "w_img");
    img.setAttribute('value', e.target.result);
    div.appendChild(img);
    return div;
}
const realUpload = document.querySelector('#w_m_file_input');
const upload = document.querySelector('.w_m_file_upload');
upload.addEventListener('click', () => realUpload.click());
realUpload.addEventListener('change', getImageFiles);