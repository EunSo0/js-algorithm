const input = require("fs").readFileSync("input.txt").toString().trim();

const n = +input;
let result = 2;

for (let i = 0; i < n; i += 1) {
  result += Math.pow(2, i);
}

console.log(Math.pow(result, 2));
