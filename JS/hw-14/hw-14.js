// Задание 14
// Создайте массив, состоящий из 10 значений. Значения массива необходимо сгенерировать с помощью метода
// Math.random()
//  в диапазоне от 0 до 10.

// В данном массиве найдите все четные значения и добавьте их в новый массив.
// Результат работы программы необходимо вывести в консоль — это будут два массива: исходный массив и массив
// с четными значениями.
// Используйте цикл для генерации исходного массива и метод
// filter()
//  для создания массива с четными числами.

const randomNumbers = [];

for (let i = 0; i < 10; i++) {
  let randomDecimal = Math.random();
  let randomInteger = Math.floor(randomDecimal * 10);
  randomNumbers.push(randomInteger);
}

const evenNumbers = randomNumbers.filter(function (number) {
  return number % 2 === 0;
});


console.log("Исходный массив:", randomNumbers);
console.log("Массив с четными значениями:", evenNumbers);
