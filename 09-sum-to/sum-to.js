/*
Напишите функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n, например:

sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6

Сделайте три варианта решения:

С использованием цикла.
Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) для n > 1.
С использованием формулы для суммы арифметической прогрессии.
*/

function sumToLoop(n) {
  let sum = 0;
  let num = n;
  for (num; num > 0; num--) { sum += num; } // eslint-disable-line no-plusplus
  return sum;
}

function sumToRecursion(n) {
  return (n > 1) ? (n + sumToRecursion(n - 1)) : n;
}

function sumToFormula(n) {
  return (1 + n) * n / 2;
}

sumToLoop(3);
sumToRecursion(3);
sumToFormula(4);
