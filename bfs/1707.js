const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const k = Number(input[0]);
let index = 1;

const bfs = (x) => {
  const queue = [];
  queue.push(x);
  visited[x] = 0;
  while (queue.length !== 0) {
    const cur = queue.shift();
    for (let a of graph[cur]) {
      if (visited[a] === -1) {
        queue.push(a);
        visited[a] = (visited[cur] + 1) % 2;
      }
    }
  }
};

const isTwoGraph = () => {
  for (let i = 1; i < visited.length; i += 1) {
    for (let x of graph[i]) {
      if (visited[x] === visited[i]) return false;
    }
  }
  return true;
};

for (let i = 0; i < k; i += 1) {
  const [v, e] = input[index].split(' ').map(Number);
  index += 1;
  graph = [];
  for (let j = 1; j <= v; j += 1) graph[j] = [];
  visited = new Array(v + 1).fill(-1);

  for (let j = 0; j < e; j += 1) {
    const [a, b] = input[index + j].split(' ').map(Number);
    graph[a].push(b);
    graph[b].push(a);
  }
  index += e;

  for (let x = 1; x <= v; x += 1) {
    if (visited[x] === -1) bfs(x);
  }

  if (isTwoGraph()) console.log('YES');
  else console.log('NO');
}
