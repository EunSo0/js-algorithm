const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [a, b] = input[0].trim().split(" ");
console.log(
  Math.max(+a.split("").reverse().join(""), +b.split("").reverse().join(""))
);
