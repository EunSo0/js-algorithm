const input = require("fs").readFileSync("input.txt").toString().trim();
const [a, b] = input.split(" ");
console.log(parseInt(a, +b));
