const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ");

let phone = {
  2: "ABC",
  3: "DEF",
  4: "GHI",
  5: "JKL",
  6: "MNO",
  7: "PQRS",
  8: "TUV",
  9: "WXYZ",
};
const str = input[0].split("");

for (let i = 0; i < str.length; i++) {
  for (let j = 2; j <= 9; j++) {
    if (phone[j].split(""));
  }
}
