const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const t = +input[0];

const dx = [-2, -1, 2, 1, -2, -1, 2, 1];
const dy = [1, 2, 1, 2, -1, -2, -1, -2];

const bfs = () => {
  const queue = [];
  queue.push([x, y]);

  while (queue.length !== 0) {
    let cur = queue.shift();
    if (cur[0] === xx && cur[1] === yy) return visited[cur[0]][cur[1]];
    for (let k = 0; k < 8; k += 1) {
      let ax = dx[k] + cur[0];
      let ay = dy[k] + cur[1];
      if (ax >= n || ax < 0 || ay >= n || ay < 0) continue;
      if (visited[ax][ay] === 0) {
        visited[ax][ay] = visited[cur[0]][cur[1]] + 1;
        queue.push([ax, ay]);
      }
    }
  }
};

for (let i = 0; i < t; i += 1) {
  n = +input[3 * i + 1];
  [x, y] = input[3 * i + 2].split(' ').map(Number);
  [xx, yy] = input[3 * i + 3].split(' ').map(Number);

  visited = Array.from(Array(n), () => new Array(n).fill(0));

  console.log(bfs());
}
