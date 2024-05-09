const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

let line = 0;
let testCase = 1;

while (true) {
  const [n, m] = input[line].split(" ").map(Number);
  if (n === 0 && m === 0) break;
  graph = [];
  for (let i = 0; i <= n; i += 1) graph[i] = [];
  for (let i = 1; i <= m; i += 1) {
    const [a, b] = input[line + i].split(" ").map(Number);
    graph[a].push(b);
    graph[b].push(a);
  }

  visited = new Array(n + 1).fill(false);
  let cnt = 0;
  for (let i = 1; i <= n; i += 1) {
    if (!visited[i] && !isCycle(i, 0)) cnt++;
  }

  if (cnt === 0) console.log(`Case ${testCase}: No trees.`);
  if (cnt === 1) console.log(`Case ${testCase}: There is one tree.`);
  if (cnt > 1) console.log(`Case ${testCase}: A forest of ${cnt} trees.`);

  line += m + 1;
  testCase += 1;
}

function isCycle(x, prev) {
  visited[x] = true;
  for (let y of graph[x]) {
    if (!visited[y]) {
      if (isCycle(y, x)) return true;
    } else if (y !== prev) return true;
  }
  return false;
}
