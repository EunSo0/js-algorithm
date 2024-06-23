const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const T = +input[0];
const dp = Array(100).fill(0);

for (let i = 1; i <= T; i += 1) {
  const N = +input[i];
  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 1;
  dp[3] = 2;
  dp[4] = 2;
  for (let i = 5; i <= N; i += 1) {
    dp[i] = dp[i - 1] + dp[i - 5];
  }
  console.log(dp[N - 1]);
}
