const input = require("fs").readFileSync("input.txt").toString().trim();

const alpha = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
let data = input;
let cnt = 0;

for (al of alpha) {
  while (data.includes(al)) {
    data = data.replace(al, " ");
    cnt++;
  }
}
data = [...data].filter((x) => x !== " ");

console.log(cnt + data.length);
