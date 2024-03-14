const input = require("fs").readFileSync("input.txt").toString().trim();
const [a, b] = input.split(" ").map(Number);
console.log(a.toString(b).toUpperCase());
