/*
  Как в функции отличить отсутствующий аргумент от undefined?

  function f(x) {
    // ..ваш код..
    // выведите 1, если первый аргумент есть, и 0 - если нет
  }

  f(undefined); // 1
  f(); // 0
*/

function f() {
  return arguments.length ? 1 : 0;
}

console.log(f(undefined));
console.log(f());
