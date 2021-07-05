import { Router } from 'express';

const router = new Router();

const questions = (question, answers) => ({ question, answers });

router.get('/', (req, res) => {
    res.redirect('/psy/1');
});
router.get('*', (req, res) => {
    res.sendStatus(404);
});

export default router;
