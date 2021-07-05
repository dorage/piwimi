const QUESTION_TYPE = {
    YES_OR_NO: 'YESORNO', // 양자택일 / 이지 선다형
};
const responseJSON = (json) => {
    return {
        data: json,
    };
};
const getQuestionObject = (question, answers) => ({ question, answers });
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

export const postQuestionApi = (req, res) => {
    console.log(req.params);
    console.log(req.body);
    res.send(responseJSON({ result: '0' }));
};
