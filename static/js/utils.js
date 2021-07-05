/**
 * query 의 해당하는 DOM의 첫번째 자손을 클론하여 반환
 * @param {*} query
 * @returns
 */
export const cloneTemplate = (query) => {
    const template = document.querySelector(query);
    return template.content.firstElementChild.cloneNode(true);
};

/**
 * fetch 와 동일하게 사용하며 json을 리턴합니다.
 * @param {*} url
 * @param {*} options
 * @returns
 */
export const fetchURL = async (url, options) => {
    try {
        const data = await fetch(
            `${window.location.origin}/api/${url}`,
            options,
        );
        return data.json();
    } catch (err) {
        console.log(err);
        return undefined;
    }
};

/**
 * setState 함수를 반환하는 함수입니다
 * @param {Object} state
 * @param {Function} draw
 * @returns setState 함수를 반환합니다
 */
export const setStateWrapper = (state, draw) => {
    return (objects) => {
        for (const a in objects) {
            if (a in state) {
                state[a] = objects[a];
            }
        }
        draw();
    };
};
