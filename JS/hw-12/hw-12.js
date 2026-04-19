// Задание 12
// Создайте функцию, которая принимает на вход массив строк, а возвращает массив длины слов.
// Используйте метод 
// map()
//  для создания нового массива, где каждый элемент является длиной строки из исходного массива.



function getWordLengths(wordsArray) {

  return wordsArray.map(function(word) {
    return word.length;
  });
}

const words = ['яблоко', 'мяч', 'апельсин', 'дом'];

const lengths = getWordLengths(words);

console.log(lengths);