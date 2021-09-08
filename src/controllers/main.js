import fs from 'fs';
import prisma from '../configs/prisma';

export const getHome = async (req, res) => {
    if (process.env.NODE_ENV === 'production') {
        res.redirect('/psy/1');
        return;
    }
    try {
        const psys = await prisma.psy.findMany({
            take: 10,
        });
        console.log(psys);
        res.render('home', { common: {}, content: { psys } });
    } catch (err) {
        res.redirect('/404');
    }
};

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

export const get404 = (req, res) => {
    res.render('404');
};

export const getAny = (req, res) => {
    res.redirect('/404');
};
