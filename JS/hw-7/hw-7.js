// Задание 7
// Создать функцию, которая принимает два целых числа и возвращает случайное число в этом диапазоне.

// Функция принимает два целых числа и возвращает случайное число в этом диапазоне с использованием 
// Math.random()
// , 
// Math.floor()
//  или 
// Math.ceil()
// .

 function raddomNumb(a, b) {

  const min = Math.min(a, b);
  const max = Math.max(a, b);

  const random = Math.floor(Math.random() * (max - min + 1)) + min;

  return random;
}

const myRandomNumber = raddomNumb(5, 8);

console.log("Случайное число:", myRandomNumber);