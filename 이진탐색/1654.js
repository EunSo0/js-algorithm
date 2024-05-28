const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
const [k, n] = input.shift().split(" ").map(Number);
const arr = input.map(Number).sort((a, b) => a - b);

let first = 1;
let last = arr[k - 1];

let result = 0;
while (first <= last) {
  let mid = Math.floor((first + last) / 2);
  let sum = 0;
  for (let i = 0; i < k; i += 1) {
    sum += Math.floor(arr[i] / mid);
  }
  if (sum < n) {
    last = mid - 1;
  } else {
    result = mid;
    first = mid + 1;
  }
}
console.log(result);
