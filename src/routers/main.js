import { Router } from 'express';

const router = new Router();

router.get('/', (req, res) =>
    res.render('psychotest', {
        contentHeader: '브레이브걸스 테스트',
        contentBody: '내가 제일 좋아하는 브레이브걸스는?',
        question: '당신은 어떠한 성격인가요?',
        answers: ['어둠이 오리라', '죽음이 다가오리라', '또또'],
    }),
);
router.get('*', (req, res) => {
    res.sendStatus(404);
});

export default router;
