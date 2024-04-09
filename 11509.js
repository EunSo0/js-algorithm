const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
const n = +input[0];
const arr = input[1].split(" ").map(Number);

let cnt = 0;
let height = 0;

for (let i = 0; i < n; i += 1) {
  if (arr[i] !== 0) height = arr[i] - 1;
  else continue;
  
  for (let j = i + 1; j < n; j += 1) {
    if (height === arr[j]) {
      height -= 1;
      arr[j] = 0;
    }
  }
  cnt++;
}
console.log(cnt);
