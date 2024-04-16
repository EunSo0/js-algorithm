const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
const [n, m] = input[0].split(" ").map(Number);
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let result = 0;
let start = 0;
let end = arr[n - 1];

while (start <= end) {
  let total = 0;
  let mid = Math.floor((end + start) / 2);
  for (a of arr) {
    if (a > mid) total += a - mid;
  }
  if (total < m) end = mid - 1;
  else {
    result = mid;
    start = mid + 1;
  }
}
console.log(result);
