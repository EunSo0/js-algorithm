const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

let grade = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
};

let score = 0;
let total = 0;

for (let i = 0; i < input.length; i += 1) {
  const [a, b, c] = input[i].split(" ");
  if (c.trim() !== "P") {
    total += +b;
    score += grade[c.trim()] * +b;
  }
}
console.log(score / total);
