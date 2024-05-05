const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const arr = input[1].split(" ");
const visited = Array(10).fill(false);
const select = [];
let current = "";
let first = "";

function dfs(depth) {
  if (depth === n + 1) {
    let check = true;
    for (let i = 0; i < n; i += 1) {
      if (arr[i] === "<") {
        if (select[i] > select[i + 1]) check = false;
      } else if (arr[i] === ">") {
        if (select[i] < select[i + 1]) check = false;
      }
    }
    if (check) {
      current = "";
      for (let x of select) current += x + "";
      if (first === "") first = current;
    }
    return;
  }
  for (let i = 0; i < 10; i += 1) {
    if (visited[i]) continue;
    select.push(i);
    visited[i] = true;
    dfs(depth + 1);
    select.pop();
    visited[i] = false;
  }
}

dfs(0);

console.log(current);
console.log(first);
