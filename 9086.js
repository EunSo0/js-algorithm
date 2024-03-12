const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
const n = +input[0];
for (let i = 0; i < n; i += 1) {
  const str = input[i + 1].trim();
  console.log(`${str.charAt(0)}${str.charAt(str.length - 1)}`);
}
