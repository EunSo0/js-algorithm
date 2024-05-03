const n = +require("fs").readFileSync("input.txt").toString().trim();
const queens = [];

function possible(x, y) {
  for (let [a, b] of queens) {
    if (x === a || y === b) return false;
    if (Math.abs(a - x) === Math.abs(b - y)) return false;
  }
  return true;
}

let cnt = 0;
function dfs(row) {
  if (row === n) cnt += 1;
  for (let i = 0; i < n; i += 1) {
    if (!possible(row, i)) continue;
    queens.push([row, i]);
    dfs(row + 1);
    queens.pop();
  }
}
dfs(0);
console.log(cnt);
