import { Router } from 'express';
import { get404, getAny, getHome, getRobotTxt } from '../controllers/main';

const router = new Router();

router.get('/', getHome);
router.get('/robots.txt', getRobotTxt);
//router.get('/sitemap.xml', (req, res) => {});
router.get('/404', get404);
router.get('*', getAny);

export default router;
