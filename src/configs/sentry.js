import * as Sentry from '@sentry/node';
import * as Tracing from '@sentry/tracing';
import { MODE } from './enum';

if (process.env.NODE_ENV === MODE.DEVELOPMENT) {
    Sentry.init({
        dsn: 'https://bd01352631494ce39f1d1d2be3941904@o416022.ingest.sentry.io/6009660',

        // Set tracesSampleRate to 1.0 to capture 100%
        // of transactions for performance monitoring.
        // We recommend adjusting this value in production
        tracesSampleRate: process.env.NODE_ENV === MODE.PRODUCTION ? 0.5 : 1.0,
    });
}

export const captureExceptionByMode = (exception) => {
    if (process.env.NODE_ENV === MODE.PRODUCTION) {
        Sentry.captureException(exception);
        return;
    }
    console.log(exception);
};

/*
const transaction = Sentry.startTransaction({
    op: 'test',
    name: 'My First Test Transaction',
});

setTimeout(() => {
    try {
        foo();
    } catch (e) {
        Sentry.captureException(e);
    } finally {
        transaction.finish();
    }
}, 99);
*/
