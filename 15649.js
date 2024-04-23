const input = require("fs").readFileSync("input.txt").toString().trim();

const [n, m] = input.split(" ").map(Number);
let arr = [];
for (let i = 1; i <= n; i += 1) arr.push(i);
let visited = new Array(n).fill(false);
let selected = [];

let answer = "";
function dfs(arr, depth) {
  if (depth == m) {
    let result = [];
    for (let i of selected) result.push(arr[i]);
    for (let x of result) answer += x + " ";
    answer += "\n";
    return;
  }
  for (let i = 0; i < arr.length; i += 1) {
    if (visited[i]) continue;
    selected.push(i);
    visited[i] = true;
    dfs(arr, depth + 1);
    selected.pop();
    visited[i] = false;
  }
}
dfs(arr, 0);
console.log(answer);

// let n = 8;
// let queens = []; // 현재 체스판 위에 놓인 퀸의 위치 정보들

// function possible(x, y) {
//   // (x,y) 위치에 퀸을 놓은 수 있는지 확인
//   for (let [a, b] of queens) {
//     // 현재까지 놓았던 모든 퀸의 위치를 하나씩 확인하며
//     if (a == x || b == y) return false; // 행이나 열이 같다면 놓을 수 없음
//     if (Math.abs(a - x) == Math.abs(b - y)) return false; // 대각선이 위치한 경우 놓을 수 없음
//   }
//   return true;
// }

// let cnt = 0;
// function dfs(row) {
//   if (row == n) cnt += 1; // 퀸을 n개 배치할 수 있는 경우 카운트
//   for (let i = 0; i < n; i++) {
//     console.log(row, i);
//     console.log(queens);
//     console.log("---");
//     // 현재 행에 존재하는 열을 하나씩 확인하며
//     if (!possible(row, i)) continue; // 현재 위치에 놓을 수 없다면 무시
//     queens.push([row, i]); // 현재 위치에 퀸을 놓기
//     dfs(row + 1); // 재귀 함수 호출
//     queens.pop(); // 현재 위치에서 퀸을 제거
//     console.log(queens);
//     console.log("-------");
//   }
// }
// dfs(0);
// console.log(cnt);
