// Задание 15
// Создайте массив, состоящий из 6 элементов. Элементы массива необходимо сгенерировать с помощью 
// Math.random()
//  в диапазоне от 1 до 10.

// Требуется найти среднее арифметическое этих цифр, результат программы вывести в консоль.
// Подсказка:
// Для вычисления среднего арифметического воспользуйтесь методом 
// reduce()
//  для суммирования всех элементов массива и разделите результат на их количество.

// Этап 1: Генерация массива


const numbers = [];

for (let i = 0; i < 6; i++) {

    const randomNumber = Math.floor(Math.random() * 10) + 1;
    
    numbers.push(randomNumber);
}

const totalSum = numbers.reduce(function(sum, number) {
    return sum + number;
}, 0);

const average = totalSum / numbers.length;

console.log("Сгенерированный массив:", numbers);
console.log("Сумма элементов:", totalSum);
console.log("Количество элементов:", numbers.length);
console.log("Среднее арифметическое:", average);