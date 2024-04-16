const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const m = +input[2];

// 이진탐색을 위한 시작점과 끝점 설정
let start = 1;
let end = arr.reduce((a, b) => Math.max(a, b));

let result = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2); // 현재의 중간점(상한액)
  let total = 0; // 배정된 예산의 총액 계산
  for (x of arr) {
    total += Math.min(mid, x);
  }
  if (total <= m) {
    // 상한액 증가
    result = mid;
    start = mid + 1;
  } else {
    // 상한액 감소
    end = mid - 1;
  }
}
console.log(result);
