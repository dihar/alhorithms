const readline = require('readline');

module.exports = function createInteractive(callback) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.on('line', function(line) {
        if (line === 'exit') {
            rl.close();
        }
        callback(line);
    }).on('close',function(){
        process.exit(0);
    });
};
