import fs from 'fs';
import { selectBestWithView, selectPsyWithView } from '../db/query';

/*--------------------------------------------------------

GET

/

--------------------------------------------------------*/

export const getHome = async (req, res) => {
    if (process.env.NODE_ENV === 'production') {
        res.redirect('/psy/1');
        return;
    }
    try {
        const best = await selectBestWithView();
        const psys = await selectPsyWithView();
        res.render('home', {
            common: {},
            content: { best, psys },
        });
    } catch (err) {
        console.log(err);
        res.redirect('/404');
    }
};

/*--------------------------------------------------------

GET

/robots.txt

--------------------------------------------------------*/

export const getRobotTxt = (req, res) => {
    res.header('Content-Type', 'text/palin');
    try {
        let filePath = '';
        filePath = `${__dirname}/../public/robots.txt`;
        res.send(fs.readFileSync(filePath, 'utf8'));
    } catch (err) {
        res.send(err);
    }
};

/*--------------------------------------------------------

GET

/404

--------------------------------------------------------*/

export const get404 = (req, res) => {
    res.render('404');
};

/*--------------------------------------------------------

GET

/*

--------------------------------------------------------*/

export const getAny = (req, res) => {
    res.redirect('/404');
};
