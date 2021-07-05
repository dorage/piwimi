import { Router } from 'express';
import { getQuestionApi, postQuestionApi } from '../controllers/api';

const router = new Router();

router.get('/question/1', getQuestionApi);

router.post('/question/1', postQuestionApi);

export default router;
