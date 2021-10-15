import { testDB } from './db';

async function main() {
    console.log('=== START TEST ===');
    await testDB();
    console.log('=== DONE TEST ===');
}

main();
