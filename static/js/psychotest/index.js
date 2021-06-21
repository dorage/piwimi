const qElem = document.querySelector('div[data-questions]');
const questions = JSON.parse(qElem.dataset.questions);
qElem.remove();

const state = {
    questions,
    answer: Array(questions.length).fill(undefined),
    currentPage: 0,
    maxPage: questions.length,
};

const fetchURL = async (url, options) => {
    try {
        const data = await fetch(url, options);
        return data.json();
    } catch (err) {
        console.log(err);
        return undefined;
    }
};

const events = {
    // 셀력션 선택
    onClickSelection: (event, idx) => {
        state.answer[state.currentPage] = idx;
        draw();
    },
    // 이전 버튼
    onClickPrev: () => {
        state.currentPage--;
        draw();
    },
    // 다음 버튼
    onClickNext: () => {
        state.currentPage++;
        draw();
    },
    onSubmit: async () => {
        const {
            data: { link },
        } = await fetchURL('http://localhost:4000/api/');
        window.location.href = `${window.location.href}/results/${link}`;
    },
};

// template 복제하여 반환
const cloneTemplate = (query) => {
    const template = document.querySelector(query);
    return template.content.firstElementChild.cloneNode(true);
};

const draw = () => {
    const { questions, currentPage, answer, maxPage } = state;
    {
        const newElem = cloneTemplate('#template-question');

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
            elem.addEventListener('click', (e) =>
                events.onClickSelection(e, idx),
            );
            selections.appendChild(elem);
        });
        index.textContent = `${currentPage + 1}/${questions.length}`;

        const oldElem = document.querySelector('.content-question');
        oldElem.replaceWith(newElem);
    }

    // submit
    {
        const newElem = cloneTemplate('#template-submit');

        const prevBt = newElem.querySelector('#prev');
        const nextBt = newElem.querySelector('#next');

        if (currentPage === 0) {
            prevBt.classList.add('deactivated');
        } else {
            prevBt.addEventListener('click', events.onClickPrev);
        }

        if (currentPage === maxPage - 1) {
            nextBt.classList.add('completed');
            nextBt.textContent = '제출완료';
        } else {
            if (isNaN(answer[currentPage])) {
                nextBt.classList.add('deactivated');
            } else {
                nextBt.addEventListener('click', events.onClickNext);
            }
        }

        const oldElem = document.querySelector('.content-submit');
        oldElem.replaceWith(newElem);
    }
};

window.requestAnimationFrame(() => {
    draw(state);
});
