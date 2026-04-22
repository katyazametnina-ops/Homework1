// Задание 4
// С помощью вложенных циклов создайте многомерный массив вида: 
// [[1, 1, 1], [1, 1, 1], [1, 1, 1]].


let matrix = [];

for (let i = 0; i < 3; i++) {
  let row = [];
  
  for (let j = 0; j < 3; j++) {
    row.push(1);
  }
  
  matrix.push(row);
}

console.log(matrix);

