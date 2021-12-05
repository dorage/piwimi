import { cloneTemplate } from '../../utils';

const draw = (elem, state, event) => {
    const { answer, questions, currentPage } = state;
    const { onClickSelection } = event;
    const selectionMultiple = elem.querySelector('.selection__multiple');

    questions[currentPage].answers.forEach((e, i) => {
        const selection = cloneTemplate('#template-selection');
        selection.addEventListener('click', onClickSelection(i));
        selection.querySelector('.selection_text').textContent = e;

        if (answer[currentPage] !== undefined && answer[currentPage] !== i) {
            selection.classList.replace('bt-solid', 'bt-solid-deactivate');
        }
        selectionMultiple.appendChild(selection);
    });
};

export const SelectionMultiple = (state, event) => {
    const virtualNode = cloneTemplate('#template-question-multiple');
    const oldElem = document.querySelector('.psycho__section--selection');

    draw(virtualNode, state, event);

    oldElem.replaceWith(virtualNode);

    return virtualNode;
};
