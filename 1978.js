const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0].trim();
const data = input[1].split(" ").map(Number);
let cnt = 0;

for (let i = 0; i < n; i += 1) {
  const num = data[i];
  let isDemical = true;
  for (let j = 2; j < num; j += 1) {
    if (num % j === 0) isDemical = false;
  }
  if (num !== 1 && isDemical) cnt++;
}
console.log(cnt);
