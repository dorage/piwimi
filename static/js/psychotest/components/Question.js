import { cloneTemplate } from '../../utils';

const draw = (elem, state, event) => {
    const { loadingQuery, questions, answer, currentPage, maxPage } = state;
    const { turnOffLoadingQuery, onClickYes, onClickNo } = event;

    const divIndex = elem.querySelector('.question__index');
    divIndex.firstElementChild.textContent = `${currentPage + 1}/${maxPage}`;

    const divQuery = elem.querySelector('.question__query');
    if (loadingQuery) {
        divQuery.style.animation = 'fadeIn 2s';
        turnOffLoadingQuery();
    }

    const pQuery = elem.querySelector('.question__query > p');
    pQuery.textContent = `${questions[currentPage]['query']}`;

    const btYes = elem.querySelector('.question__button-yes');
    const btNo = elem.querySelector('.question__button-no');
    btYes.addEventListener('click', onClickYes);
    btNo.addEventListener('click', onClickNo);

    const currAnswer = answer[currentPage];
    if (currAnswer === undefined) {
        return;
    }
    if (currAnswer) {
        btYes.classList.add('selected');
        btNo.classList.add('unselected');
    } else {
        btYes.classList.add('unselected');
        btNo.classList.add('selected');
    }
};

export const Question = (state, event) => {
    const newElem = cloneTemplate('#template-question-singular');
    const oldElem = document.querySelector('.psycho__question');

    draw(newElem, state, event);

    oldElem.replaceWith(newElem);
};
