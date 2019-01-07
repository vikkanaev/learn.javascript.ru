/*
 для arr = [ 1, 2, 3, 4, 5 ]
 getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]

 Функция не должна модифицировать входной массив.
 В решении используйте метод arr.reduce.
*/
// var acc = [];


function calcPartialSum(acc, item) {
  let res;
  let init;

  if (!acc.length) {
    init = acc;
    res = item + init;
    acc = [init];
  } else {
    res = item + acc[(acc.length - 1)];
  }

  acc.push(res);
  return acc;
}

function getSums(arr) {
  if (arr.length < 2) { return arr; }
  return arr.reduce(calcPartialSum);
}

console.log(getSums([])); // eslint-disable-line no-console
