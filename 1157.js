const input = require("fs").readFileSync("input.txt").toString().trim();

const arr = [...input.toLocaleLowerCase()].sort();
let set = new Set(arr);
let result = [];

for (let s of set) {
  result.push(s);
  result.push(arr.lastIndexOf(s) - arr.indexOf(s) + 1);
}

const max = Math.max(...result.filter((x) => typeof x === "number"));
result.filter((x) => x === max).length === 1
  ? console.log(result[result.indexOf(max) - 1].toUpperCase())
  : console.log("?");
