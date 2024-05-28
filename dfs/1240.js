const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
const graph = [];

for (let i = 0; i <= n; i += 1) graph[i] = [];
for (let i = 1; i < n; i += 1) {
  const [x, y, cost] = input[i].split(" ").map(Number);
  graph[x].push([y, cost]);
  graph[y].push([x, cost]);
}

function dfs(x, dist) {
  if (visited[x]) return;
  visited[x] = true;
  distance[x] = dist;
  for (let [y, cost] of graph[x]) dfs(y, dist + cost);
}

for (let i = 0; i < m; i += 1) {
  const [a, b] = input[i + n].split(" ").map(Number);
  distance = new Array(n + 1).fill(-1);
  visited = new Array(n + 1).fill(false);
  dfs(a, 0);
  console.log(distance[b]);
}
