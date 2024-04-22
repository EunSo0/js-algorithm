const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
const n = +input[0];
const arr1 = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const arr2 = input[3].split(" ").map(Number);

let result = "";

for (x of arr2) {
  let start = 0;
  let end = n;
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (arr1[mid] > x) end = mid;
    else start = mid + 1;
  }

  let start2 = 0;
  let end2 = n;
  while (start2 < end2) {
    const mid = Math.floor((start2 + end2) / 2);
    if (arr1[mid] >= x) end2 = mid;
    else start2 = mid + 1;
  }
  result += end - end2 + " ";
}

console.log(result);
