import express from 'express';
import helmet from 'helmet';
import session from 'express-session';

import './db';
import mainRouter from './routers/main';
import psyRouter from './routers/psy';
import { configs } from './configs';
import morgan from 'morgan';

const app = express();

app.set('view engine', 'pug');
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
    session({
        secret: configs.cookieSecret,
        resave: true,
        saveUninitialized: false,
    }),
);
app.use(morgan('dev'));

app.use('/psy', psyRouter);
app.use('/', mainRouter);

export default app;
