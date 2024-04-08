const input = +require("fs").readFileSync(0).toString().trim();
let i = 1;
let sum = 0;

while (true) {
  sum += i;
  if (input - sum < i + 1) {
    break;
  }
  i++;
}
console.log(i);
