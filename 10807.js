const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
const arr = input[1].split(" ").filter((n) => n === input[2]);
console.log(arr.length);
