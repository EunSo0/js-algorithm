const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const m = +input[2];

let start = 1;
let end = arr[n - 1];
let result = 0;

while (start < end) {
  let total = 0;
  let mid = Math.floor((start + end) / 2);
  console.log(mid);
  for (x of arr) {
    total += Math.min(x, mid);
  }
  if (m >= total) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}
console.log(result);
