import '../../css/psychotest/index.sass';
import { fetchURL, setStateWrapper } from '../utils';
import { Question } from './components/Question';
import { TestSubmit } from './components/Submit';

export const APPSTATE = {
    INTRO: 'INTRO',
    LOADING_Q: 'LOADING_QUESTIONS',
    PLAYING: 'PLAYING',
    LOADING_A: 'LOADING_ANSWER',
};

const state = {
    appState: APPSTATE.INTRO,
    loadingQ: false,
    loadingA: false,
    questions: {},
    answers: [],
    currentPage: 0,
    maxPage: 0,
};

const event = {
    onClickStart: async () => {
        console.log('start');
        //TODO; API call
        const {
            data: { type, contents },
        } = await fetchURL('question/1');
        console.log(type, contents);

        setState({
            appState: APPSTATE.LOADING_Q,
            questions: contents,
            answers: Array(contents.length).fill(undefined),
            loadingQ: true,
            maxPage: contents.length,
        });

        draw();
    },
    // 셀력션 선택
    onClickSelection: (event, idx) => {
        state.answers[state.currentPage] = idx;
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
    onClickSubmit: async () => {
        const data = JSON.parse(localStorage.getItem('answer'));
        const {
            data: { link },
        } = await fetchURL('question/1', {
            method: 'POST',
            body: JSON.stringify({ data }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        window.location.href = `${window.location.href}/results/${link}`;
    },
};

const draw = () => {
    const { appState } = state;

    Question(state, event);
    TestSubmit(state, event);

    switch (appState) {
        case APPSTATE.INTRO:
            TestSubmit(state, event);
            break;
        case APPSTATE.LOADING_Q:
            Question(state, event);
            TestSubmit(state, event);
            break;
        case APPSTATE.PLAYING:
            Question(state, event);
            TestSubmit(state, event);
            break;
        case APPSTATE.LOADING_A:
            Question(state, event);
            TestSubmit(state, event);
            break;
    }
    /*
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
                event.onClickSelection(e, idx),
            );
            selections.appendChild(elem);
        });
        index.textContent = `${currentPage + 1}/${questions.length}`;

        const oldElem = document.querySelector('.psycho__question');
        oldElem.replaceWith(newElem);
    }
    */
};

const setState = setStateWrapper(state, draw);

document
    .querySelector('.bt_start')
    .addEventListener('click', event.onClickStart);

//TODO; temp
draw();
