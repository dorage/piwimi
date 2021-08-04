import '../../css/psychotest/index.sass';
import { fetchURL } from '../utils';
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
    loadingQuery: true, // query fade-in animation
    loadingQuestion: false, // loading question
    loadingAnswer: false, // loading answer
    questions: {},
    answer: [],
    currentPage: 0,
    maxPage: 0,
};

const event = {
    turnOffLoadingQuery: () => {
        state.loadingQuery = false;
    },
    onClickStart: async () => {
        const {
            data: { type, contents },
        } = await fetchURL('question/1');

        state.appState = APPSTATE.LOADING_Q;
        state.questions = contents;
        state.answer = Array(contents.length).fill(undefined);
        state.loadingQuestion = true;
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
        state.loadingQuery = true;
        draw();
    },
    // 다음 버튼
    onClickNext: () => {
        state.currentPage++;
        state.loadingQuery = true;
        draw();
    },
    onClickSubmit: async () => {
        const data = state.answer;
        const {
            data: { result },
        } = await fetchURL('question/1', {
            method: 'POST',
            body: JSON.stringify({ data }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        window.location = `${window.location.href}/result/${result}#review`;
    },
};

const draw = () => {
    const { appState } = state;

    switch (appState) {
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
};

document
    .querySelector('.control__bt--start')
    .addEventListener('click', event.onClickStart);

// 개발모드에선 뛰어넘기
if (process.env.NODE_ENV === 'development') {
    (async () => {
        await event.onClickStart();
        state.answer = Array(station.questions.length).fill(1);
        draw();
    })();
}
