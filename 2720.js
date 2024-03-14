const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];

for (let i = 0; i < n; i += 1) {
  const num = +input[i + 1];
  console.log(
    Math.floor(num / 25),
    Math.floor((num % 25) / 10),
    Math.floor(((num % 25) % 10) / 5),
    Math.floor(((num % 25) % 10) % 5)
  );
}
