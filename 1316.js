const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
let arr = [];
let cnt = 0;

for (let i = 0; i < n; i += 1) {
  const str = input[i + 1].trim();
  for (let s of str) {
    if (arr.length == 0) {
      arr.push(s);
    }
    let last = [...arr].pop();
    if (last !== s) {
      if (arr.includes(s)) {
        cnt++;
        break;
      } else {
        arr.push(s);
      }
    }
  }
  arr = [];
}

console.log(n - cnt);
