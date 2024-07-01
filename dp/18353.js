// 가장 긴 증가하는 부분수열
const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const n = +input[0];
const arr = input[1].split(' ').map(Number);
arr.reverse();
const dp = new Array(n).fill(1);

for (let i = 1; i < n; i += 1) {
  for (let j = 0; j < i; j += 1) {
    if (arr[j] < arr[i]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

console.log(n - Math.max(...dp));
