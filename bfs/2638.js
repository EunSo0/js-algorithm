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
const queue = new Queue();
const [n, m] = input[0].split(' ').map(Number);
const arr = [];
for (let i = 1; i <= n; i += 1) {
  const cheese = input[i].split(' ').map(Number);
  arr.push(cheese);
}

const dx = [0, 0, -1, 1];
const dy = [1, -1, 0, 0];

function bfs() {
  const visited = Array.from({ length: n }, () => new Array(m).fill(false));
  queue.enqueue([0, 0]);
  visited[0][0] = true;

  while (queue.getLength()) {
    const [x, y] = queue.dequeue();
    for (let i = 0; i < 4; i += 1) {
      const ax = x + dx[i];
      const ay = y + dy[i];

      if (ax >= 0 && ax < n && ay >= 0 && ay < m && !visited[ax][ay]) {
        if (arr[ax][ay] === 0) {
          queue.enqueue([ax, ay]);
          visited[ax][ay] = true;
        } else {
          arr[ax][ay]++;
        }
      }
    }
  }
}

function meltCheese() {
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < m; j += 1) {
      if (arr[i][j] >= 3) {
        arr[i][j] = 0;
      } else if (arr[i][j] === 2) {
        arr[i][j] = 1;
      }
    }
  }
}
let time = 0;

while (true) {
  bfs();
  meltCheese();
  time++;

  let cheeseCount = 0;
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < m; j += 1) {
      if (arr[i][j] === 1) {
        cheeseCount++;
      }
    }
  }

  if (cheeseCount === 0) break;
}

console.log(time);
