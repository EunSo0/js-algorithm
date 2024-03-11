const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
let i = 0;
for (let i = 0; i < input.length; i += 1) {
  const [a, b] = input[i].split(" ").map(Number);
  console.log(a + b);
}
