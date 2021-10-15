import { cloneTemplate } from '../../utils';

const draw = (elem, state, event) => {
    const { loadingQuery, questions, currentPage, maxPage } = state;
    const { turnOffLoadingQuery } = event;

    const divIndex = elem.querySelector('.question__index');
    divIndex.firstElementChild.textContent = `${currentPage + 1}/${maxPage}`;

    // 페이드인 애니메이션
    const divQuery = elem.querySelector('.question__query');
    if (loadingQuery) {
        divQuery.classList.add('anim-fade-in');
        turnOffLoadingQuery();
    }

    const image = elem.querySelector('.question__image > img');
    questions[currentPage]['imgUrl']
        ? (image.src = `${questions[currentPage]['imgUrl']}`)
        : image.remove();
    // 문제 질문
    const pQuery = elem.querySelector('.question__query > h2');
    pQuery.textContent = `${questions[currentPage]['query']}`;
};

export const QuestionQuery = (state, event) => {
    const newElem = cloneTemplate('#template-question-query ');
    const oldElem = document.querySelector('.psycho__section--content');

    draw(newElem, state, event);

    oldElem.replaceWith(newElem);
};
