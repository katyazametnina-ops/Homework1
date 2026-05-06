// Задание 1
// С помощью метода массива
// sort
//  отсортируйте массив
// people
//  по возрастанию возраста и выведите результат в консоль.

// const people = [
//    { name: 'Глеб', age: 29 },
//    { name: 'Анна', age: 17 },
//    { name: 'Олег', age: 7 },
//    { name: 'Оксана', age: 47 }
// ];

// // Допишите колбэк для sort, изучите, как работает колбэк, в документации
// console.log(people.sort(...));
// // код выше должен вывеcти =>
// // [
// //  { name: 'Олег', age: 7 },
// //  { name: 'Анна', age: 17 },
// //  { name: 'Глеб', age: 29 },
// //  { name: 'Оксана', age: 47 }
// // ]

const people = [
  { name: "Глеб", age: 29 },
  { name: "Анна", age: 17 },
  { name: "Олег", age: 7 },
  { name: "Оксана", age: 47 },
];

const sortedPeople = people.sort((personA, personB) => {
  return personA.age - personB.age;
});

console.log(sortedPeople);
