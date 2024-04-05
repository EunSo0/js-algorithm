const input = require("fs").readFileSync("input.txt").toString().trim();
console.log(input);
let i = 0;
let sum = 0;

while (sum < input) {
  i++;
  sum += i;
}
console.log(i - 1);
