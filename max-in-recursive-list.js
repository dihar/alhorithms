module.exports = function maxInRecursiveList(array, prevMax) {
    if (typeof array[0] === 'undefined') {
        return prevMax;
    }

    const newMax = prevMax > array[0] ? prevMax : array[0];
    const newArr = array.slice(1);
    return maxInRecursiveList(newArr, newMax);
};
