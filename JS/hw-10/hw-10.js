// Задание 10
// Написать функцию, которая принимает дату и возвращает ее в формате:

// Дата: [число] [месяц на русском] [год] — это [день недели на русском].
// Время: [часы]:[минуты]:[секунды]

// Дату и время можно получить из объекта 
// Date


function traditional(date) {
  const month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
  const daysWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

  const dayOfMonth = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  const dayOfWeekIndex = date.getDay();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const result = `Дата: ${dayOfMonth} ${month[monthIndex]} ${year} — это ${daysWeek[dayOfWeekIndex]}.\nВремя: ${hours}:${minutes}:${seconds}`;

  return result;
}

const now = new Date();
console.log(traditional(now));