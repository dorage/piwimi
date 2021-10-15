import {
    selectBestWithView,
    selectPsyById,
    selectPsyWithView,
    selectResultByIdWithView,
} from '../../src/db/query';

export const testDB = async function () {
    // QUERY
    try {
        await selectBestWithView();
        await selectPsyWithView();
        await selectPsyById(0);
        await selectResultByIdWithView(0);
    } catch (err) {
        console.log('DB ERROR');
        console.log(err);
    }
};
