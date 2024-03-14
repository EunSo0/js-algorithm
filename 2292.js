const input = require("fs").readFileSync("input.txt").toString().trim();
const n = +input;
let find = n;
let i = 1;

while (true) {
  find -= (i - 1) * 6;
  if (find === 1 || find <= 0) break;
  i++;
}

console.log(i);
