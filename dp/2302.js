const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const n = +input[0];
const m = +input[1];
const arr = [0];
for (let i = 2; i < m + 2; i += 1) arr.push(+input[i]);
arr.push(n + 1);

const dp = Array(n).fill(0);
dp[0] = 1;
dp[1] = 1;
dp[2] = 2;
for (let i = 3; i <= n; i += 1) dp[i] = dp[i - 2] + dp[i - 1];

const result = [];
for (let i = 0; i <= m; i += 1) {
  result.push(arr[i + 1] - arr[i] - 1);
}

let answer = 1;
for (let re of result) {
  answer *= dp[re];
}
console.log(answer);
