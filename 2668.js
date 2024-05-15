const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();
const arr = [0, ...input.map(Number)];
const visited = new Array(n + 1).fill(false);
const finished = new Array(n + 1).fill(false);
const answer = [];

for (let i = 1; i <= n; i += 1) {
  if (!visited[i]) dfs(i);
}

function dfs(x) {
  const result = [];
  visited[x] = true;
  let y = arr[x];
  if (!visited[y]) dfs(y);
  else if (!finished[y]) {
    while (x !== y) {
      result.push(y);
      y = arr[y];
    }
    result.push(x);
  }
  finished[x] = true;
  answer.push(result);
}

const result = [];
for (let a of answer) {
  for (let b of a) {
    result.push(b);
  }
}
result.sort((a, b) => a - b);
console.log(result.length);
for (let c of result) {
  console.log(c);
}
