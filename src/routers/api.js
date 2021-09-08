import { Router } from 'express';
import {
    getQuestionApi,
    postQuestionApi,
    postReview,
} from '../controllers/api';

const router = new Router();

router.get('/question/:qId', getQuestionApi);

router.post('/question/:qId', postQuestionApi);

router.post('/review/:qId', postReview);

export default router;
