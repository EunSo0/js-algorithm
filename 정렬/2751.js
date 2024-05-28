const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
const arr = input.map(Number);
arr.shift();
arr.sort((a, b) => a - b);
let answer = "";
for (s of arr) {
  answer += s + "\n";
}
console.log(answer);
