const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [a, b] = input[0].split(" ").map(Number);
const arr = new Array(a).fill().map((_, i) => i + 1);

for (let i = 0; i < b; i += 1) {
  const [n, m] = input[i + 1].split(" ").map(Number);
  console.log(n, m);
  const re = arr.slice(n - 1, m).reverse();
  arr.splice(n - 1, m - n + 1, ...re);
}
console.log(...arr);
