const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
const arr = input.map(Number);
arr.shift();
arr.sort((a, b) => a - b);
for (s of arr) {
  console.log(s);
}
