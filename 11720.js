const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const number = input[1];
console.log(number.split("").reduce((a, b) => a + Number(b), 0));
