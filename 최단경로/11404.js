const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');
const n = +input[0];
const m = +input[1];
const arr = Array.from({ length: n + 1 }, () =>
  new Array(n + 1).fill(Infinity)
);

for (let i = 2; i < m + 2; i += 1) {
  const [a, b, c] = input[i].split(' ').map(Number);
  arr[a][b] = Math.min(c, arr[a][b]);
}

for (let i = 1; i <= n; i++) {
  arr[i][i] = 0;
}

for (let k = 1; k <= n; k += 1) {
  for (let i = 1; i <= n; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      const cost = arr[i][k] + arr[k][j];
      arr[i][j] = Math.min(arr[i][j], cost);
    }
  }
}

for (let i = 1; i <= n; i += 1) {
  let result = '';
  for (let j = 1; j <= n; j += 1) {
    if (arr[i][j] === Infinity) result += 0 + ' ';
    else result += arr[i][j] + ' ';
  }
  console.log(result);
}
