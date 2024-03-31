const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ");
const arr = input.map(Number);
console.log(...arr.sort((a, b) => a - b));
