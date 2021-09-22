/*
    Psychotest
    - title : string
    - description : string
    - thumb_url : string
    - questions : stringify JSON list
    - calc_key : key of calculators object
    - page_key : key of renders object
*/

import { selectPsyById } from '../db/query';

const getCalculator = (qId, v) => {
    return v;
};

// 채점
const gradeResult = async (qId, data) => {
    const { questions } = await selectPsyById(qId);
    const scores = Array(data.length).fill(0);
    data.forEach((_, idx) => {
        const { aId, weight } = questions[idx];
        scores[Number(aId)] += data ? Number(weight) : Number(-weight);
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
 * 점수 따라 등급이 정해집니다
 * @param {*} qId
 * @param {*} data
 */
const gradeSingular = async (qId, data) => {
    const score = await gradeResult(qId, data)[0];
    switch (score) {
        case score >= 12:
            return 4;
        case score >= 8:
            return 3;
        case score >= 5:
            return 2;
        case score >= 2:
            return 1;
        default:
            return 0;
    }
};

/**
 * key가 qId로 구성되어있음.
 */
const resultCalculator = {
    // which island did you come from
    1: getLargestScore,
    // korean-boo test
    2: gradeSingular,
};

export const resultCalculatorHelper = (qId, data) =>
    resultCalculator[qId](qId, data);
