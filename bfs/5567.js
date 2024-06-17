const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  peek() {
    return this.items[this.headIndex];
  }
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

const n = +input[0];
const m = +input[1];
const graph = Array.from({ length: n + 1 }, () => []);
const visited = new Array(n + 1).fill(false);

for (let i = 2; i < m + 2; i += 1) {
  const [a, b] = input[i].split(' ').map(Number);
  graph[a].push(b);
  graph[b].push(a);
}
const friend = new Set();

const queue = new Queue();
queue.enqueue([1, 1]);
visited[1] = true;

while (queue.getLength()) {
  const [x, depth] = queue.dequeue();
  if (depth === 3) break;
  for (let ii of graph[x]) {
    if (!visited[ii]) {
      queue.enqueue([ii, depth + 1]);
      visited[ii] = true;
      friend.add(ii);
    }
  }
}

console.log(friend.size);
