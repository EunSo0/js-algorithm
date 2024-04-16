const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");
const n = +input[0];
const arrA = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const arrB = input[2]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);
let answer = 0;

for (let i = 0; i < n; i += 1) {
  answer += arrA[i] * arrB[i];
}
console.log(answer);
