const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const [n, x] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let sum = 0;
let max = 0;
let cnt = 0;
let start = 0;
let end = 0;

while (end < n) {
  while (end - start < x) {
    sum += arr[end];
    end++;
  }

  if (sum === max) cnt++;
  else if (sum > max) {
    max = sum;
    cnt = 1;
  }

  sum -= arr[start];
  start++;
}

if (max === 0) {
  console.log('SAD');
} else {
  console.log(max);
  console.log(cnt);
}
