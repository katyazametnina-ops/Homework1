// Задание 9
// Создать переменную currentDate, хранящую текущую дату.
// Вывести дату, которая наступит через 73 дня после текущей.
// Переменная currentDate создана, дата через 73 дня вычислена и выведена с использованием методов
// getDate()
//  и
// setDate().

let currentDate = new Date();

let futureDate = new Date(currentDate);

futureDate.setDate(currentDate.getDate() + 73);

console.log("Дата через 73 дня:", futureDate);
