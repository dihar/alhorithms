const interact = require('./interactive');
const { HashTable, List, hashFunction } = require('./hash-table');
const table = new HashTable;

interact((line) => {
    const [command, ...words] = line.split(' ');

    switch (command) {
        case 'set':
            const [key, value] = words;
            table.set(key, value);
            break;

        case 'get':
            const [keyString] = words;
            console.log(table.get(keyString));
            break;

        case 'log':
            console.log(table + '');
    }
});
