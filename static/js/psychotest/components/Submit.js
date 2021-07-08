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
        nextBt.classList.add('deactivated');
    } else {
        if (currentPage === maxPage - 1) {
            nextBt.classList.add('hidden');
        } else {
            nextBt.addEventListener('click', event.onClickNext);
        }
    }

    if (true || answer.every((elem) => !isNaN(elem))) {
        submitBt.classList.add('completed');
        submitBt.textContent = '제출완료';
        submitBt.addEventListener('click', event.onClickSubmit);
    } else {
        submitBt.classList.add('deactivated');
    }
};

export const TestSubmit = (state, event) => {
    const newElem = cloneTemplate('#template-submit');
    const oldElem = document.querySelector('.psycho__control');

    setButtons(newElem, state, event);

    oldElem.replaceWith(newElem);
};
