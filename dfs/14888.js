const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const n = +input[0];
const number = input[1].split(' ').map(Number);
const operatorN = input[2].split(' ').map(Number);
const operator = [];

for (let i = 0; i < 4; i += 1) {
  for (let j = 0; j < operatorN[i]; j += 1) {
    i === 0 && operator.push('+');
    i === 1 && operator.push('-');
    i === 2 && operator.push('*');
    i === 3 && operator.push('/');
  }
}

const visited = new Array(n - 1).fill(false);
const selected = [];

let min = 1000000001;
let max = -1000000001;

const dfs = (depth) => {
  if (depth === n - 1) {
    let result = number[0];
    for (let i = 0; i < n - 1; i += 1) {
      if (selected[i] === '+') result += number[i + 1];
      if (selected[i] === '-') result -= number[i + 1];
      if (selected[i] === '*') result *= number[i + 1];
      if (selected[i] === '/') result = ~~(result / number[i + 1]);
    }
    min = Math.min(min, result);
    max = Math.max(max, result);
  }
  for (let i = 0; i < n - 1; i += 1) {
    if (visited[i]) continue;
    selected.push(operator[i]);
    visited[i] = true;
    dfs(depth + 1);
    visited[i] = false;
    selected.pop();
  }
};

dfs(0);
console.log(max);
console.log(min);
