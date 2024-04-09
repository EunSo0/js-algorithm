const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const t = input.shift();
const arr = input.map(Number);
let result = "";

function fi(n) {
  let arr = [0, 1];
  let f = (n) => {
    if (arr[n] !== undefined) return arr[n];
    arr[n] = f(n - 1) + f(n - 2);
    return arr[n];
  };

  return f(n);
}
const fibo = [0, 1];
i = 2;

while (fibo[fibo.length - 1] < 1000000000) {
  fibo.push(fi(i));
  i++;
}
for (let i = 0; i < t; i += 1) {
  const answer = [];
  let num = arr[i];
  let fl = fibo.length - 1;
  while (num > 0) {
    if (fibo[fl] <= num) {
      num -= fibo[fl];
      answer.push(fibo[fl]);
    }
    fl--;
  }
  answer.sort((a, b) => a - b).map(x => result += x + " ");
  result += "\n";
}
console.log(result);
