const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const T = +input[0];
let zero;
let one;
const d = new Array(100).fill(0);
d[0] = 0;
d[1] = 1;

for (let i = 2; i <= 40; i += 1) {
  d[i] = d[i - 1] + d[i - 2];
}

for (let i = 1; i <= T; i += 1) {
  const N = +input[i];

  if (N === 0) console.log(1, 0);
  else console.log(d[N - 1], d[N]);
}
