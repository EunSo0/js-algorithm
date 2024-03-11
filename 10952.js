const input = require("fs").readFileSync("input.txt").toString().split("\n");
for (let i = 0; i < input.length - 1; i += 1) {
  const [a, b] = input[i].split(" ").map(Number);
  if (a === 0 && b === 0) break;
  console.log(a + b);
}
