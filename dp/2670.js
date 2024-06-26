const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const arr = input.map(Number);
const n = arr.shift();

const max = [];

for (let i = 0; i < n - 1; i += 1) {
  max[i] = arr[i];
  let mul = arr[i];
  for (let j = i + 1; j < n; j += 1) {
    if (arr[j] === 0) break;
    mul = mul * arr[j];
    max[i] = Math.max(max[i], mul);
  }
}

const result = Math.max(...max);
console.log(result.toFixed(3));
