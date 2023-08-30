function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fib(n - 2) + fib(n - 1);
}

console.log(fib(4)); // 3
console.log(fib(7)); // 13

function fibSequence(n) {
  let i;
  const fib = [0, 1];

  for (i = 2; i <= n; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }

  return fib;
}

console.log(fibSequence(5)); // [0, 1, 1, 2, 3, 5]
console.log(fibSequence(7)); // [0, 1, 1, 2, 3, 5, 8, 13]
