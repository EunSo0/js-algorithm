const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

console.log(input[0].charCodeAt());
