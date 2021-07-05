import '../../css/result/index.sass';

const events = {
    onClickRetry: () => {
        window.location.href = `${window.location.href.split('/results/')[0]}`;
    },
};

document
    .querySelector('.control__button-retry')
    .addEventListener('click', events.onClickRetry);
