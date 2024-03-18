const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

let result = "";
let i = 0;
while (true) {
  const [a, b] = input[i].trim().split(" ").map(Number);
  if (a === 0 && b === 0) break;

  if (b % a === 0) result += "factor\n";
  else if (a % b === 0) result += "multiple\n";
  else result += "neither\n";

  i++;
}
console.log(result);
