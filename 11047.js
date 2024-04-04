const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
let [n, k] = input[0].split(" ").map(Number);
input.shift();
const arr = input.map(Number);
let count = 0;

for (let i = n - 1; i >= 0; i -= 1) {
  count += Math.floor(k / arr[i]);
  k = k % arr[i];
  if (k === 0) break;
}

console.log(count);
