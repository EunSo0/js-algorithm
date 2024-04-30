const input = require("fs").readFileSync("input.txt").toString().trim();

const [n, m] = input.split(" ").map(Number);
const arr = Array.from({ length: n }, (_, i) => i + 1);
const visited = new Array(n).fill(false);
const selected = [];

function dfs(depth, start) {
  if (depth === m) {
    let result = "";
    for (let i of selected) result += i + " ";
    console.log(result);
    return;
  }
  for (let i = start; i < arr.length; i += 1) {
    if (visited[i]) continue;
    selected.push(arr[i]);
    visited[i] = true;
    dfs(depth + 1, i + 1);
    selected.pop();
    visited[i] = false;
  }
}
dfs(0, 0);
