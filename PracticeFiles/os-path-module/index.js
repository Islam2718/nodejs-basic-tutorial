// os 1
const os = require('os');
console.log(os.homedir());
console.log(os.hostname());
console.log(os.platform());
console.log(os.release());
console.log(os.type());
console.log(os.version());

// os 2
const memory = os.freemem();
const totalMemory = os.totalmem();
console.log(memory);
console.log(totalMemory)

// path 1
const path = require('path');
console.log(path.extname('Hello.txt'));
console.log(path.dirname('Hello.txt'));
console.log(path.basename('Hello.txt'));
console.log(path.parse('Hello.txt'));

// path 2
const path2 = require('path');
console.log(path2.join('Hello', 'World'));
console.log(path2.normalize('Hello/World'));
console.log(path2.resolve('Hello', 'World'));
console.log(path2.isAbsolute('Hello'));