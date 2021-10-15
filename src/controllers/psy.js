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
        res.redirect('/404');
    }
};

/*--------------------------------------------------------

GET

/psy/:qId/result/:aId

--------------------------------------------------------*/

export const getResult = async (req, res) => {
    const { qId, aId } = req.params;
    try {
        const { answers, opengraphs, views } = await selectResultByIdWithView(
            qId,
        );
        if (aId >= answers.length) {
            res.redirect('/404');
            return;
        }
        res.render('result', {
            common: {
                qId: qId,
                aId: aId,
            },
            content: {
                answer: answers[aId],
                opengraph: opengraphs[aId],
                view: views[aId],
            },
        });
    } catch (err) {
        console.log(err);
        res.redirect('/404');
    }
};
