import { cloneTemplate } from '../../utils';

const setButtons = (elem, state, event) => {
    const { currentPage, answers } = state;

    const prevBt = elem.querySelector('#prev');
    const nextBt = elem.querySelector('#next');
    const submitBt = elem.querySelector('#submit');

    if (currentPage === 0) {
        prevBt.classList.add('deactivated');
    } else {
        prevBt.addEventListener('click', event.onClickPrev);
    }

    if (isNaN(answers[currentPage])) {
        nextBt.classList.add('deactivated');
    } else {
        nextBt.addEventListener('click', event.onClickNext);
    }

    if (true || currentPage === maxPage - 1) {
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
