const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");
input.shift();
let result = "";

function check(word, left, right) {
  while (left < right) {
    if (word[left] === word[right]) {
      left++;
      right--;
    } else return false;
  }
  return true;
}

function solution(word) {
  let left = 0;
  let right = word.length - 1;
  while (left < right) {
    if (word[left] === word[right]) {
      left++;
      right--;
    } else {
      if (check(word, left + 1, right) || check(word, left, right - 1)) {
        return 1;
      }
      return 2;
    }
  }
  return 0;
}

for (const s of input) {
  result += solution(s.trim()) + "\n";
}
console.log(result);
