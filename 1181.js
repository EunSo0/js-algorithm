const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

input.shift();
arr = [...new Set(input)];
arr.sort((a, b) => {
  if (a.length === b.length) {
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
  } else {
    return a.length - b.length;
  }
});

let answer = "";
for (a of arr) {
  answer += a + "\n";
}
console.log(answer);
