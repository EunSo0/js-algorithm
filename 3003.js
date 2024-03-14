const input = require("fs").readFileSync("input.txt").toString().trim();

const data = input.split(" ");
const chess = [1, 1, 2, 2, 2, 8];
let result = "";

for (let i = 0; i < 6; i += 1) {
  result += chess[i] - data[i] + " ";
}

console.log(result);
