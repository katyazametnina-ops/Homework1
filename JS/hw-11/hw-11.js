// Задание 11
// Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив квадратов этих чисел.

function newArr(arr) {
  return arr.map(function (number) {
    return number ** 2;
  });
}

const numbers = [1, 5, 4, 10];

const squaredArray = newArr(numbers);

console.log(squaredArray);