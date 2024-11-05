// npm initialization npm init command it will create a package.json file in the current directory
const fruitName = require('random-fruits-name');
// console.log(fruitName());
console.log(fruitName('en'));
// console.log(fruitName('bn'));

let i = 0;
while (i < 10) {
    console.log(i + ' - ' + fruitName('en'));
    i++;
}