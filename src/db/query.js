import pool from '.';
import { snakeToCamel } from './utils';

const QUERY = async (query) => {
    const { rows } = await pool.query(query);
    return rows.map(snakeToCamel);
};

/*--------------------------------------------------------

SELECT

--------------------------------------------------------*/

/**
 * best 심리테스트를 플레이된 횟수와 함께 가져옵니다
 * @returns
 */
export const selectBestWithView = async () => {
    const queryString = `
        SELECT *
        FROM (
            SELECT *
            FROM psy
            WHERE psy_id = (SELECT best FROM psy_best)
        ) AS best_psy, (
            select psy_id, sum(view) AS view
            FROM (
                SELECT psy_id, unnest(views) AS view
                FROM psy_view
                WHERE psy_id = (SELECT best FROM psy_best)
            ) as view_table
            GROUP BY psy_id
        ) AS best_view
   `;
    return QUERY(queryString);
};

/**
 * 심리테스트를 최신순으로 limit개수만큼 플레이된 횟수와 함게 가져옵니다
 * @param {*} limit default 10
 * @returns
 */
export const selectPsyWithView = async (limit = 10) => {
    const queryString = `
        SELECT *
        FROM (
            SELECT *
            FROM psy
            ORDER BY psy_id DESC
            LIMIT 10
        ) AS psy_table
        JOIN (
            SELECT psy_id, sum(view) AS view
            FROM
            (
                SELECT psy_table.psy_id, unnest(views) AS view
                FROM (
                    SELECT *
                    FROM psy
                    ORDER BY psy_id DESC
                    LIMIT 10
                ) as psy_table,
                psy_view
                WHERE psy_table.psy_id = psy_view.psy_id
            ) AS view_table
            GROUP BY psy_id
        ) AS view_table
        ON psy_table.psy_id = view_table.psy_id;
    `;
    return QUERY(queryString);
};

/**
 * id로 심리테스트를 가져옵니다.
 * @param {*} qId
 * @returns
 */
export const selectPsyById = async (qId) => {
    const queryString = `
        SELECT *
        FROM psy
        WHERE psy_id=${qId}
    `;
    return (await QUERY(queryString))[0];
};

/**
 * id로 심리테스트의 결과를 가져옵니다.
 * @param {*} qId
 * @param {*} aId
 * @returns
 */
export const selectResultByIdWithView = async (qId) => {
    const queryString = `
        SELECT psy_result.psy_id, answers, views
        FROM psy_result, psy_view
        WHERE psy_result.psy_id=${qId} AND psy_result.psy_id=psy_view.psy_id
    `;
    return (await QUERY(queryString))[0];
};

/*--------------------------------------------------------

UPDATE

--------------------------------------------------------*/

export const updateView = async (qId, aId) => {
    const queryString = `
        UPDATE psy_view
        SET views[${aId}] = views[${aId}] + 1
        WHERE psy_id=${qId}
    `;
    return QUERY(queryString);
};

/*--------------------------------------------------------

INSERT

--------------------------------------------------------*/

export const insertReview = async (qId, review) => {
    const queryString = `
        INSERT INTO psy_review
        (psy_id, review) VALUES
        (${qId}, '${review}');
    `;
    return QUERY(queryString);
};
