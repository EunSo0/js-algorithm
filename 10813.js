const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
let arr = new Array(Number(input[0].split(" ")[0])).fill().map((v, i) => i + 1);
for (let i = 1; i < Number(input[0].split(" ")[1]) + 1; i += 1) {
  const [a, b] = input[i].split(" ").map(Number);
  let tmp = arr[a - 1];
  arr[a - 1] = arr[b - 1];
  arr[b - 1] = tmp;
}
console.log(...arr);
