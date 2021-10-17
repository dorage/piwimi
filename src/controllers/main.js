import fs from 'fs';
import { captureExceptionByMode } from '../configs/sentry';
import { selectBestWithView, selectPsyWithView } from '../db/query';

/*--------------------------------------------------------

GET

/

--------------------------------------------------------*/

const homeOG = (psys) => ({
    og: {
        url: 'https://piwimi.id/',
        title: 'Piwimi - psikotes lucu',
        description: psys.map((psy) => psy.title).join(' | '),
        image: 'https://storage.googleapis.com/pwm-res/web/common/og_common.jpg',
        imageAlt: 'Piwimi | psikotes lucu',
    },
    twitter: {
        url: 'https://piwimi.id/',
        title: 'Piwimi - psikotes lucu',
        description: psys.map((psy) => psy.title).join(' | '),
        image: 'https://storage.googleapis.com/pwm-res/web/common/og_common.jpg',
        hashtag: 'PIWIMI,mbti,psikotes,ulangan',
    },
});

export const getHome = async (req, res) => {
    try {
        const best = await selectBestWithView();
        const psys = await selectPsyWithView();
        res.render('home', {
            common: {},
            content: { best, psys, opengraph: homeOG(psys) },
        });
    } catch (err) {
        captureExceptionByMode(err);
        res.redirect('/404');
    }
};

/*--------------------------------------------------------

GET

/about-us

--------------------------------------------------------*/

const aboutusOG = (psys) => ({
    og: {
        url: 'https://piwimi.id/',
        title: 'Piwimi - Siapa kami?',
        description: 'Kami piwimi',
        image: 'https://storage.googleapis.com/pwm-res/web/common/og_common.jpg',
        imageAlt: 'Piwimi - Siapa kami?',
    },
    twitter: {
        url: 'https://piwimi.id/',
        title: 'Piwimi - Siapa kami?',
        description: 'Kami piwimi',
        image: 'https://storage.googleapis.com/pwm-res/web/common/og_common.jpg',
        hashtag: 'PIWIMI,mbti,psikotes,ulangan',
    },
});

export const getAboutUs = async (req, res) => {
    try {
        res.render('aboutUs', {
            common: {},
            content: { opengraph: aboutusOG() },
        });
    } catch (err) {
        captureExceptionByMode(err);
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
        captureExceptionByMode(err);
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
