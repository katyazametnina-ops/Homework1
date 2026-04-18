function numberCubed() {
  let userNumber = prompt('Напишите число');
  userNumber = Number(userNumber);

  if (isNaN(userNumber)) {
    return('Переданный параметр не является числом');
  } else {
    let cubed = userNumber ** 3;
    return `${userNumber} в кубе равняется <${cubed}>`;
  }

}

console.log(numberCubed());