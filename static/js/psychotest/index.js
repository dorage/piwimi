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
    answer: [],
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

        state.appState = APPSTATE.LOADING_Q;
        state.questions = contents;
        state.answer = Array(contents.length).fill(undefined);
        state.loadingQ = true;
        state.maxPage = contents.length;

        draw();
    },
    // 셀력션 선택
    onClickSelection: (event, idx) => {
        state.answer[state.currentPage] = idx;
        draw();
    },
    // YES 버튼
    onClickYes: () => {
        const { answer, currentPage } = state;
        answer[currentPage] = 1;
        draw();
    },
    // NO 버튼
    onClickNo: () => {
        const { answer, currentPage } = state;
        answer[currentPage] = 0;
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
        const data = state.answer;
        localStorage.setItem('answer', JSON.stringify(data));
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

    switch (appState) {
        case APPSTATE.INTRO:
            Question(state, event);
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
        questions[currentPage].answer.forEach((value, idx) => {
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

document
    .querySelector('.bt_start')
    .addEventListener('click', event.onClickStart);

//TODO; temp
event.onClickStart();
