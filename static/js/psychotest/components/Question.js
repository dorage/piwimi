import { cloneTemplate } from '../../utils';

const draw = (elem, state, event) => {
    const { questions, answer, currentPage, maxPage } = state;
    const { onClickYes, onClickNo } = event;

    const divIndex = elem.querySelector('.question__index');
    divIndex.firstElementChild.textContent = `${currentPage + 1}/${maxPage}`;

    const divQuery = elem.querySelector('.question__query');
    divQuery.textContent = `${questions[currentPage]['query']}`;

    const btYes = elem.querySelector('.question__yes-button');
    const btNo = elem.querySelector('.question__no-button');
    btYes.addEventListener('click', onClickYes);
    btNo.addEventListener('click', onClickNo);

    const currAnswer = answer[currentPage];
    if (currAnswer === undefined) {
        return;
    }
    if (currAnswer) {
        btYes.classList.add('selected');
    } else {
        btNo.classList.add('selected');
    }
};

export const Question = (state, event) => {
    const newElem = cloneTemplate('#template-question-singular');
    const oldElem = document.querySelector('.psycho__question');

    draw(newElem, state, event);

    oldElem.replaceWith(newElem);
};
