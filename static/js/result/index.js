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
    onClickSaveImage: async () => {
        const link = document.createElement('a');
        link.download = 'my_image.jpg';
        link.href = dataURL;
        link.click();
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
    onClickSaveIGPost: async (e) => {
        const links = e.currentTarget.dataset.links.split(',');
        for (const link of links) {
            await saveWithBlob(link);
        }
    },
    onClickSaveIGStory: async (e) => {
        const links = e.currentTarget.dataset.links.split(',');
        for (const link of links) {
            await saveWithBlob(link);
        }
    },
    onClickShareFB: (e) => {},
    onClickShareTwt: (e) => {},
    onClickShareWA: (e) => {},
};

document
    .querySelector('.control__button-retry')
    .addEventListener('click', event.onClickRetry);
document
    .querySelector('.control__button-save-img')
    .addEventListener('click', event.onClickSaveImage);
document
    .getElementById('cpy-link')
    .addEventListener('click', event.onClickShareCopyLink);
document
    .getElementById('sv_ig-post')
    .addEventListener('click', event.onClickSaveIGPost);
document
    .getElementById('sv_ig-story')
    .addEventListener('click', event.onClickSaveIGPost);
