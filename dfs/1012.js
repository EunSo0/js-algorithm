const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const testCase = +input.shift();
let p = 0;
let m,
  n,
  k = 0;
let graph = [];
let visited = [];

for (let t = 0; t < testCase; t += 1) {
  [m, n, k] = input[p].split(" ").map(Number);
  for (let i = 0; i < n; i += 1) {
    graph[i] = new Array(m).fill(0);
    visited[i] = new Array(m).fill(0);
  }
  for (let i = p + 1; i <= k + p; i += 1) {
    const [y, x] = input[i].split(" ").map(Number);
    graph[x][y] = 1;
  }
  let cnt = 0;

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < m; j += 1) {
      if (graph[i][j] === 1 && visited[i][j] === 0) {
        dfs(i, j);
        cnt++;
      }
    }
  }
  console.log(cnt);
  p += k + 1;
}

function dfs(x, y) {
  visited[x][y] = 1;
  let dx = [0, 0, -1, 1];
  let dy = [1, -1, 0, 0];
  for (let i = 0; i < 4; i += 1) {
    let ax = x + dx[i];
    let ay = y + dy[i];
    if (ax >= 0 && ax < n && ay >= 0 && ay < m) {
      if (graph[ax][ay] === 1 && visited[ax][ay] === 0) {
        dfs(ax, ay);
      }
    }
  }
}
