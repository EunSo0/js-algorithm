const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = [new Array(m + 1).fill(0)];

for (let i = 1; i <= n; i += 1) {
  arr.push([0, ...input[i].split(' ').map(Number)]);
}

const sumArr = [Array(m + 1).fill(0)];
for (let i = 0; i < n; i += 1) sumArr.push([0]);
for (let i = 1; i <= n; i += 1) {
  for (let j = 1; j <= m; j += 1) {
    sumArr[i][j] =
      arr[i][j] + sumArr[i][j - 1] + sumArr[i - 1][j] - sumArr[i - 1][j - 1];
  }
}
const k = +input[n + 1];
let result = '';
for (let l = 0; l < k; l += 1) {
  const [i, j, x, y] = input[n + 2 + l].split(' ').map(Number);
  result +=
    sumArr[x][y] -
    sumArr[i - 1][y] -
    sumArr[x][j - 1] +
    sumArr[i - 1][j - 1] +
    '\n';
}
console.log(result);
