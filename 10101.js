const input = require("fs").readFileSync("input.txt").toString().split("\n");

let sum = 0;
const num = new Set();

for (let i = 0; i < 3; i++) {
  num.add(+input[i].trim());
  sum += +input[i].trim();
}

if (sum === 180) {
  if (num.size === 1) {
    console.log("Equilateral");
  } else if (num.size === 2) {
    console.log("Isosceles");
  } else {
    console.log("Scalene");
  }
} else {
  console.log("Error");
}
