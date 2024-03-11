const input = require("fs").readFileSync("input.txt").toString().split("\n");
let total = 0;

for (let i = 2; i <= Number(input[1]) + 1; i += 1) {
  const [a, b] = input[i].split(" ").map(Number);
  total += a * b;
}
Number(input[0]) === total ? console.log("Yes") : console.log("No");
