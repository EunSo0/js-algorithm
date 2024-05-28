const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const arr = [];
for (let i = 0; i < +input[0]; i += 1) {
  arr.push(input[i + 1].split(" ").map(Number));
}

arr.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
});

let answer = "";
for (let i = 0; i < arr.length; i += 1) {
  answer += `${arr[i][0]} ${arr[i][1]}\n`;
}
console.log(answer);
