import '../../css/result/index.sass';

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
        const { blob } = await fetch(
            'https://storage.googleapis.com/pwm-res/test/1/share/ig-story_java.jpg',
        );
        console.log(blob);
        const link = document.createElement('a');
        link.download = 'bali.png';
        link.href = blob;
        link.click();
        link.remove();
    },
    onClickSaveIGStory: (e) => {},
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
