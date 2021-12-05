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

/**
 * state를 업데이트하고 업데이트 된 경우에만 뷰를 업데이트합니다.
 * @param {*} obj
 */
export const setState = function (obj) {
    let changed = false;
    for (const key of Object.keys(obj)) {
        if (Object.keys(state).includes(key)) {
            state[key] = key;
            changed = true;
        }
    }
    if (changed) draw();
};

const event = {
    turnOffLoadingQuery: () => {
        setState({
            loadingQuery: false,
        });
    },
    onClickStart: async () => {
        const tokens = location.pathname.split('#')[0].split('/');
        const {
            data: { type, questions },
        } = await fetchURL(`question/${tokens[tokens.length - 1]}`);

        setState({
            appState: APPSTATE.LOADING_Q,
            questions: questions,
            answer: Array(questions.length).fill(undefined),
            loadingQuestion: true,
            maxPage: questions.length,
        });
    },
    /**
     * 선택지 기록
     * @param {Number} idx
     * @returns
     */
    onClickSelection: (idx) => {
        const { answer, currentPage } = state;
        return () => {
            // TODO;
            // 추후에 해결해야할 부분
            // 오브젝트이기 때문에 state내부값이 그냥 변경이되어
            // setState의 의미가 없어진다
            answer[currentPage] = idx;
            setState({
                answer,
            });
        };
    },
    /**
     * 질문 페이지네이션
     * @param {Boolean} isNext
     * @returns
     */
    onClickPagination: (isNext) => {
        return () => {
            setState({
                currentPage: currentPage + isNext ? 1 : -1,
                loadingQuery: true,
            });
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
    const { questions, currentPage } = state;

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
