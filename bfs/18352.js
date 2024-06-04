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

const [n, m, k, x] = input[0].split(' ').map(Number);

const visited = new Array(n + 1).fill(false);
const arr = Array.from({ length: n + 1 }, () => []);
for (let i = 1; i <= m; i += 1) {
  const [from, to] = input[i].split(' ').map(Number);
  arr[from].push(to);
}
queue = new Queue();
queue.enqueue([x, 0]);
visited[x] = true;

let result = [];

while (queue.getLength() !== 0) {
  const [a, len] = queue.dequeue();
  if (len === k) {
    result.push(a);
  }
  for (let aa of arr[a]) {
    if (!visited[aa]) {
      queue.enqueue([aa, len + 1]);
      visited[aa] = true;
    }
  }
}

if (result.length === 0) console.log(-1);
else {
  result.sort((a, b) => a - b);
  for (let x of result) console.log(x);
}
