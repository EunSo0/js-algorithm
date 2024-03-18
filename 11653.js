const input = require("fs").readFileSync("input.txt").toString();
let n = +input;
let arr = [];

while (true) {
  let is = false;
  for (i = 2; i < n; i++) {
    if (n % i === 0) {
      is = true;
      n /= i;
      arr.push(i);
      break;
    }
  }
  if (!is) {
    arr.push(n);
    break;
  }
}

if (n > 1) {
  arr.map((x) => console.log(x));
} else console.log();
