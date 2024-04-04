const input = require("fs").readFileSync("input.txt").toString().trim();

const arr = input.split("-");
let answer = 0;

for (let i = 0; i < arr.length; i += 1) {
  const a = arr[i].split("+").map(Number);
  const sum = a.reduce((a, b) => a + b, 0);
  i === 0 ? (answer += sum) : (answer -= sum);
}

console.log(answer);
