import { cloneTemplate } from '../../utils';

const setButtons = (elem, state, event) => {
    const { currentPage, maxPage, answer } = state;
    const { onClickPagination } = event;

    const nextBt = elem.querySelector('#next');
    const submitBt = elem.querySelector('#submit');

    if (answer[currentPage] === undefined) {
        nextBt.classList.replace('bt-solid', 'bt-solid-deactivate');
    } else {
        nextBt.addEventListener('click', event.onClickPagination(true));
    }

    if (currentPage === maxPage - 1) {
        nextBt.classList.add('hidden');
    }

    if (answer.every((elem) => !isNaN(elem))) {
        submitBt.classList.add('anim-bounce');
        submitBt.addEventListener('click', event.onClickSubmit);
    } else {
        submitBt.classList.replace('bt-solid', 'bt-solid-deactivate');
    }
};

export const Submit = (state, event) => {
    const newElem = cloneTemplate('#template-submit');
    const oldElem = document.querySelector('.psycho__section--control');

    setButtons(newElem, state, event);

    oldElem.replaceWith(newElem);
};
