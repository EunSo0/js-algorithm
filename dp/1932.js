const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const n = +input[0];
const arr = [];
for (let i = 1; i <= n; i += 1) {
  arr.push(input[i].split(' ').map(Number));
}
const dp = arr.map((n) => new Array(n.length).fill(0));
dp[0][0] = arr[0][0];

for (let i = 1; i < n; i += 1) {
  for (let j = 0; j <= i; j += 1) {
    let a = dp[i - 1][j - 1] >= 0 ? dp[i - 1][j - 1] : -1;
    let b = dp[i - 1][j] >= 0 ? dp[i - 1][j] : -1;
    dp[i][j] = arr[i][j] + Math.max(a, b);
  }
}

console.log(Math.max(...dp[n - 1]));
