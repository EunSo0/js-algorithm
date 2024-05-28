const input = require("fs").readFileSync("input.txt").toString().trim();
const [a, b] = input.split(" ").map(Number);
let cnt = 0;

for (let i = 1; i <= a; i += 1) {
  if (a % i === 0) {
    cnt++;
    if (cnt == b) {
      console.log(i);
      break;
    }
  }
}
if (cnt < b) console.log(0);
