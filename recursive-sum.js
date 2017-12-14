module.exports = function recursiveSearch(arr) {
    if (arr.length === 1) {
        return arr[0];
    }

    return arr[0] + recursiveSearch(arr.slice(1));
};
