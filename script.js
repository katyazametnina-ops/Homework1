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

// Игра "Простая арифметика"
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startMathGame() {
  let score = 0;
  const totalQuestions = 5;
  const operations = ["+", "-", "*", "/"];

  alert("Добро пожаловать в игру! Решите 5 примеров.");

  for (let i = 0; i < totalQuestions; i++) {
    let num1, num2, operation, correctAnswer;

    operation = operations[getRandom(0, operations.length - 1)];

    if (operation === "+") {
      num1 = getRandom(1, 30);
      num2 = getRandom(1, 30);
      correctAnswer = num1 + num2;
    } else if (operation === "-") {
      num1 = getRandom(5, 30);
      num2 = getRandom(1, num1 - 1);
      correctAnswer = num1 - num2;
    } else if (operation === "*") {
      num1 = getRandom(1, 10);
      num2 = getRandom(1, 10);
      correctAnswer = num1 * num2;
    } else if (operation === "/") {
      correctAnswer = getRandom(2, 9);
      num2 = getRandom(2, 10);
      num1 = correctAnswer * num2;
    }

    const questionText = `Вопрос ${i + 1} из ${totalQuestions}: ${num1} ${operation} ${num2}`;

    const userInput = +prompt(questionText + " = ?");

    if (userInput === null || isNaN(userInput)) {
      alert("Вы вышли из игры или ввели некорректное значение.");
      return;
    }

    if (userInput === correctAnswer) {
      alert("✅ Верно! Хороший результат.");
      score++;
    } else {
      alert(`❌ Ошибка. Правильный ответ: ${correctAnswer}`);
    }
  }

  alert(`🏁 Игра окончена! Ваш результат: ${score} из ${totalQuestions}.`);
}

// Игра "Переверни текст"

function reverseText() {
  let userText = prompt("Попробуй ввести текст, который будет перевернут");
  if (userText === null || userText.trim() === "") {
    alert("Игра окончена.");
    return;
  }
  let stringToArray = userText.split("");
  let reverseArray = stringToArray.reverse();
  let arrayToString = reverseArray.join("");
  alert(`В перевернутом виде, это слова будет: ${arrayToString}`);
}

// Игра "Простая викторина"

function simpleQuiz() {
  let isGameOver = false;

  alert(
    "В этой игре, вам будет задан вопрос, и проедложено несколько вариантов ответа. Что бы ответить на вопрос, просто напишите номер ответа!",
  );

  const quizQuestionsWithAnswers = [
    {
      question: "Как называется школа магии, в которой учился Гарри Поттер?",
      options: ["1. Хогвартс", "2. Магистериум", "3. Астория"],
      correctAnswer: 1,
    },
    {
      question: "Как зовут домашнего эльфа, который служил семье Малфоев?",
      options: ["1. Добби", "2. Кречер", "3. Винки"],
      correctAnswer: 1,
    },
    {
      question: "Как называется поезд, который везёт учеников в Хогвартс?",
      options: [
        "1. «Экспресс Авалон»",
        "2. «Ночной Рыцарь»",
        "3. «Хогвартс-экспресс»",
      ],
      correctAnswer: 3,
    },
    {
      question: "Кто был хранителем Тайной комнаты в Хогвартсе?",
      options: ["1. Дракон Смауг", "2. Василиск", "3. Трёхглавый пёс Пушок"],
      correctAnswer: 2,
    },
    {
      question: "Какое зелье позволяет принять облик другого человека?",
      options: [
        "1. Зелье невидимости",
        "2. Феликс Фелицис",
        "3. Оборотное зелье",
      ],
      correctAnswer: 3,
    },
  ];

  let correctAnswersCounter = 0;

  for (let i = 0; i < quizQuestionsWithAnswers.length && !isGameOver; i++) {
    let isAnsweredCorrectly = false;

    while (!isAnsweredCorrectly && !isGameOver) {
      // И здесь тоже добавили проверку
      const currentQuestion = quizQuestionsWithAnswers[i];
      const fullQuestionText =
        currentQuestion.question + "\n" + currentQuestion.options.join("\n");

      const userInput = prompt(fullQuestionText);

      if (userInput === null) {
        alert("Игра принудительно окончена");
        // 3. Устанавливаем флаг, что игра окончена
        isGameOver = true;
        // Выходим из внутреннего цикла while
        break;
      }

      const userAnswer = +userInput;

      if (userAnswer === currentQuestion.correctAnswer) {
        alert("Прекрасно! Это правильный ответ!");
        correctAnswersCounter++;
        isAnsweredCorrectly = true;
      } else if (isNaN(userAnswer) || userAnswer < 1 || userAnswer > 3) {
        alert(
          "Вы не написали ответ, или написали его не корректно. Вам нужно указать номер вашего ответа, от 1 до 3.",
        );
      } else {
        alert(
          `К сожалению, правильный ответ: ${currentQuestion.correctAnswer} `,
        );
        isAnsweredCorrectly = true;
      }
    }
  }

  // Финальный результат выводим, ТОЛЬКО если игра не была прервана
  if (!isGameOver) {
    alert(
      `Игра окончена! Вы ответили правильно на ${correctAnswersCounter} из ${quizQuestionsWithAnswers.length} вопросов.`,
    );
  }
}
