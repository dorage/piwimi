import { Router } from 'express';

const router = new Router();

router.get('/', (req, res) =>
    res.render('index', {
        contentHeader: '브레이브걸스 테스트',
        contentBody: '내가 제일 좋아하는 브레이브걸스는?',
        answers: ['어둠이 오리라', '죽음이 다가오리라'],
    }),
);
router.get('*', (req, res) => {
    res.sendStatus(404);
});

export default router;
