const input = require("fs").readFileSync("input.txt").toString().split("\n");
const c = +input[0];

for (let i = 0; i < c; i += 1) {
  const arr = input[i + 1].trim().split(" ");
  const n = arr.shift();
  const average = arr.reduce((a, b) => a + Number(b), 0) / n;
  const percent = (arr.filter((v) => v > average).length / n) * 100;
  console.log(percent.toFixed(3) + "%");
}
