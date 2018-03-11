/**
 * Вывод матрицы по спирали
 * @param {Array[Array[number]]} matrix квадратныя матрица с числами, обязательно не кратна двум
 * @param {Function} [logFunction] функция логирования
 */
function spiralMatrixLog(matrix, logFunction = console.log) {
    const size = matrix.length;

    if (!size || !(size % 2)) {
        return;
    }

    const middle = Math.round(size / 2);
    const elementCount = Math.pow(size, 2);

    for (let i = 0; i < middle; i++) {
        const sideSize = 1 + i * 2;
        if (sideSize === 1) {
            logFunction(matrix[middle][middle])
        } else {
            const perimeter = (sideSize - 1) * 4;

            for (let j = 0; j < perimeter; j++) {
                const x = middle;
                const y = middle;
                if (j < sideSize - 1) {
                    const x = (size + sideSize) / 2 - j - 1;

                }

                logFunction(matrix[x][y])
            };
        }
    }
}

function getSquareFromMatrix(matrix, sideSize) {

}

module.exports = spiralMatrixLog;
