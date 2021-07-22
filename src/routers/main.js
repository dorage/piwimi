import { Router } from 'express';
import fs from 'fs';

const router = new Router();

router.get('/', (req, res) => {
    res.redirect('/psy/1');
});
router.get('/robots.txt', (req, res) => {
    res.header('Content-Type', 'text/palin');
    try {
        let filePath = '';
        if (process.env.NODE_ENV === 'production') {
            filePath = `https://piwimi.id/public/robots.txt`;
        } else {
            filePath = `${__dirname}/../public/robots.txt`;
        }
        res.send(fs.readFileSync(filePath, 'utf8'));
    } catch (err) {
        res.send('error');
    }
});
//router.get('/sitemap.xml', (req, res) => {});
router.get('*', (req, res) => {
    res.sendStatus(404);
});

export default router;
