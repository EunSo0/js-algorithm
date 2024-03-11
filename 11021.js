const input = require("fs").readFileSync("input.txt").toString().split("\n");
for (let i = 1; i <= Number(input[0]); i += 1){
  const [a, b] = input[i].split(' ').map(Number);
  console.log(`Case #${i}: ${a+b}`)
}