const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const t = Number(input[0]);
for (let i = 1; i <= 2 * t; i += 2) {
  const n = Number(input[i]);
  arr = [0, ...input[i + 1].split(" ").map(Number)];
  visited = new Array(n + 1).fill(false);
  finished = new Array(n + 1).fill(false);
  result = [];

  for (let x = 1; x <= n; x += 1) {
    if (!visited[x]) {
      dfs(x);
    }
  }
  console.log(n - result.length);
}

function dfs(x) {
  visited[x] = true;
  let y = arr[x];
  if (!visited[y]) dfs(y);
  else if (!finished[y]) {
    while (y != x) {
      result.push(y);
      y = arr[y];
    }
    result.push(x);
  }
  finished[x] = true;
}
