const input = require("fs").readFileSync("input.txt").toString().split("\n");
const str = input[0];
const n = +input[1];

console.log(str.charAt(n-1));
