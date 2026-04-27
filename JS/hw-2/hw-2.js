// Задание 2
// Создать функцию, которая принимает массив строк и строку. Функция должна вернуть новый массив,
// содержащий только те элементы первого массива, которые начинаются со второй строки.
// Регистр символов не влияет на результат.

// Функция принимает массив строк и строку, возвращает новый массив с элементами,
// начинающимися с заданной строки, регистр не влияет.
// Подсказка
// Используйте функции
// toLowerCase()
//  и
// startsWith() для сравнения начала строк.

function filterStrings(array, searchString) {
  
  return array.filter(function(word) {
    
    const lowerCaseWord = word.toLowerCase();
    const lowerCaseSearch = searchString.toLowerCase();

    return lowerCaseWord.startsWith(lowerCaseSearch);
  });
}

const fruits = ["Яблоко", "Банан", "Апельсин", "абрикос", "груша"];

const result = filterStrings(fruits, "а");

console.log(result);
