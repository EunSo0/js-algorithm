const input = require("fs").readFileSync("input.txt").toString().trim();
const num = +input;
let n = num;
let i = 0;

while (true) {
  n -= i;
  if (n <= 0) break;
  i++;
}

const a = (i * (i + 1)) / 2 - num;
if (i % 2 === 0) {
  console.log(`${i - a}/${a + 1}`);
} else {
  console.log(`${a + 1}/${i - a}`);
}
