const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let sum = 0;
let cnt = 0;
let start = 0;
let end = 0;

while (start < n) {
  while (sum < m) {
    sum += arr[end];
    end++;
  }
  if (sum === m) cnt++;

  sum -= arr[start];
  start++;
}

console.log(cnt);
