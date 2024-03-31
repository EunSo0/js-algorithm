const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const arr = input[1].split(" ").map(Number);
const arr_sorted = [...arr].sort((a, b) => a - b);
const rank = [...new Set(arr_sorted)];

let map = new Map();
for (let i = 0; i < rank.length; i++) {
  map.set(rank[i], i);
}

answer = "";
for (a of arr) answer += map.get(a) + " ";
console.log(answer);
