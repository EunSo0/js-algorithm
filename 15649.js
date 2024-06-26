const input = require("fs").readFileSync("input.txt").toString().trim();

const [n, m] = input.split(" ").map(Number);
const arr = Array.from({ length: n }, (_, i) => i + 1);
const visited = new Array(n).fill(false);
const selected = [];
let answer = "";

function dfs(arr, depth) {
  if (depth === m) {
    let result = [];
    for (let i of selected) result.push(i);
    for (let x of result) answer += x + " ";
    answer += "\n";
  }
  for (let i = 0; i < n; i += 1) {
    if (visited[i]) continue;
    selected.push(arr[i]);
    visited[i] = true;
    dfs(arr, depth + 1);
    selected.pop();
    visited[i] = false;
    
  }
}

dfs(arr, 0);
console.log(answer);
