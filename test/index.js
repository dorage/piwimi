import { testDB } from './db';
import { resultCalculatorHelper } from '../src/calculators/index';

async function main() {
    console.log('=== START TEST ===');
    await testDB();
    // test TEST
    const answer = {};

    await resultCalculatorHelper(2, data);
    console.log('=== DONE TEST ===');
}

async function testPsy() {}
function recordResult(result) {}
// 모든 케이스를 만듭니다
function makeAllCase(list, n, data) {
    if (n >= list.length) {
    }
    for (let i = 0; i < list[n]; i++) {
        makeAllCase(list, n + 1, [...data, i]);
    }
}

main();
