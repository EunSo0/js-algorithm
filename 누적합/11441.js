const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const n = +input[0];
const arr = input[1].split(' ').map(Number);
const m = +input[2];

let sum = 0;
const prefixSum = [0];
for (let i = 0; i < n; i += 1) {
  sum += arr[i];
  prefixSum.push(sum);
}

let result = '';
for (let i = 0; i < m; i += 1) {
  const [a, b] = input[i + 3].split(' ').map(Number);

  result += prefixSum[b] - prefixSum[a - 1] + '\n';
}
console.log(result);
