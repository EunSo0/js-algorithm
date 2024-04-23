const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const k = +input[1];

const a = [];
for (let i = 1; i < n + 1; i += 1) {
  for (let j = 1; j < n + 1; j += 1) {
    a[(i - 1) * n + (j - 1)] = i * j;
  }
}
console.log(a.sort((a, b) => a - b)[k]);
