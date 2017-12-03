const readline = require('readline');

module.exports = function createInteractive(callback) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: 'input data > '
    });
    rl.prompt();
    rl.on('line', function(line) {
        if (line === 'exit') {
            rl.close();
        }
        callback(line);
        rl.prompt();
    }).on('close',function(){
        process.exit(0);
    });
};
