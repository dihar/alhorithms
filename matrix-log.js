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

    const middle = Math.floor(size / 2);

    for (let i = 0; i <= middle; i++) {
        const sideSize = 1 + i * 2;
        const perimeter = (sideSize - 1) * 4;
        const leftCorner = (size - sideSize) / 2;

        if (i === 0) {
            logFunction(matrix[leftCorner][leftCorner]);
        }

        for (let j = 0; j < perimeter; j++) {
            let x = leftCorner;
            let y = leftCorner;

            if (j < sideSize - 1) {
                x = leftCorner + sideSize - j - 2;
            } else if (j < sideSize * 2 - 2) {
                const offset = sideSize - 2;

                y = leftCorner + j - offset;
            } else if (j < sideSize * 3 - 3) {
                const offset = sideSize * 2 - 3;

                x = leftCorner + j - offset;
                y = leftCorner + sideSize - 1;
            } else if (j < perimeter) {
                const offset = sideSize * 4 - 5;

                x = leftCorner + sideSize - 1;
                y = leftCorner - j + offset;
            }

            logFunction(matrix[x][y]);
            debugger;
        }
    }
}

module.exports = spiralMatrixLog;
