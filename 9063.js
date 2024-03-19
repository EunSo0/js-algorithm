const input = require("fs").readFileSync("input.txt").toString().split("\n");
const n = +input[0];
const x = [];
const y = [];

for (let i = 0; i < n; i += 1) {
  x.push(+input[i + 1].trim().split(" ")[0]);
  y.push(+input[i + 1].trim().split(" ")[1]);
}
console.log(
  n > 1
    ? (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y))
    : 0
);
