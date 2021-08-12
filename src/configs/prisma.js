import { PrismaClient } from '@prisma/client';

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

export default prisma;
