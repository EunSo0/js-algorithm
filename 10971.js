const input = require("fs").readFileSync("input.txt").toString().split("\n");
const n = +input.shift();
const arr = [];
const numArr = Array.from({ length: n }, (_, i) => i + 1);
const visited = Array(n).fill(false);
let select = [];
let min = 10000001;

for (let i = 0; i < n; i += 1) {
  const array = input[i].split(" ").map(Number);
  arr.push(array);
}

function dfs(depth) {
  if (depth === n) {
    select.push(select[0]);
    let sum = 0;
    for (let i = 0; i < n; i += 1) {
      if (arr[select[i]][select[i + 1]] === 0) {
        console.log(select);
        select.pop();
        return;
      }
      sum += arr[select[i]][select[i + 1]];
    }
    min = Math.min(min, sum);
    select.pop();
    return;
  }
  for (let i = 0; i < arr.length; i += 1) {
    if (visited[i]) continue;
    select.push(numArr[i] - 1);
    visited[i] = true;
    dfs(depth + 1);
    select.pop();
    visited[i] = false;
  }
}
dfs(0);
console.log(min);
