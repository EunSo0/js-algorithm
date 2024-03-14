const input = require("fs").readFileSync("input.txt").toString().trim();

let n = +input;
let i = 1;

while (true) {
  n -= i;
  if ((n === 1) | (n <= 0)) break;
  i++;
}

console.log((i * (i + 1)) / 2 - n);

// 1 / 1
// 1 / 2
// 2 / 1
// 3 / 1
// 2 / 2
// 1 / 3
// 1 / 4
// 2 / 3
// 3 / 2
// 4 / 1
