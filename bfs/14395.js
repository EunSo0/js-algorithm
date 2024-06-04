const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

let [s, t] = input[0].split(' ').map(Number);
let found = false;
const queue = [[s, '']];
const visited = new Set([s]);

if (s === t) {
  console.log(0);
  return;
}

while (queue.length !== 0) {
  let [value, op] = queue.shift();
  if (value > 1000000000) continue;
  if (value === t) {
    console.log(op);
    found = true;
    break;
  }
  for (let o of ['*', '+', '-', '/']) {
    let nextValue;
    if (o === '+') nextValue = value + value;
    if (o === '-') nextValue = 0;
    if (o === '*') nextValue = value * value;
    if (o === '/' && value !== 0) nextValue = 1;
    if (!visited.has(nextValue)) {
      queue.push([nextValue, op + o]);
      visited.add(nextValue);
    }
  }
}

if (!found) console.log(-1);
