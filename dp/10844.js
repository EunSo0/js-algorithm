const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const n = +input[0];

const dp = Array.from({ length: n + 1 }, () => new Array(10).fill(0));
for (let i = 1; i <= 9; i += 1) {
  dp[1][i] = 1;
}

for (let i = 2; i <= n; i += 1) {
  for (j = 0; j <= 9; j += 1) {
    if (j == 0) dp[i][j] = dp[i - 1][j + 1];
    else if (j === 9) dp[i][j] = dp[i - 1][j - 1];
    else dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j + 1];
    dp[i][j] %= Number(1e9);
  }
}

console.log(dp[n].reduce((a, b) => a + b) % Number(1e9));
