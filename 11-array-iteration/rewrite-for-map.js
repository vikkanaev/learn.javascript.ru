/*
Перепишите выделенный участок: уберите цикл, используйте вместо него метод map.

var arr = ["Есть", "жизнь", "на", "Марсе"];

var arrLength = [];
for (var i = 0; i < arr.length; i++) {
  arrLength[i] = arr[i].length;
}

alert( arrLength ); // 4,5,2,5

*/

const arr = ['Есть', 'жизнь', 'на', 'Марсе'];
const arrLength = arr.map(item => item.length);

console.log(arrLength); // eslint-disable-line no-console
