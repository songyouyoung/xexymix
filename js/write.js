const uploadFiles = [];
function getImageFiles(e) {
    const files = e.currentTarget.files;
    const imagePreview = document.querySelector('.w_m_file_box');

    if (uploadFiles.length >= 5) {
        alert('이미지는 최대 5개 까지 업로드가 가능합니다.');
        return;
    }

    // 파일 타입 검사
    [...files].forEach(file => {
        if (!file.type.match("image/.*")) {
            alert('이미지 파일만 업로드가 가능합니다.');
            return
        }

        uploadFiles.push(file);
        const reader = new FileReader();
        reader.onload = (e) => {
            const preview = createElement(e, file);
            imagePreview.appendChild(preview);
        };
        reader.readAsDataURL(file);
        if(uploadFiles.length == 5){ $(".w_m_file_upload").css({display:"none"}); }
        else{$(".w_m_file_upload").css({display:"block"});}
    });
}

function createElement(e, file) {
    const img = document.createElement('img');
    img.setAttribute('src', e.target.result);
    img.setAttribute('data-file', file.name);
    return img;
}

const realUpload = document.querySelector('#w_m_file_input');
const upload = document.querySelector('.w_m_file_upload');

upload.addEventListener('click', () => realUpload.click());

realUpload.addEventListener('change', getImageFiles);