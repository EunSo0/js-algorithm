const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
const arr = input.map(Number);

const set = new Set();
for (let i = 0; i < arr.length; i += 1) {
  set.add(Number(arr[i]) % 42);
}
console.log(set.size);
