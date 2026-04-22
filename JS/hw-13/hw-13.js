// Задание 13
// Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив, 
// содержащий только отрицательные значения.
// Используйте метод 
// filter()
//  для создания нового массива на основе условия проверки отрицательности числа.


function getNegativeNumbers(arr) {
  
  return arr.filter(function(number) {
 
    return number < 0;
  });
}

const numbers = [10, -5, 0, 42, -3, 8, -1];

const negativeArray = getNegativeNumbers(numbers);

console.log(negativeArray);