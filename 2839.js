const input = require("fs").readFileSync("input.txt").toString().trim();
let n = +input;
let answer = 0;
let isDiv = false;

if (n % 5 === 0) {
  console.log(n / 5);
  return;
}

while (n > 0) {
  n -= 3;
  answer += 1;
  if (n % 5 === 0) {
    isDiv = true;
    break;
  }
}

if (isDiv || n === 0) {
  answer += n / 5;
  console.log(answer);
} else {
  console.log(-1);
}
