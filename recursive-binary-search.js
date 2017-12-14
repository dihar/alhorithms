module.exports = function recurciveBinarySearch(element, array, low = 0, high = array.length) {
    if (low > high) {
        return null;
    }

    const mid = Math.floor((high + low) / 2);
    const guess = array[mid];

    if (guess === element) {
        return mid;
    } else if (guess < element) {
        return recurciveBinarySearch(element, array, mid + 1, high);
    } else {
        return recurciveBinarySearch(element, array, low, mid - 1);
    }
};
