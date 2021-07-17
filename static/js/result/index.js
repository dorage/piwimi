import '../../css/result/index.sass';
import dtoi from 'dom-to-image';

const event = {
    onClickRetry: () => {
        window.location.href = `${window.location.href.split('/result/')[0]}`;
    },
    onClickSaveImage: async () => {
        const dataURL = await dtoi.toJpeg(
            document.getElementsByClassName('.body'),
            { quality: 1 },
        );
        const link = document.createElement('a');
        link.download = 'my_image.jpg';
        link.href = dataURL;
        link.click();
    },
};

document
    .querySelector('.control__button-retry')
    .addEventListener('click', event.onClickRetry);
document
    .querySelector('.control__button-save-img')
    .addEventListener('click', event.onClickSaveImage);
