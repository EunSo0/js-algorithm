const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const n = +input[0];
const arr = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const x = +input[2];

let start = 0;
let end = n - 1;
let cnt = 0;

while (start < end) {
  if (arr[start] + arr[end] === x) {
    cnt++;
    end--;
  } else if (arr[start] + arr[end] > x) end--;
  else start++;
}

console.log(cnt);
