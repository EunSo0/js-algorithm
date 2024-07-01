const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const [n, m, h] = input[0].split(' ').map(Number);
const arr = [];
for (let i = 1; i <= n; i += 1) {
  arr.push(input[i].split(' ').map(Number));
}
const dp = new Array(h + 1).fill(0);

dp[0] = 1;

for (let i = 0; i < n; i += 1) {
  let data = [];
  for (j = 0; j <= h; j += 1) {
    for (let k = 0; k < arr.length; k += 1) {
      if (dp[j] !== 0 && j + arr[i][k] <= h) {
        data.push([j + arr[i][k], dp[j]]);
      }
    }
  }
  for ([height, value] of data) {
    dp[height] = (dp[height] + value) % 10007;
  }
}

console.log(dp[h]);
