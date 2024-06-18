const input = require('fs').readFileSync(0).toString().trim();

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

const [a, b] = input.split(' ').map(Number);

const visited = new Set();
const queue = new Queue();
queue.enqueue([a, 1]);
visited.add(a);

while (queue.getLength()) {
  const [x, cnt] = queue.dequeue();
  if (x === b) {
    console.log(cnt);
    return;
  }

  let next = x * 2;
  if (next <= b && !visited.has(next)) {
    queue.enqueue([next, cnt + 1]);
    visited.add(next);
  }

  next = Number(x.toString() + '1');
  if (next <= b && !visited.has(next)) {
    queue.enqueue([next, cnt + 1]);
    visited.add(next);
  }
}

console.log(-1);
