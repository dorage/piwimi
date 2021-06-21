import { Router } from 'express';

const router = new Router();

const responseJSON = (json) => {
    return {
        data: json,
    };
};

router.get('/', (req, res) => {
    res.send(responseJSON({ link: '00' }));
});
router.get('/question/:id', (req, res) => {});

export default router;
