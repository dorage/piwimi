const qElem = document.querySelector('div[data-questions]');
const questions = JSON.parse(qElem.dataset.questions);
qElem.remove();

const state = {
    questions,
    answer: Array(questions.length).fill(undefined),
    currentPage: 0,
    maxPage: questions.length,
};

const events = {
    // 셀력션 선택
    onClickSelection: (event, idx) => {
        state.answer[state.currentPage] = idx;
        console.log(state.answer);
        draw();
    },
    // 이전 버튼
    onClickPrev: () => {
        if (state.currentPage === 0) return;
        state.currentPage--;
        draw();
    },
    // 다음 버튼
    onClickNext: () => {
        if (!state.answer[state.currentPage]) return;
        state.currentPage++;
        draw();
    },
};

// template 복제하여 반환
const cloneTemplate = (query) => {
    const template = document.querySelector(query);
    return template.content.firstElementChild.cloneNode(true);
};

const draw = () => {
    const { questions, currentPage, answer, maxPage } = state;

    let newElem = cloneTemplate('#template-question');

    const header = newElem.querySelector('.content-header');
    const selections = newElem.querySelector('.content-selections');
    const index = newElem.querySelector('p');

    header.textContent = `Q. ${questions[currentPage].question}`;
    questions[currentPage].answers.forEach((value, idx) => {
        const elem = cloneTemplate('#template-selection');
        console.log();
        if (answer[currentPage] === idx) {
            elem.classList.add('selected');
        }
        elem.querySelector('.selection_text').textContent = value;
        elem.addEventListener('click', (e) => events.onClickSelection(e, idx));
        selections.appendChild(elem);
    });
    index.textContent = `1/${questions.length}`;

    // submit
    const prevBt = document.getElementById('prev');
    const nextBt = document.getElementById('next');
    prevBt.removeEventListener('click', events.onClickPrev);
    nextBt.removeEventListener('click', events.onClickNext);
    prevBt.addEventListener('click', events.onClickPrev);
    nextBt.addEventListener('click', events.onClickNext);

    nextBt.classList.remove('submit');
    nextBt.classList.textContent = '다음';
    if (currentPage === 0) {
        prevBt.classList.add('deactivated');
    }
    if (currentPage === maxPage - 1) {
        nextBt.classList.add('submit');
        nextBt.classList.textContent = '제출하기';
    }
    if (!answer[currentPage]) {
        nextBt.classList.add('deactivated');
    }

    let oldElem = document.querySelector('.content-question');

    oldElem.replaceWith(newElem);
};

window.requestAnimationFrame(() => {
    console.log('hello');
    draw(state);
});
