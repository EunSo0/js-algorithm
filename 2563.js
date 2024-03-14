const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
let arr = [];

for (let i = 0; i < n; i += 1) {
  const [a, b] = input[i + 1].split(" ").map(Number);
  arr.push([a, b, a + 10, b + 10]);
}
console.log(arr);
