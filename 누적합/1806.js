const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const [n, s] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let sum = arr[0];
let start = 0;
let end = 0;
let result = 1000000000;
while (true) {
  while (end < n - 1 && sum < s) {
    end++;
    sum += arr[end];
  }
  if (sum >= s) {
    result = Math.min(result, end - start + 1);
  }
  sum -= arr[start];
  start++;
  if (start >= n) break;
}
if (result === 1000000000) result = 0;
console.log(result);
