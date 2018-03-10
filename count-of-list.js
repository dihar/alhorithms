/**
 * Рекурсивный вариант вычисления длины массива
 * @param {Array} array массив любых элементов
 * @return {number} длина массива
 */
module.exports = function countOfList(array) {
    if (typeof array[0] === 'undefined') {
        return 0;
    }

    const newArr = array.slice(1);
    return 1 + countOfList(newArr);
};
