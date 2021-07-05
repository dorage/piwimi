import { Router } from 'express';
import { getQuestion, getResult } from '../controllers/psy';

const router = new Router();

router.get('/1', getQuestion);

router.get('/1/:result/:id', getResult);

export default router;
