import '../src/configs/index';
import { testDB } from './db';
import { resultCalculatorHelper } from '../src/calculators/index';

async function main() {
    console.log('=== START TEST ===');
    //await testDB();
    // test TEST
    await testPsy(2, [4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]);
    console.log('=== DONE TEST ===');
}

async function testPsy(qId, dataRange = []) {
    const answer = {};
    const cases = [];
    const promises = [];
    // 모든 케이스를 만듭니다
    function makeAllCase(n = 0, data = []) {
        if (n >= dataRange.length) {
            cases.push(data);
            return;
        }
        for (let i = 0; i < dataRange[n]; i++) {
            makeAllCase(n + 1, [...data, i]);
        }
    }
    try {
        makeAllCase();
        console.log(cases.length);

        cases.forEach((e) => promises.push(resultCalculatorHelper(qId, e)));
        console.log(promises.length);
        const values = await Promise.all(promises);
        values.forEach((e) =>
            answer[e] !== undefined ? (answer[e] += 1) : (answer[e] = 0),
        );

        console.log(`qId : ${qId} / RESULT`);
        console.log(answer);
    } catch (err) {
        console.log(err);
    }
}

main();
