const n = +require("fs").readFileSync("input.txt").toString().trim();
const arr = Array.from({ length: n }, (_, i) => i + 1);
const selected = [];
const visited = new Array(n).fill(false);
let answer = "";

function dfs(depth) {
  let result = [];
  if (depth === n) {
    for (let i of selected) result.push(i);
    for (let x of result) answer += x + " ";
    answer += "\n";
  }
  for (let i = 0; i < n; i += 1) {
    if (visited[i]) continue;
    selected.push(arr[i]);
    visited[i] = true;
    dfs(depth + 1);
    selected.pop();
    visited[i] = false;
  }
}

dfs(0);
console.log(answer);
