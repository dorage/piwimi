const getQuestionObject = (question) => ({ question });
const getResultObject = (name, imgUrl, description) => ({
    name,
    imgUrl,
    description,
});

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

const answers = [
    getResultObject('Sumatra', ''),
    getResultObject(
        'Java',
        '자유분방하고 항상 다른 사람을 즐겁게 하는 매력을 가진 당신은 꼬북좌와 닮았군요.',
    ),
    getResultObject(
        'Sulawesi',
        '자유분방하고 항상 다른 사람을 즐겁게 하는 매력을 가진 당신은 꼬북좌와 닮았군요.',
    ),
    getResultObject(
        'Papua',
        '자유분방하고 항상 다른 사람을 즐겁게 하는 매력을 가진 당신은 꼬북좌와 닮았군요.',
    ),
    getResultObject(
        'Bali',
        '자유분방하고 항상 다른 사람을 즐겁게 하는 매력을 가진 당신은 꼬북좌와 닮았군요.',
    ),
];

export const getQuestion = (req, res) => {
    res.render('psychotest', {
        contentHeader: 'Indonesian Test',
        contentDescription: 'Which island do you come from?',
    });
};

export const getResult = (req, res) => {
    res.render('result', {
        contentHeader: 'You came from',
        imgURL: '',
        contents: answers[1],
        contentBody: '내가 제일 좋아하는 브레이브걸스는 누구입니다!',
    });
};
