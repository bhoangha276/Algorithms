/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows <= 1) return s;

    const step = 2 * numRows - 2;
    const length = s.length;
    let result = "";

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; i + j < length; j += step) {
            result += s.charAt(i + j);

            const notFirstRow = i != 0;
            const notLastRow = i != numRows - 1;
            const nextMidChar = j + step - i < length;

            if (notFirstRow && notLastRow && nextMidChar) {
                result += s.charAt(j + step - i);
            }
        }
    }

    return result;
};
