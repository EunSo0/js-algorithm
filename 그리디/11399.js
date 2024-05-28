const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();
const arr = input[0].split(" ").map(Number);
arr.sort((a, b) => a - b);
let result = 0;

for (let i = 0; i < n; i += 1) {
  let sum = 0;
  for (let j = 0; j <= i; j += 1) {
    sum += arr[j];
  }
  result += sum;
}

console.log(result);
