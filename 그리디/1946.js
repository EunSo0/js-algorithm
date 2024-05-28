const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
const t = +input[0];
let line = 1;
let answer = "";

for (let i = 0; i < t; i += 1) {
  const arr = [];
  n = +input[line];
  for (let j = line + 1; j <= line + n; j += 1) {
    arr.push(input[j].split(" ").map(Number));
  }
  arr.sort((a, b) => a[0] - b[0]);

  let minValue = 100001;
  let pass = 0;
  for (let [x, y] of arr) {
    if (y < minValue) {
      minValue = y;
      pass += 1;
    }
  }
  answer += `${pass}\n`;
  line += n + 1;
}
console.log(answer);
