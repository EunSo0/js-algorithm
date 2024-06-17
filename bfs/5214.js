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

const [n, k, m] = input[0].split(' ').map(Number);
const hyper = Array.from({ length: m + 1 }, () => []);
const station = Array.from({ length: n + 1 }, () => []);
const visitedHyper = new Array(m + 1).fill(false);
const visitedStation = new Array(n + 1).fill(false);

for (let i = 1; i <= m; i += 1) {
  const items = input[i].split(' ').map(Number);
  for (item of items) {
    hyper[i].push(item);
    station[item].push(i);
  }
}

const queue = new Queue();
queue.enqueue([1, 1]);
visitedStation[1] = true;
isThere = false;

while (queue.getLength()) {
  const [x, cnt] = queue.dequeue();
  if (x === n) {
    isThere = true;
    console.log(cnt);
    break;
  }
  for (let a of station[x]) {
    if (!visitedHyper[a]) {
      visitedHyper[a] = true;
      for (let aa of hyper[a]) {
        if (!visitedStation[aa]) {
          visitedStation[aa] = true;
          queue.enqueue([aa, cnt + 1]);
        }
      }
    }
  }
}

if (!isThere) console.log(-1);
