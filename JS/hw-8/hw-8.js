// Задание 8
// Дана строка: 
// 'abcdef'
// . Выведите в консоль 
// 'fedcba'


let str = 'abcdef';
let strArray = str.split('');
let strArrayReverse = strArray.reverse();
let strReverse = strArrayReverse.join('');
console.log(strReverse);
