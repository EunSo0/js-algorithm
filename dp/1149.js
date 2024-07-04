const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const n = +input[0];
const rgb = Array.from({ length: n }, () => []);
const dp = Array.from({ length: n }, () => new Array(3).fill([]));

for (let i = 0; i < n; i += 1) {
  rgb[i] = input[i + 1].split(' ').map(Number);
}
dp[0][0] = rgb[0][0];
dp[0][1] = rgb[0][1];
dp[0][2] = rgb[0][2];

for (let i = 1; i < n; i += 1) {
  dp[i][0] = Math.min(rgb[i][0] + dp[i - 1][1], rgb[i][0] + dp[i - 1][2]);
  dp[i][1] = Math.min(rgb[i][1] + dp[i - 1][0], rgb[i][1] + dp[i - 1][2]);
  dp[i][2] = Math.min(rgb[i][2] + dp[i - 1][0], rgb[i][2] + dp[i - 1][1]);
}

console.log(Math.min(...dp[n - 1]));
