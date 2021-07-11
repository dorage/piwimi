import { Router } from 'express';

const router = new Router();

const questions = (question, answers) => ({ question, answers });

router.get('/', (req, res) => {
    res.redirect('/psy/1');
});
router.get('/robots.txt', (req, res) => {});
router.get('/sitemap.xml', (req, res) => {});
router.get('*', (req, res) => {
    res.sendStatus(404);
});

export default router;
