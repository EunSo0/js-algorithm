const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const N = +input[0];
const arr = [];
for (let i = 1; i <= N; i += 1) {
  arr.push(+input[i]);
}

const d = Array(10000).fill(0);
d[0] = arr[0];
d[1] = arr[0] + arr[1];
d[2] = Math.max(arr[0] + arr[1], arr[1] + arr[2], arr[0] + arr[2]);

for (let i = 3; i < N; i += 1) {
  d[i] = d[i - 1];
  d[i] = Math.max(d[i], arr[i] + d[i - 2]);
  d[i] = Math.max(d[i], arr[i] + arr[i - 1] + d[i - 3]);
}

console.log(d[N - 1]);
