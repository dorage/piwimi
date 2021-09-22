export const snakeToCamel = (obj) => {
    const keys = Object.keys(obj);

    const newObj = {};
    keys.forEach((snakeKey) => {
        let underscore = false;
        const camelKey = [...snakeKey].reduce((acc, curr) => {
            if (curr === '_') {
                underscore = true;
                return acc;
            }
            if (underscore) {
                underscore = false;
                return acc + curr.toUpperCase();
            }
            return acc + curr;
        });
        newObj[camelKey] = obj[snakeKey];
    });

    return newObj;
};
