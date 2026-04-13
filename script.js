// Игра "Угадай число"

function guessNumber() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  alert(
    "Добро пожаловать в игру!!! Мы загадали число, и ваша задача его угадать.",
  );
  while (true) {
    let userGuess = Number(prompt("Введите число от 1 до 100"));
    if (userGuess == null) {
      alert(
        "Вы не вписали число. Ни чего страшного! Давайте попробуем еще раз!",
      );
      return;
    }
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
      alert("Некорректный ввод. Попробуйте снова.");
      continue;
    }
    if (userGuess > randomNumber) {
      alert("Ваше число больше загаданного числа. Попробуйте еще раз!");
    } else if (userGuess < randomNumber) {
      alert("Ваше число меньше загаданного числа. Попробуйте еще раз!");
    } else if (userGuess == randomNumber) {
      alert("Потрясающе!!! ВЫ ВЫИГРАЛИ!!!");
      break;
    }
  }
}
