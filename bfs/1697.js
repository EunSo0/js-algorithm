const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split(' ');

const MAX = 100001;
const [n, k] = input.map(Number);
const visited = new Array(MAX).fill(0);

function bfs() {
  const queue = [];
  queue.push(n);
  while (queue.length !== 0) {
    let cur = queue.shift();
    if (cur === k) return visited[cur];
    for (let x of [cur + 1, cur - 1, cur * 2]) {
      if (x < 0 || x >= MAX) continue;
      if (visited[x] === 0) {
        visited[x] = visited[cur] + 1;
        queue.push(x);
      }
    }
  }
}

console.log(bfs());
