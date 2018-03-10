/**
 * Двоичный поиск
 * @param {number} element искомое число
 * @param {Array[number]} array массив чисел
 * @param {boolean} isLogPerformace делать ли логирование количества опреций
 * @return {number} позиция элемента
 */
function binarySearch(element, array, isLogPerformace) {
    let low = 0;
    let high = array.length;
    let perfomance = 0;

    while (low <= high) {
        let mid = Math.floor((high + low) / 2);
        let guess = array[mid];
        perfomance++;

        if (guess < element) {
            low = mid + 1;
        } else if(guess > element) {
            high = mid - 1;
        } else {
            logPerformance(perfomance, isLogPerformace);
            return mid;
        }
    }

    logPerformance(perfomance, isLogPerformace);
    return -1;
}

function logPerformance(count, isLogPerformace) {
    if (isLogPerformace) {
        console.log(`Operation count: ${count}`);
    }
}

module.exports = binarySearch;
