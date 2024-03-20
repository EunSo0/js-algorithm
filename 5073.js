const input = require("fs").readFileSync("input.txt").toString().split("\n");
let i = 0;

while (true) {
  const num = new Set();
  const [a, b, c] = input[i].trim().split(" ").map(Number);

  if (a === 0 && b === 0 && c === 0) break;

  let sum = a + b + c;
  num.add(a);
  num.add(b);
  num.add(c);

  if (sum - Math.max(a, b, c) > Math.max(a, b, c)) {
    if (num.size === 1) {
      console.log("Equilateral");
    } else if (num.size === 2) {
      console.log("Isosceles");
    } else {
      console.log("Scalene");
    }
  } else {
    console.log("Invalid");
  }
  i++;
}
