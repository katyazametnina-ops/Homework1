// Игра "Угадай число"

function guessNumber() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  alert(
    "Добро пожаловать в игру!!! Мы загадали число, и ваша задача его угадать.",
  );
  while (true) {
    let userGuess = prompt("Введите число от 1 до 100");

    if (userGuess == null) {
      alert(
        "Вы не хотите играть? Ни чего страшного! Поиграем в следующий раз!",
      );
      return;
    }

    let userGuessNumber = Number(userGuess);

    if (
      isNaN(userGuessNumber) ||
      userGuessNumber < 1 ||
      userGuessNumber > 100
    ) {
      alert("Некорректный ввод. Попробуйте снова.");
      continue;
    }
    if (userGuessNumber > randomNumber) {
      alert("Ваше число больше загаданного числа. Попробуйте еще раз!");
    } else if (userGuessNumber < randomNumber) {
      alert("Ваше число меньше загаданного числа. Попробуйте еще раз!");
    } else if (userGuessNumber == randomNumber) {
      alert("Потрясающе!!! ВЫ ВЫИГРАЛИ!!!");
      break;
    }
  }
}
