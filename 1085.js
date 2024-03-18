const input = require("fs").readFileSync("input.txt").toString().split("\n");
const [x, y, w, h] = input[0].split(" ").map(Number);
console.log(Math.min(x, y, w - x, h - y));
