import { resultCalculatorHelper } from '../calculators';
import { insertReview, selectPsyById, updateView } from '../db/query';

const responseJSON = (json) => {
    return {
        data: json,
    };
};

/*--------------------------------------------------------

GET

/api/question/:qId

--------------------------------------------------------*/

export const getQuestionApi = async (req, res) => {
    const { qId } = req.params;
    try {
        const { questions } = await selectPsyById(qId);
        res.send(responseJSON({ questions }));
    } catch (err) {
        console.log(err);
        res.redirect('/404');
    }
};

/*--------------------------------------------------------

POST

/api/question/:qId

--------------------------------------------------------*/

/**
 * 결과를 도출해 req.result 에 id 필드에 담아 넘겨줍니다.
 */
export const gradePsychotest = async (req, res, next) => {
    const { qId } = req.params;
    const { data } = req.body;
    try {
        req.result = {};
        req.result.aId = await resultCalculatorHelper(qId, data);
        next();
    } catch (err) {
        console.log(err);
        res.redirect('/404');
    }
};

/**
 * 플레이를 했는지 세션을 이용해 체크합니다.
 * 테스트 제출을 했을때 체크합니다.
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
export const checkPlayed = async (req, res, next) => {
    const { qId } = req.params;
    const { aId } = req.result;
    if (process.env.NODE_ENV === 'production') await updateView(qId, aId);
    next();
};

export const postQuestionApi = async (req, res) => {
    const { aId } = req.result;
    try {
        res.send(responseJSON({ result: aId }));
    } catch (err) {
        console.log(err);
        res.redirect('/404');
    }
};

/*--------------------------------------------------------

POST

/api/review/:qId

--------------------------------------------------------*/

export const postReview = async (req, res) => {
    const { qId } = req.params;
    const { data: review } = req.body;
    try {
        //writeReviewOnGoogleSheet(review);
        insertReview(qId, review);
        res.sendStatus(200);
    } catch (err) {
        console.log(err);
        res.redirect('/404');
    }
};
