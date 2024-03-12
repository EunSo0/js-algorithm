const input = require("fs").readFileSync("input.txt").toString().trim();

input === [...input].reverse().join("") ? console.log(1) : console.log(0);
