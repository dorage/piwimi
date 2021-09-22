import { selectPsyById, selectResultByIdWithView } from '../db/query';

/*--------------------------------------------------------

GET

/psy/:qId

--------------------------------------------------------*/

export const getQuestion = async (req, res) => {
    const { qId } = req.params;
    try {
        const psy = await selectPsyById(qId);
        res.render('psychotest', {
            common: {
                qId,
            },
            content: psy,
        });
    } catch (err) {
        console.log(err);
    }
};

/*--------------------------------------------------------

GET

/psy/:qId/result/:aId

--------------------------------------------------------*/

export const getResult = async (req, res) => {
    const { qId, aId } = req.params;
    try {
        const { answers, views } = await selectResultByIdWithView(qId);
        res.render('result', {
            common: {
                qId: qId,
                aId: aId,
            },
            content: {
                ...answers[aId],
                view: views[aId],
            },
        });
    } catch (err) {
        console.log(err);
    }
};
