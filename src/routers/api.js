import { Router } from 'express';
import {
    checkPlayed,
    getQuestionApi,
    gradePsychotest,
    postQuestionApi,
    postReview,
} from '../controllers/api';

const router = new Router();

router.get('/question/:qId', getQuestionApi);

router.post('/question/:qId', gradePsychotest, checkPlayed, postQuestionApi);

router.post('/review/:qId', postReview);

export default router;
