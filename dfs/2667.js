const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const visited = new Array(n);
const home = [];
const arr = [];
let cnt = 0;
let num = 0;
let result = [];

for (let i = 0; i < n; i += 1) visited[i] = new Array(n).fill(false);
for (let i = 0; i < n; i += 1) {
  arr.push(input[i + 1].split("").map(Number));
  for (let j = 0; j < n; j += 1) {
    if (arr[i][j] === 1) home.push([i, j]);
  }
}

for (let [a, b] of home) {
  if (!visited[a][b]) {
    cnt++;
    dfs(a, b);
    result.push(num + 1);
    num = 0;
  }
}

function dfs(x, y) {
  visited[x][y] = true;
  let dx = [0, 0, -1, 1];
  let dy = [1, -1, 0, 0];
  for (let i = 0; i < 4; i += 1) {
    let ax = x + dx[i];
    let ay = y + dy[i];
    if (ax >= 0 && ay >= 0 && ax < n && ay < n) {
      if (arr[ax][ay] === 1 && !visited[ax][ay]) {
        dfs(ax, ay);
        num++;
      }
    }
  }
}
result.sort((a, b) => a - b);
console.log(cnt);
for (let i of result) console.log(i);
