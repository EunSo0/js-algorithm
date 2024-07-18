const input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');

const n = +input[0];
const arr = Array.from({ length: n + 1 }, () => []);
for (let i = 1; i <= n; i += 1) {
  const yn = input[i].split('');
  for (let j = 0; j < n; j += 1) {
    if (yn[j] === 'Y') arr[i].push(j + 1);
  }
}

const friends = Array.from({ length: n + 1 }, () => new Set());
for (let i = 1; i <= n; i += 1) {
  for (let g of arr[i]) {
    friends[i].add(g);
    for (let gg of arr[g]) friends[i].add(gg);
  }
}

let result = 0;
for (let f of friends) {
  result = Math.max(result, f.size - 1);
}
console.log(result);
