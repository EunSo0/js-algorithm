const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const arr_rgb = [];
const arr_rb = [];
const visited_rgb = new Array(n);
const visited_rb = new Array(n);
let cnt1 = 0;
let cnt2 = 0;

for (let i = 0; i < n; i += 1) {
  arr_rgb.push(input[i + 1].split(""));
  visited_rgb[i] = new Array(n).fill(false);

  let rb = input[i + 1].replaceAll("G", "R");
  arr_rb.push(rb.split(""));
  visited_rb[i] = new Array(n).fill(false);
}

for (let i = 0; i < n; i += 1) {
  for (let j = 0; j < n; j += 1) {
    if (!visited_rgb[i][j]) {
      rgb = arr_rgb[i][j];
      cnt1++;
      dfs(i, j, rgb, arr_rgb, visited_rgb);
    }
    if (!visited_rb[i][j]) {
      rb = arr_rb[i][j];
      cnt2++;
      dfs(i, j, rb, arr_rb, visited_rb);
    }
  }
}

function dfs(x, y, str, arr, visited) {
  visited[x][y] = true;
  let dx = [0, 0, -1, 1];
  let dy = [1, -1, 0, 0];
  for (let i = 0; i < 4; i += 1) {
    let ax = x + dx[i];
    let ay = y + dy[i];
    if (ax >= 0 && ay >= 0 && ax < n && ay < n) {
      if (!visited[ax][ay] && arr[ax][ay] === str)
        dfs(ax, ay, str, arr, visited);
    }
  }
}

console.log(cnt1, cnt2);
