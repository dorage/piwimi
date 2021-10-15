import { cloneTemplate } from '../../utils';

const draw = (elem, state, event) => {
    const { answer, currentPage } = state;
    const { onClickSelection } = event;

    // YES OR NO
    const btYes = elem.querySelector('.question__bt--yes');
    const btNo = elem.querySelector('.question__bt--no');
    btYes.addEventListener('click', onClickSelection(1));
    btNo.addEventListener('click', onClickSelection(0));

    const currAnswer = answer[currentPage];
    if (currAnswer === undefined) {
        return;
    }
    if (currAnswer) {
        btYes.classList.replace('bt-solid-deactivate', 'bt-solid');
        btNo.classList.replace('bt-solid', 'bt-solid-deactivate');
    } else {
        btYes.classList.replace('bt-solid', 'bt-solid-deactivate');
        btNo.classList.replace('bt-solid-deactivate', 'bt-solid');
    }
};

export const SelectionSingular = (state, event) => {
    const newElem = cloneTemplate('#template-question-singular');
    const oldElem = document.querySelector('.psycho__section--selection');

    draw(newElem, state, event);

    oldElem.replaceWith(newElem);
};
