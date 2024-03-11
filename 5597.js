const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const origin = new Array(30).fill().map((v, i) => i + 1);
const arr = input.map(Number).sort((a, b) => a - b);
const answer = origin.filter((v) => !arr.includes(v));

console.log(answer[0]);
console.log(answer[1]);
