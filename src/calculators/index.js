import { selectPsyById } from '../db/query';
import { SeberapaSukaAndaDenganKorea } from './2';

// 채점
const gradeResult = async (qId, data) => {
    const { questions } = await selectPsyById(qId);
    const scores = Array(data.length).fill(0);
    data.forEach((_, idx) => {
        const { aId, weight } = questions[idx];
        scores[Number(aId)] += data ? 1 * weight : -1 * weight;
    });
    return scores;
};

/**
 * 가장 큰 숫자의 인덱스를 구합니다
 * @param {*} qId
 * @param {*} data
 * @returns
 */
const getLargestScore = async (qId, data) => {
    const scores = await gradeResult(qId, data);
    // 가장 많은 득점을 한 첫번째 인덱스를 찾아서 반환
    const maxValue = Math.max(...scores);
    const resultParam = scores.findIndex((elem) => elem === maxValue);
    return resultParam;
};

/**
 * key가 qId로 구성되어있음.
 */
const resultCalculator = {
    // which island did you come from
    1: getLargestScore,
    // korean-boo test
    2: SeberapaSukaAndaDenganKorea,
};

export const resultCalculatorHelper = (qId, data) =>
    resultCalculator[qId](qId, data);
