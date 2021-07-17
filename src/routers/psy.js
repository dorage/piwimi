import { Router } from 'express';
import { getQuestion, getResult } from '../controllers/psy';

const router = new Router();

router.get('/:qId', getQuestion);

router.get('/:qId/result/:aId', getResult);

export default router;
