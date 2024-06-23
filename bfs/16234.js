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
const [N, L, R] = input[0].split(' ').map(Number);
const arr = [];
for (let i = 1; i <= N; i += 1) {
  arr.push(input[i].split(' ').map(Number));
}
let cnt = 0;
let move;
let visited;
const dx = [0, 0, -1, 1];
const dy = [1, -1, 0, 0];

const bfs = () => {
  const [x, y] = queue.dequeue();
  for (let i = 0; i < 4; i += 1) {
    const ax = x + dx[i];
    const ay = y + dy[i];
    if (ax < 0 || ay < 0 || ax >= N || ay >= N) continue;
    if (visited[ax][ay] < 5) {
      console.log(ax, ay);
      queue.enqueue([ax, ay]);
      visited[ax][ay]++;
      const diff = Math.abs(arr[x][y] - arr[ax][ay]);
      if (diff >= L && diff <= R) {
        if (!put[x][y]) {
          put[x][y] = true;
          move.push([x, y, arr[x][y]]);
        }
        if (!put[ax][ay]) {
          put[ax][ay] = true;
          move.push([ax, ay, arr[ax][ay]]);
        }
      }
    }
  }
};

while (true) {
  let avg = 0;
  move = [];
  visited = Array.from({ length: N }, () => new Array(N).fill(0));
  put = Array.from({ length: N }, () => new Array(N).fill(false));
  queue.enqueue([0, 0]);
  visited[0][0] = true;

  while (queue.getLength()) bfs();

  if (move.length === 0) break;

  for (let m of move) {
    const [x, y, num] = m;
    avg += num;
  }
  avg = Math.floor(avg / move.length);

  for (let m of move) {
    const [x, y, num] = m;
    arr[x][y] = avg;
  }

  console.log(move);
  console.log(arr);
  cnt++;
}

console.log(cnt);
