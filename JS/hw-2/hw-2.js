// Задание 2
// Реализуйте функцию 
// filter
// , которая должна работать аналогично методу массива 
// filter
// . Возьмите за основу функцию 
// map (
//   function map(arr, ruleFunction) {
//     const output = [];
//     console.log("ruleFunction", ruleFunction);
//     for (let i = 0; i < arr.length; i++) {
//       output.push(ruleFunction(arr[i]));
//     }
//     return output;
//   }
// )

// Чтобы из функции 
// map 
//  сделать   
// filter
// , нужно, в зависимости от результата вызова 
// ruleFunction
// , принимать решение о том, добавлять в результирующий массив очередной элемент или нет.


function isPositive(num) {
  return num > 0;
}
function isMale(person) {
  return person.gender === 'male';
}

function filter(arr, ruleFunction) {
  const output = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (ruleFunction(arr[i])) {
      output.push(arr[i]);
    }
  }
  return output;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(people, isMale)); 
