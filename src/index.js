import './configs';
//import './db';
import app from './ExpressApp';
import { configs } from './configs';
import { PrismaClient } from '@prisma/client';

const port = configs.port;

const handleListen = () => {
    console.log(`Listening On : http://localhost:${port}`);
};

const prisma = new PrismaClient();
prisma
    .$connect()
    .then(() => {
        console.log('Pirsma is Connected!');
    })
    .catch((e) => {
        console.log(e);
        prisma.$disconnect();
        throw e;
    });

app.listen(port, handleListen);
