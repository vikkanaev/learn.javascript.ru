/*
  Напишите функцию sum(...), которая возвращает сумму всех своих аргументов:

  sum() = 0
  sum(1) = 1
  sum(1, 2) = 3
  sum(1, 2, 3) = 6
  sum(1, 2, 3, 4) = 10
*/
function sum(...args) {
  let summ = 0;
  for (let i = 0; i < args.length; i++) {
    summ += args[i];
  }
  return summ;
}

console.log(sum(1, 2, 3));
