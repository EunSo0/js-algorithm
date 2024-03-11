const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
let arr = new Array(Number(input[0].split(" ")[0])).fill(0);
for (let i = 1; i < Number(input[0].split(" ")[1]) + 1; i += 1) {
  const [a, b, c] = input[i].split(" ").map(Number);
  arr.fill(c, a - 1, b);
}
console.log(...arr);
