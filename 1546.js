const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const num = Number(input[0]);
const score = input[1].split(" ").map(Number);
const max = Math.max(...score);
const newScore = score.map((v) => (v / max) * 100);

console.log(newScore.reduce((a, b) => a + b) / num);
