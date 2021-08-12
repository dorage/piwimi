import { prisma } from '../configs/prisma';
//import { writeReviewOnGoogleSheet } from '../configs/googleAPI';

const QUESTION_TYPE = {
    YES_OR_NO: 'YESORNO', // 양자택일 / 이지 선다형
};
const responseJSON = (json) => {
    return {
        data: json,
    };
};
const getQuestionObject = (query, answers) => ({ query, imgUrl: '', answers });
const contents = [
    getQuestionObject('Saya selalu mendengar suara saya kecil'),
    getQuestionObject('Saya menyapa orang yang baru pertama kali bertemu'),
    getQuestionObject('Saya tidak kenal takut '),
    getQuestionObject(
        'Saya tidak keberatan untuk membantu walau harus kehilangan saya',
    ),
    getQuestionObject('Saya selalu mendengar bahwa saya sopan '),
    getQuestionObject('Orang merasa sulit untuk dekat dengan saya '),
    getQuestionObject('Saya merasa sungkan saat orang membantu saya '),
    getQuestionObject('Saya datang untuk membantu yang lain '),
    getQuestionObject('Saya suka kerajinan tangan '),
    getQuestionObject('Saya tidak suka kekerasan'),
    getQuestionObject('Saya suka rumah yang simple dan tidak terlalu besar'),
    getQuestionObject('Saya pikir ini penting untuk menjaga tradisi daerah'),
    getQuestionObject('Saya mendengar sering bahwa saya keras kepala'),
    getQuestionObject('Saya orangnya terbuka'),
    getQuestionObject('Saya orangnya tidak sabar'),
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

export const postReview = async (req, res) => {
    const { data: review } = req.body;
    try {
        //writeReviewOnGoogleSheet(review);
        await prisma.psy_review.findMany();
        res.send(200);
    } catch (err) {
        console.log(err);
        res.send(500);
    }
};
