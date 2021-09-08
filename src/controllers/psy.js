import prisma from '../configs/prisma';

export const getQuestion = async (req, res) => {
    const { qId } = req.params;
    try {
        const {
            title,
            description,
            img_url: imgUrl,
        } = await prisma.psy.findUnique({ where: { psy_id: Number(qId) } });
        console.log(description.split('\\n'));
        res.render('psychotest', {
            common: {
                qId,
            },
            content: {
                title,
                description,
                imgUrl,
                notice: '※ Ini hanya untuk bersenang-senang',
            },
        });
    } catch (err) {
        console.log(err);
    }
};

export const getResult = async (req, res) => {
    const { qId, aId } = req.params;
    try {
        const { answers } = await prisma.psy_result.findFirst({
            where: { psy_id: Number(qId) },
        });
        res.render('result', {
            common: {
                qId: qId,
                aId: aId,
            },
            content: {
                ...answers[aId],
            },
        });
    } catch (err) {
        console.log(err);
    }
};
