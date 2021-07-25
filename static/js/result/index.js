import '../../css/result/index.sass';

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
        const input = currentTarget.querySelector('#cpy-link-input');
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
};

document
    .querySelector('.control__button-retry')
    .addEventListener('click', event.onClickRetry);
document
    .getElementById('cpy-link')
    .addEventListener('click', event.onClickShareCopyLink);
document
    .querySelectorAll('.save__img')
    .forEach((elem) => elem.addEventListener('click', event.onClickSave));
