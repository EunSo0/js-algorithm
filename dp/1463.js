const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const n = +input[0];
const dp = new Array(1000000).fill(0);

for (let i = 2; i <= n; i += 1) {
  dp[i] = dp[i - 1] + 1;
  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i], dp[parseInt(i / 3)] + 1);
  }
  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i], dp[parseInt(i / 2)] + 1);
  }
}

console.log(dp[n]);
