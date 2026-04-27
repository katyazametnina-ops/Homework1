// Задание 6
// Написать функцию, которая принимает целое число и возвращает массив случайных чисел от 0 до этого числа.
// Длина массива должна быть в два раза меньше переданного числа.
// Подсказка
// В JavaScript функция Math.random() возвращает случайное число от 0 (включительно) до 1 (не включая).

function num(a) {
  const resultArray = [];
  for (let i = 0; i < Math.floor(a / 2); i++) {
    const randomNumber = Math.floor(Math.random() * (a + 1));
    resultArray.push(randomNumber);
  }

  return resultArray;
}
let myArr = num(5);
console.log(myArr);