const input = require("fs").readFileSync(0).toString().trim().split("\n");
const n = +input.shift();
const arr = [];
for (let i = 0; i < n; i += 1) {
  arr.push(input[i].split(" ").map(Number));
}

arr.sort((a, b) => {
  if (a[1] === b[1]) {
    a[0] - b[0];
  } else {
    a[1] - b[1];
  }
});

let cur = 0;
let cnt = 1;
for (let i = 1; i < n; i += 1) {
  if (arr[i][0] >= arr[cur][1]) {
    cur = i;
    cnt++;
  }
}
console.log(cnt);
