const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const [n, k] = input[0].split(' ').map(Number);
const s = input[1].split(' ').map(Number);

let del = 0;
let len = 0;
let start = 0;
let end = 0;
let max = 0;

while (end < n) {
  while (del <= k) {
    if (s[end] % 2 === 0) len++;
    else del++;
    end++;
  }
  max = Math.max(max, len);
  if (s[start] % 2 === 0) len--;
  else del--;
  start++;
}

console.log(max);
