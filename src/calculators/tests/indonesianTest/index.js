export const indonesianTest = (answer) => {
    // 에러체크
    if (answer.__proto__ !== Array.prototype) {
        throw Error('주어진 answer가 배열이 아닙니다.');
    }
    if (answer.length !== 15) {
        throw Error(
            '주어진 answer의 정답 개수가 문제의 정답개수와 일치하지 않습니다.',
        );
    }
    for (const num of answer) {
        if (isNaN(num)) {
            throw Error('주어진 인자 중 숫자가 아닌것이 있습니다.');
        }
        if (num < 0 && num > 1) {
            throw Error('주어진 인자 중 유효값 범위 이외의 값이 있습니다.');
        }
    }

    // 결과값
};
