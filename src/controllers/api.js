const QUESTION_TYPE = {
    YES_OR_NO: 'YESORNO', // 양자택일 / 이지 선다형
};
const responseJSON = (json) => {
    return {
        data: json,
    };
};
const getQuestionObject = (query, answers) => ({ query, answers });
const contents = [
    getQuestionObject('I heard often my voice is small'),
    getQuestionObject('I greeting first to people who I first meet'),
    getQuestionObject('I am fearless'),
    getQuestionObject('I don’t mind my loss when I help people'),
    getQuestionObject('I heard often Im polite'),
    getQuestionObject('People find it difficult to close to me'),
    getQuestionObject('I feel uncomfortable when people aid me'),
    getQuestionObject('I come forward to help others'),
    getQuestionObject('I like hand-craft'),
    getQuestionObject('I don’t like violence'),
    getQuestionObject('I like simple and small house'),
    getQuestionObject('I think important to keep trandition'),
    getQuestionObject('I heard often im stubborn'),
    getQuestionObject('I am open-minded'),
    getQuestionObject('I am impatient'),
];

export const getQuestionApi = (req, res) => {
    res.send(responseJSON({ type: QUESTION_TYPE.YES_OR_NO, contents }));
};
const weight = [-2, 2, 2, -2, 2, 2, 2, 2, 2, 2, -2, 2, 2, 2, -2];

export const postQuestionApi = (req, res) => {
    const kindOfResults = 5;
    const { data } = req.body;
    console.log(data);
    const score = Array(kindOfResults).fill(0);
    data.forEach((elem, idx) => {
        score[idx % kindOfResults] += elem ? weight[idx] : -weight[idx];
    });

    // 가장 많은 득점을 한 첫번째 인덱스를 찾아서 반환
    const maxValue = Math.max(...score);
    const resultParam = score.findIndex((elem) => elem === maxValue);

    res.send(responseJSON({ result: resultParam }));
};
