const input = require("fs").readFileSync("input.txt").toString().split("\n");
const [a, b] = input.map(Number);

if (a > 0) {
  if (b > 0) console.log("1");
  else console.log("4");
} else {
  if (b > 0) console.log("2");
  else console.log("3");
}
