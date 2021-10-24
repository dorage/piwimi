import '../../css/psychotest/index.sass';
import { fetchURL } from '../utils';
import { QuestionQuery } from './components/QuestionQuery';
import { SelectionMultiple } from './components/SelectionMultiple';
import { SelectionSingular } from './components/SelectionSingular';
import { Share } from './components/Share';
import { Submit } from './components/Submit';

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
        const tokens = location.pathname.split('#')[0].split('/');
        const {
            data: { type, questions },
        } = await fetchURL(`question/${tokens[tokens.length - 1]}`);

        state.appState = APPSTATE.LOADING_Q;
        state.questions = questions;
        state.answer = Array(questions.length).fill(undefined);
        state.loadingQuestion = true;
        state.maxPage = questions.length;

        draw();
    },
    /**
     * 선택지 기록
     * @param {Number} idx
     * @returns
     */
    onClickSelection: (idx) => {
        const { answer, currentPage } = state;
        return () => {
            answer[currentPage] = idx;
            draw();
        };
    },
    /**
     * 질문 페이지네이션
     * @param {Boolean} isNext
     * @returns
     */
    onClickPagination: (isNext) => {
        return () => {
            state.currentPage += isNext ? 1 : -1;
            state.loadingQuery = true;
            draw();
        };
    },
    onClickSubmit: async () => {
        const tokens = location.pathname.split('#')[0].split('/');
        const data = state.answer;
        const {
            data: { result },
        } = await fetchURL(`question/${tokens[tokens.length - 1]}`, {
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
    const { appState, questions, currentPage } = state;

    QuestionQuery(state, event);
    if (questions[currentPage].answers) {
        SelectionMultiple(state, event);
    } else {
        SelectionSingular(state, event);
    }
    Submit(state, event);
    // 문제 화면에서만 보이면 됨
    Share(state, event);
};

document
    .querySelector('.control__bt--start')
    .addEventListener('click', event.onClickStart);

// 개발모드에선 뛰어넘기
/*
if (process.env.NODE_ENV === 'development') {
    (async () => {
        await event.onClickStart();
        state.answer = Array(state.questions.length).fill(1);
        draw();
    })();
}
*/
