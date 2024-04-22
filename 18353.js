const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();
const arr = input[0].split(" ").map(Number).reverse();
const a = [0];

for (let x of arr) {
  if (a[a.length - 1] < x) a.push(x);
  else {
    let start = 0;
    let end = a.length - 1;
    while (start < end) {
      const mid = Math.floor((start + end) / 2);
      if (a[mid] >= x) end = mid;
      else start = mid + 1;
    }
    a[end] = x;
  }
}

console.log(n - (a.length - 1));
