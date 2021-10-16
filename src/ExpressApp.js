import express from 'express';
import helmet from 'helmet';
import session from 'express-session';
import path from 'path';
import favicon from 'serve-favicon';

import mainRouter from './routers/main';
import psyRouter from './routers/psy';
import apiRouter from './routers/api';
import morgan from 'morgan';
import connectPgSimple from 'connect-pg-simple';
import pool from './db';
import { ENV } from './configs';

const app = express();
app.set('view engine', 'pug');
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
    session({
        cookie: {
            secure: true,
            maxAge: 90 * 24 * 60 * 60 * 1000,
        },
        secret: ENV.cookieSecret,
        resave: true,
        saveUninitialized: true,
        store: new (connectPgSimple(session))({
            pool: pool,
        }),
    }),
);
app.use(morgan('dev'));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// routers
app.use('/api', apiRouter);
app.use('/psy', psyRouter);
app.use('/', mainRouter);

export default app;
