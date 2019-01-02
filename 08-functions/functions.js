// https://learn.javascript.ru/task/rewrite-function-question-or
function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?'); // eslint-disable-line no-alert, no-restricted-globals
}

// Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b.
function min(a, b) {
  return (a <= b) ? a : b;
}

function pow(a, po) {
  let res = a;
  let n = po;
  while (n > 1) {
    res *= a;
    n--; // eslint-disable-line no-plusplus
  }
  return res;
}

checkAge(19);
min(2, 3);
pow(2, 3);
