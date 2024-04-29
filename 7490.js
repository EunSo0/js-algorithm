const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const t = +input.shift();
let arr = [];
let n = 0;

for (let i = 0; i < t; i += 1) {
  n = +input[i];
  arr = [];
  for (let j = 1; j <= n; j += 1) arr.push(j);
  dfs([], 0);
  console.log();
}

function dfs(selected, depth) {
  if (depth === n - 1) {
    let str = "";
    for (let i = 0; i < n - 1; i += 1) str += arr[i] + selected[i];
    str += arr[n - 1];
    if (eval(str.split(" ").join("")) === 0) console.log(str);
    return;
  }
  for (let x of [" ", "+", "-"]) {
    selected.push(x);
    dfs(selected, depth + 1);
    selected.pop();
  }
}
