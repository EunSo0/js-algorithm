const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const testCase = +input[0];
for (let i = 0; i < testCase; i++) {
  const r = +input[i + 1].split(" ")[0];
  const str = input[i + 1].trim().split(" ")[1];
  console.log(
    str
      .split("")
      .map((v) => v.repeat(r))
      .join("")
  );
}
