import { Router } from 'express';
import { getQuestionApi, postQuestionApi } from '../controllers/api';

const router = new Router();

router.get('/question/1', getQuestionApi);

router.post('/question/1', postQuestionApi);

router.post('/img', (req, res) => {
    let fileName =
        'https://storage.googleapis.com/pwm-res/test/1/share/ig-story_bali.jpg';
    res.sendFile(fileName);
});

export default router;
