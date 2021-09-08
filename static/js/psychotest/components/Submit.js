import { cloneTemplate } from '../../utils';

const setButtons = (elem, state, event) => {
    const { currentPage, maxPage, answer } = state;

    const prevBt = elem.querySelector('#prev');
    const nextBt = elem.querySelector('#next');
    const submitBt = elem.querySelector('#submit');

    if (currentPage === 0) {
        prevBt.classList.add('hidden');
    } else {
        prevBt.addEventListener('click', event.onClickPrev);
    }
    if (isNaN(answer[currentPage])) {
        nextBt.classList.replace('bt-solid', 'bt-solid-da');
    } else {
        nextBt.addEventListener('click', event.onClickNext);
    }
    if (currentPage === maxPage - 1) {
        nextBt.classList.add('hidden');
    }

    if (answer.every((elem) => !isNaN(elem))) {
        submitBt.classList.add('anim-bounce');
        submitBt.addEventListener('click', event.onClickSubmit);
    } else {
        submitBt.classList.replace('bt-solid', 'bt-solid-da');
    }
};

export const TestSubmit = (state, event) => {
    const newElem = cloneTemplate('#template-submit');
    const oldElem = document.querySelector('.psycho__section--control');

    setButtons(newElem, state, event);

    oldElem.replaceWith(newElem);
};
