const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.shift().split(" ").map(Number);
const arr = [];

for (let i = 0; i <= n; i += 1) {
  arr[i] = [];
}
for (let i = 0; i < n - 1; i += 1) {
  const [x, y, cost] = input[i].split(" ").map(Number);
  arr[x].push([y, cost]);
  arr[y].push([x, cost]);
}

console.log(arr);

let length = 0;
for (let i = n - 1; i < m + n - 1; i += 1) {
  length = 0;
  const [x, y] = input[i].split(" ").map(Number);
  console.log(x, y);
}

function dfs(x, depth) {
  if (visited[x]) return;
  visited[x] = true;
  
}
