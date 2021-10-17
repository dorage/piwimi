/*

░░░░░ PSY DOCUMENT URL ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
https://docs.google.com/spreadsheets/d/1UCJGfWW88I-1AQiLlBQssg95Lq0Sl8qJN6j4cSmSxag/edit#gid=0

░░░░░ TEST - DATA RANGE ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
[4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]

*/

import { selectPsyById } from '../../db/query';

export const SeberapaSukaAndaDenganKorea = async (qId, data) => {
    try {
        const { questions } = await selectPsyById(qId);
        let score = 0;

        // get score
        for (let i = 0; i < data.length; i++) {
            const { weight } = questions[i];
            const n = data[i];

            if (i === 0) {
                score += n === 2 ? weight : 0;
                continue;
            }

            score += n ? weight : 0;
        }

        if (score >= 12) return 4;
        if (score >= 8) return 3;
        if (score >= 5) return 2;
        if (score >= 2) return 1;
        return 0;
    } catch (err) {
        console.log(err);
    }
};
