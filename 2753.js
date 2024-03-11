const input = require("fs").readFileSync("input.txt").toString().split("\n");
const year = Number(input[0]);

if ((year % 4 === 0 && year % 100 !== 0) | (year % 400 === 0)) {
  console.log("1");
} else console.log("0");
