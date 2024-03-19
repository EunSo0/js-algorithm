const input = require("fs").readFileSync("input.txt").toString().split("\n");
const a = [];
const b = [];

for (let i = 0; i < 3; i += 1) {
  a.push(+input[i].trim().split(" ")[0]);
  b.push(+input[i].trim().split(" ")[1]);
}
a.sort();
b.sort();

if (a[0] === a[1]) {
  if (b[0] == b[1]) {
    console.log(`${a[2]} ${b[2]}`);
  } else {
    console.log(`${a[2]} ${b[0]}`);
  }
} else {
  if (b[0] == b[1]) {
    console.log(`${a[0]} ${b[2]}`);
  } else {
    console.log(`${a[0]} ${b[0]}`);
  }
}
