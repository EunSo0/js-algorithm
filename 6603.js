const input = require("fs").readFileSync("input.txt").toString().split("\n");

while (true) {
  if (+input === 0) break;
  const arr = input.shift().split(" ").map(Number);
  const n = arr.shift();
  const visited = Array(n).fill(false);
  const selected = [];

  dfs(0, arr, visited, selected, 0);
  console.log();
}

function dfs(start, array, isVisited, s, depth) {
  if (depth === 6) {
    let result = "";
    for (let x of s) result += x + " ";
    console.log(result);
    return;
  }
  for (let i = start; i < array.length; i += 1) {
    if (isVisited[i]) continue;
    s.push(array[i]);
    isVisited[i] = true;
    dfs(i + 1, array, isVisited, s, depth + 1);
    s.pop();
    isVisited[i] = false;
  }
}
