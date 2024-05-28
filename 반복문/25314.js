const input = require("fs").readFileSync("input.txt").toString().split("\n");
const num = Number(input[0]);
let result = "";
for (let i = 0; i < num / 4; i += 1) {
  result += "long ";
}
console.log(result + "int");
