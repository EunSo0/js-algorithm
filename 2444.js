const input = require("fs").readFileSync("input.txt").toString().trim();

const n = +input;
let result = "";

for (let i = 0; i < n; i += 1) {
  for (let j = n - i - 1; j > 0; j -= 1) result += " ";
  for (let l = 0; l < 2 * i + 1; l += 1) result += "*";
  result += "\n";
}
for (let i = 0; i < n - 1; i += 1) {
  for (let j = 0; j < i + 1; j += 1) result += " ";
  for (let l = 2 * (n - 1) - 2 * i - 1; l > 0; l -= 1) result += "*";
  result += "\n";
}

console.log(result);
