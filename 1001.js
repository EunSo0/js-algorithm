const input = require("fs").readFileSync("./input.txt").toString().split("\n");
const [a, b] = input[0].split(" ").map(Number);
console.log(a - b);
