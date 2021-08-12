import './configs';
//import './db';
import app from './ExpressApp';
import { configs } from './configs';

const port = configs.port;

const handleListen = () => {
    console.log(`Listening On : http://localhost:${port}`);
};

// Nodemon 포트 충돌이슈
process.once('SIGUSR2', function () {
    process.kill(process.pid, 'SIGUSR2');
});

process.on('SIGINT', function () {
    // this is only called on ctrl+c, not restart
    process.kill(process.pid, 'SIGINT');
});

app.listen(port, handleListen);
