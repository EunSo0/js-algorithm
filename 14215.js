const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ");
const arr = input.map((x) => +x).sort((a, b) => a - b);

if (arr[0] + arr[1] > arr[2]) {
  console.log(arr[0] + arr[1] + arr[2]);
} else {
  console.log(2 * (arr[0] + arr[1]) - 1);
}
