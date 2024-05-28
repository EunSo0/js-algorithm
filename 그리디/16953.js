const input = require("fs").readFileSync("input.txt").toString().trim();
let [a, b] = input.split(" ").map(Number);
let cnt = 1;

while (true) {
  if (b.toString().slice(-1) === "1") {
    b = +b.toString().slice(0, -1);
  } else {
    b /= 2;
  }
  cnt++;
  if (a === b) break;
  else if (a > b) {
    console.log(-1);
    return;
  }
}

console.log(cnt);
