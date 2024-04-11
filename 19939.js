const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ");

const [n, k] = input.map(Number);
const sum = (k * (k + 1)) / 2;

if (n - sum < 0) {
  console.log(-1);
  return;
}

if ((n - sum) % k === 0) console.log(k - 1);
else console.log(k);