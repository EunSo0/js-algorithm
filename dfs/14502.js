const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const [n, m] = input.shift().split(' ').map(Number);
const arr = [];

const selected = [];
const wall = [];
const selected_wall = [];

let max = 0;

for (let i = 0; i < n; i += 1) {
  arr.push(input[i].split(' ').map(Number));
  for (let j = 0; j < m; j += 1) {
    if (arr[i][j] === 0) wall.push([i, j]);
  }
}
const visited_wall = new Array(wall.length).fill(false);

const dfs_wall = (start, depth) => {
  if (depth === 3) {
    selected_wall.push([...selected]);
    return;
  }
  for (let i = start; i < wall.length; i += 1) {
    if (visited_wall[i]) continue;
    selected.push(wall[i]);
    visited_wall[i] = true;
    dfs_wall(i + 1, depth + 1);
    selected.pop();
    visited_wall[i] = false;
  }
};

dfs_wall(0, 0);

const dfs = (x, y) => {
  const dx = [0, 0, -1, 1];
  const dy = [1, -1, 0, 0];
  for (let i = 0; i < 4; i += 1) {
    let ax = x + dx[i];
    let ay = y + dy[i];
    if (ax >= 0 && ax < n && ay >= 0 && ay < m) {
      if (graph[ax][ay] === 0) {
        graph[ax][ay] = 2;
        dfs(ax, ay);
      }
    }
  }
};

for (let i = 0; i < selected_wall.length; i += 1) {
  graph = arr.map((x) => [...x]);
  for (let j = 0; j < 3; j += 1) {
    const [n, m] = selected_wall[i][j];
    graph[n][m] = 1;
  }

  for (let a = 0; a < n; a += 1) {
    for (let b = 0; b < m; b += 1) {
      if (graph[a][b] === 2) dfs(a, b, graph);
    }
  }

  let cnt = 0;
  for (let a = 0; a < n; a += 1) {
    for (let b = 0; b < m; b += 1) {
      if (graph[a][b] === 0) cnt++;
    }
  }

  max = Math.max(max, cnt);
}

console.log(max);
