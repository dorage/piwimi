const getResultObject = (island, imgURL, description) => ({
    island,
    imgURL,
    description,
});

const results = [
    getResultObject('Sumatra', '', 'Kamu orang Sumatra'),
    getResultObject('Java', '', 'Kamu orang Sumatra'),
    getResultObject('Sulawesi', '', 'Kamu orang Sumatra'),
    getResultObject('Papua', '', 'Kamu orang Sumatra'),
    getResultObject('Bali', '', 'Kamu orang Sumatra'),
];

export const getQuestion = (req, res) => {
    res.render('psychotest', {
        contentHeader: 'Indonesian Test',
        contentDescription: 'Which island do you come from?',
    });
};

export const getResult = (req, res) => {
    const { id } = req.params;
    res.render('result', {
        contentHeader: 'You came from',
        imgURL: '',
        content: results[id],
        contentBody: '내가 제일 좋아하는 브레이브걸스는 누구입니다!',
    });
};
