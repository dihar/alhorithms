const interact = require('./interactive');
const spiralMatrixLog = require('./matrix-log');
const matrix = (size => {
    const arr = [];
    let counter = 0;

    for (i = 0; i < size; i++) {
        arr.push([]);
        for (j = 0; j < size; j++) {
            arr[i].push(++counter < 10 ? ` ${counter}` : counter);
        }
        console.log(arr[i].join(', '));
    }

    return arr;
})(7);

interact((line) => {
    const [command, ...words] = line.split(' ');

    switch (command) {
        case 'log': {
            const logArray = [];
            spiralMatrixLog(matrix, (value) => {
                logArray.push(value);
            });

            console.log(logArray.join(', '));
        }
    }
});
