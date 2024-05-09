const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.shift().split(" ").map(Number);

const selected = [];
const chicken = [];
const home = [];
let result = Number.MAX_VALUE;

for (let i = 0; i < n; i += 1) {
  const arr = input[i].split(" ").map(Number);
  for (let j = 0; j < n; j += 1) {
    if (arr[j] === 1) home.push([i + 1, j + 1]);
    if (arr[j] === 2) chicken.push([i + 1, j + 1]);
  }
  visited = new Array(chicken.length).fill(false);
}

function dfs(depth, start) {
  if (depth === m) {
    let len = 0;
    for (let [a, b] of home) {
      let min = Number.MAX_VALUE;
      for (let [x, y] of selected) {
        min = Math.min(min, Math.abs(a - x) + Math.abs(b - y));
      }
      len += min;
    }
    result = Math.min(result, len);
    return;
  }
  for (let i = start; i < chicken.length; i += 1) {
    if (visited[i]) continue;
    selected.push(chicken[i]);
    visited[i] = true;
    dfs(depth + 1, i + 1);
    selected.pop();
    visited[i] = false;
  }
}

dfs(0, 0);
console.log(result);
