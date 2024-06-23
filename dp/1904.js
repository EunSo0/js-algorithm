const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split(' ');

const N = +input[0];
const arr = Array(1000000).fill(0);
arr[1] = 1;
arr[2] = 2;

for (let i = 3; i <= N; i += 1) {
  arr[i] = (arr[i - 1] + arr[i - 2]) % 15746;
}

console.log(arr[N]);
