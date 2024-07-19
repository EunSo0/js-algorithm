const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const [n, m] = input[0].split(' ').map(Number);
const a = input[1].split(' ').map(Number);
const b = input[2].split(' ').map(Number);

const arr = [...a, ...b];
arr.sort((a, b) => a - b);

let result = '';
for (let s of arr) {
  result += s + ' ';
}
console.log(result);
