const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = [];
const queue = [];

for (let i = 0; i < n; i += 1) {
  arr.push(input[i + 1].split(' ').map(Number));
  for (let j = 0; j < n; j += 1) {
    if (arr[i][j] !== 0) {
      queue.push([arr[i][j], i, j, 0]);
    }
  }
}

queue.sort((a, b) => a[0] - b[0]);

const [s, x, y] = input[n + 1].split(' ').map(Number);

const dx = [0, 0, -1, 1];
const dy = [1, -1, 0, 0];

while (queue.length !== 0) {
  const [virus, xx, yy, second] = queue.shift();
  if (second === s) break;

  for (let i = 0; i < 4; i += 1) {
    let ax = xx + dx[i];
    let ay = yy + dy[i];
    if (ax >= 0 && ax < n && ay >= 0 && ay < n) {
      if (arr[ax][ay] === 0) {
        arr[ax][ay] = virus;
        queue.push([virus, ax, ay, second + 1]);
      }
    }
  }
}

console.log(arr[x - 1][y - 1]);
