const input = require("fs").readFileSync("input.txt").toString().split("\n");

const [m, n] = input.map(Number);
let sum = 0;
let cnt = 0;
let min = 0;

for (let i = m; i <= n; i += 1) {
  let isPrime = true;
  for (let j = 2; j < i; j += 1) {
    if (i % j === 0) {
      isPrime = false;
      break;
    } else {
      continue;
    }
  }
  if (isPrime) {
    sum += i;
    cnt += 1;
    if (cnt === 1) min = i;
  }
}

if (m < 2) {
  cnt--;
  sum -= 1;
  min = 2;
}
console.log(cnt === 0 ? -1 : `${sum}\n${min}`);
