const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
const arr = input[1].split(" ").map(Number);
console.log(Math.min(...arr), Math.max(...arr));
