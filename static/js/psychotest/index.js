const qElem = document.querySelector('div[data-questions]');
const questions = JSON.parse(qElem.dataset.questions);
qElem.remove();
console.log(questions);

const getCloneTemplate = (query) => {
    const template = document.querySelector(query);
    return template.content.firstElementChild.cloneNode(true);
};

const answer = Array(questions.length);
let newElem = getCloneTemplate('#template-question');
console.log(newElem);
const header = newElem.querySelector('.content-header');
const selections = newElem.querySelector('.content-selections');
const index = newElem.querySelector('p');

console.log(selections);
header.textContent = `Q. ${questions[0].question}`;
questions[0].answers.forEach((value, idx) => {
    const elem = getCloneTemplate('#template-selection');
    elem.querySelector('.selection_text').textContent = value;
    selections.appendChild(elem);
});
index.textContent = `1/${questions.length}`;

let oldElem = document.querySelector('.content-question');

oldElem.replaceWith(newElem);
