// Задание 3
// Округлить число 32.58884:

// До меньшего целого.
// До большего целого.
// До ближайшего целого.

// Используйте встроенные функции 
// Math.floor()
// , 
// Math.ceil()
//  и 
// Math.round()
//  для округления значений.

let nonInteger = 32.58884;
let smallerInteger = Math.floor(nonInteger);
let largerInteger = Math.ceil(nonInteger);
let nearestInteger = Math.round(nonInteger);

console.log(smallerInteger);
console.log(largerInteger);
console.log(nearestInteger);