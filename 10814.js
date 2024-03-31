const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const n = input[0];
const arr = [];
for (let i = 0; i < n; i += 1) {
  arr.push(input[i + 1].split(" "));
}

arr.sort((a, b) => a[0] - b[0]);
answer = "";
for (let i = 0; i < n; i += 1) {
  answer += `${arr[i][0]} ${arr[i][1]}\n`;
}
console.log(answer);
