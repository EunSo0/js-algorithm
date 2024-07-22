const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
const mod = Array(m).fill(0);

let sum = 0;

for (let i = 0; i < n; i += 1) {
  sum += arr[i];
  mod[sum % m]++;
}

let result = 0;
for (let i = 0; i < m; i += 1) {
  if (i === 0) {
    result = mod[i] + (mod[i] * (mod[i] - 1)) / 2;
  } else result += (mod[i] * (mod[i] - 1)) / 2;
}

console.log(result);
