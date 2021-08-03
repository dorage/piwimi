import { Router } from 'express';
import {
    getQuestionApi,
    postQuestionApi,
    postReview,
} from '../controllers/api';

const router = new Router();

router.get('/question/1', getQuestionApi);

router.post('/question/1', postQuestionApi);

router.post('/review', postReview);

export default router;
