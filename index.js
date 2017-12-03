const interact = require('./interactive');
const binarySearch = require('./binary-search');



const testArray = (new Array(100)).fill(1).map((el, i) => i * 2);

interact((line) => {
    line = +line;
    console.log(`Result: ${binarySearch(line, testArray)}`);
});
