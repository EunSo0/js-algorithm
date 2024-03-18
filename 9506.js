const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

let i = 0;

while (true) {
  const n = +input[i].trim();
  if (n === -1) break;
  let result = `${n} = `;
  let sum = 0;

  for (let j = 1; j < n; j += 1) {
    if (n % j === 0) {
      result += `${j} + `;
      sum += j;
    }
  }
  console.log(sum === n ? result.slice(0, -3) : `${n} is NOT perfect.`);
  i++;
}
