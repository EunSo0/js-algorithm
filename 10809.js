const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

let result = "";

for (let i = "a".charCodeAt(); i <= "z".charCodeAt(); i++) {
  result += input[0].indexOf(String.fromCharCode(i)) + " ";
}

console.log(result);
