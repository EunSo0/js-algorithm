const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const km = input[1].split(" ").map(Number);
const won = input[2].split(" ").map(Number);
const arr = [];
let min = won[0];
for (let i = 0; i < n - 1; i += 1) {
  if (min > won[i]) {
    min = won[i];
  }
  arr.push(min);
}

let result = BigInt(0);
for (let i = 0; i < n - 1; i += 1) {
  result += BigInt(arr[i]) * BigInt(km[i]);
}
console.log(String(result));
