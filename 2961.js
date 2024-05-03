const input = require("fs").readFileSync("input.txt").toString().split("\n");
const n = +input.shift();
const select1 = [];
const select2 = [];
const s = [];
const ss = [];
const visited1 = Array(n).fill(false);
const visited2 = Array(n).fill(false);
let min = 10000000001;

for (let i = 0; i < n; i += 1) {
  const [a, b] = input[i].split(" ").map(Number);
  s.push(a);
  ss.push(b);
}

function dfs(depth, m) {
  if (depth === m) {
    let answer1 = 1;
    let answer2 = 0;
    for (let a of select1) answer1 *= a;
    for (let b of select2) answer2 += b;
    min = Math.min(min, Math.abs(answer1 - answer2));
    return;
  }
  for (let i = 0; i < n; i += 1) {
    if (visited1[i] && visited2[i]) continue;
    select1.push(s[i]);
    select2.push(ss[i]);
    visited1[i] = true;
    visited2[i] = true;
    dfs(depth + 1, m);
    select1.pop();
    select2.pop();
    visited1[i] = false;
    visited2[i] = false;
  }
}
for (let i = 1; i <= n; i += 1) {
  dfs(0, i);
}
console.log(min);
