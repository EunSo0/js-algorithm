const input = require("fs").readFileSync("input.txt").toString().trim();

const [n, m] = input.split(" ").map(Number);
const arr = Array.from({ length: n }, (_, i) => i + 1);
const selected = [];
let answer = "";

function dfs(depth) {
  if (depth === m) {
    let result = "";
    for (let i of selected) result += i + " ";
    answer += result + "\n";
    return;
  }
  for (let i = 0; i < arr.length; i += 1) {
    selected.push(arr[i]);
    dfs(depth + 1);
    selected.pop();
  }
}
dfs(0);
console.log(answer);
