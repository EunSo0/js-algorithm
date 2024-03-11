const input = require("fs").readFileSync("input.txt").toString().split("\n");
const [a, b] = input[0].split(" ").map(Number);

if (a > b) console.log(">");
else if (a < b) console.log("<");
else console.log("==");
