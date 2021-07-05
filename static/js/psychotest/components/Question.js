import { cloneTemplate } from '../../utils';

const draw = (elem, state, event) => {
    const { questions } = state;
};

export const Question = (state, event) => {
    const newElem = cloneTemplate('#template-question-singular');
    const oldElem = document.querySelector('.psycho__question');

    draw(newElem, state, event);

    oldElem.replaceWith(newElem);
};
