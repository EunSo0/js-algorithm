const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const n = +input[0];
const arr = input[1].split(' ').map(Number);

const visited = new Array(n).fill(false);
const selected = [];
let max = 0;

const dfs = (depth) => {
  if (depth === n) {
    let sum = 0;
    for (let i = 0; i < n - 1; i += 1) {
      sum += Math.abs(selected[i] - selected[i + 1]);
    }
    max = Math.max(max, sum);
  }
  for (let i = 0; i < n; i += 1) {
    if (visited[i]) continue;
    visited[i] = true;
    selected.push(arr[i]);
    dfs(depth + 1);
    visited[i] = false;
    selected.pop();
  }
};

dfs(0);
console.log(max);
