const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
const arr = input[1].split(" ").filter((x) => +x < +input[0].split(" ")[1]);
let result = "";
for (let i = 0; i < arr.length; i += 1) result += arr[i] + " ";
console.log(result);
