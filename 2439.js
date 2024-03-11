const input = require("fs").readFileSync("input.txt").toString().split("\n");
let answer = "";
for (let i = 1; i <= Number(input[0]); i += 1) {
  for (let j = 0; j < Number(input[0]) - i; j += 1) {
    answer += " ";
  }
  for (let l = 0; l < i; l += 1) {
    answer += "*";
  }
  answer += "\n";
}
console.log(answer);
