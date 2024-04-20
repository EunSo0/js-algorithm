const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
const [k, n] = input.shift().split(" ").map(Number);
const arr = input.map(Number).sort((a, b) => a - b);
let result = 0;
