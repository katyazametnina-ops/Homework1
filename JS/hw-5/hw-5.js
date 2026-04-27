// Задание 5
// Создать функцию, которая выводит в консоль случайное число от 1 до 10.

function randomNumb() {
  let num = Math.random() * 11;
  let numRounding = Math.floor(num);
  return numRounding;
}
let result = randomNumb();
console.log(result);
