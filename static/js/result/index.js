import '../../css/result/index.sass';
import { cloneTemplate, fetchURL } from '../utils';

const saveWithBlob = async (link) => {
    const res = await fetch(link);
    const blob = await res.blob();
    const url = window.URL || window.webkitURL;
    const fileURL = url.createObjectURL(blob);
    const a = document.createElement('a');
    const fileName = link.split('/').pop();
    a.download = fileName;
    a.href = fileURL;
    a.click();
    a.remove();
};

const event = {
    onClickRetry: () => {
        window.location.href = `${window.location.href.split('/result/')[0]}`;
    },
    onClickShareCopyLink: (e) => {
        const { currentTarget } = e;
        const input = currentTarget.querySelector('.share__input');
        input.style.display = 'block';
        input.select();
        document.execCommand('copy');
        input.style.display = 'none';
        window.alert('copied link');
    },
    onClickSave: async (e) => {
        const { currentTarget } = e;
        const link = currentTarget.dataset.link;
        await saveWithBlob(link);
    },
    onShowReviewModal: () => {
        // 스크롤 없애기
        document.getElementById('Background').style.overflowY = 'hidden';
        const oldElem = document.getElementById('Modal');
        const newElem = cloneTemplate('#template-modal-review');
        newElem
            .querySelector('.review__bt--skip')
            .addEventListener('click', event.onHideReviewModal);
        newElem
            .querySelector('.review__bt--submit')
            .addEventListener('click', event.onSubmitReview);
        oldElem.replaceWith(newElem);
    },
    onHideReviewModal: () => {
        // 스크롤 허용
        document.getElementById('Background').style.overflowY = 'auto';
        const oldElem = document.getElementById('Modal');
        oldElem.innerHTML = '';
        // 링크 되돌리기
        const { host, pathname } = window.location;
        window.location.replace(`http://${host}${pathname}`);
    },
    onSubmitReview: (e) => {
        const textValue = document.querySelector('.review__txt--input').value;
        if (textValue.length < 1) return;
        fetchURL('review', {
            method: 'POST',
            body: JSON.stringify({ data: textValue }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const elem = document.querySelector('.window__review');
        elem.innerHTML = `<div class="review__div--greeting">Terima Kasih!</div>`;
        setTimeout(event.onHideReviewModal, 1500);
    },
};

document
    .querySelector('.control__button-retry')
    .addEventListener('click', event.onClickRetry);
/*
document
    .getElementById('shareLink')
    .addEventListener('click', event.onClickShareCopyLink);
*/
document
    .querySelectorAll('.save__img')
    .forEach((elem) => elem.addEventListener('click', event.onClickSave));

if (document.location.hash.includes('review')) {
    event.onShowReviewModal();
}

// 개발단계에서 사용
if (process.env.NODE_ENV == 'development') {
}
