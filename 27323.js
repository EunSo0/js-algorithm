const input = require("fs").readFileSync("input.txt").toString().split("\n");
const [m, n] = input.map(Number);
console.log(m * n);
