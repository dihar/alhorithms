const interact = require('./interactive');

const recursiveBinarySearch = require('./recursive-binary-search');

const testArray = (new Array(128)).fill(1).map((el, i) => i * 2);

interact((line) => {
    line = +line;
    console.log(`Result: ${recursiveBinarySearch(line, testArray)}`);
});
