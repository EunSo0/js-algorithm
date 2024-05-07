const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
const n = Number(input[0]);
const m = Number(input[1]);
let graph = [];
for (let i = 0; i <= n; i += 1) graph[i] = [];
for (let i = 2; i <= m + 1; i += 1) {
  let [x, y] = input[i].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}
const visited = Array(n + 1).fill(false);
let cnt = 0;

function dfs(x) {
  visited[x] = true;
  cnt++;
  for (let i of graph[x]) {
    if (!visited[i]) dfs(i);
  }
}
dfs(1);
console.log(cnt - 1);
