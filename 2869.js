const input = require("fs").readFileSync("input.txt").toString().trim();

const [a, b, v] = input.split(" ").map(Number);

console.log(Math.ceil((v - a) / (a - b)) + 1);
