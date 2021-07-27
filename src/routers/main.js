import { Router } from 'express';
import fs from 'fs';
import { getHome } from '../controllers/main';

const router = new Router();

router.get('/', getHome);
router.get('/robots.txt', (req, res) => {
    res.header('Content-Type', 'text/palin');
    try {
        let filePath = '';
        filePath = `${__dirname}/../public/robots.txt`;
        res.send(fs.readFileSync(filePath, 'utf8'));
    } catch (err) {
        res.send(err);
    }
});
//router.get('/sitemap.xml', (req, res) => {});
router.get('*', (req, res) => {
    res.sendStatus(404);
});

export default router;
