/*
  function fib(n)

  alert( fib(3) ); // 2
  alert( fib(7) ); // 13
  alert( fib(77)); // 5527939700884757
*/

function fib(n) {
  let x = 1;
  let y = 0;
  let i;

  for (i = 0; i < n; i += 1) {
    x += y;
    y = x - y;
  }
  return y;
}

fib(3);
