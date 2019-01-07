/*
 для arr = [ 1, 2, 3, 4, 5 ]
 getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]

 Функция не должна модифицировать входной массив.
 В решении используйте метод arr.reduce.
*/

function getSums(arr) {
  if (!arr.length) { return arr; }

  const res = [];
  const totalSum = arr.reduce((sum, item) => {
    res.push(sum);
    return sum + item;
  });
  res.push(totalSum);

  return res;
}

console.log(getSums([1, 2, 3, 4, 5])); // eslint-disable-line no-console
