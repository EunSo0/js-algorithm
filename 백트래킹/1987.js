const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [r, c] = input[0].split(" ").map(Number);
const arr = [];
for (let i = 1; i <= r; i += 1) arr.push(input[i]);

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];
const visited = new Set();
let max = 0;

function dfs(depth, x, y) {
  max = Math.max(max, depth);
  for (let i = 0; i < 4; i += 1) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (nx < 0 || nx >= r || ny < 0 || ny >= c) continue;
    if (visited.has(arr[nx][ny])) continue;
    visited.add(arr[nx][ny]);
    dfs(depth + 1, nx, ny);
    visited.delete(arr[nx][ny]);
  }
}

visited.add(arr[0][0]);
dfs(1, 0, 0);
console.log(max);
