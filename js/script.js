// 1 игра
const guessNumberGame = document.querySelector('.button-guessAnumber');

function guessNumber() {
    let input = prompt('Я загадала число, попробуй угадать (・ω・)ﾉ');

    if (input === null || Number.isNaN(+input)) {
        alert('Игра окончена (×﹏×)');
        return;
    }

    let question = +input;
    let number = Math.trunc(Math.random() * 100) + 1;
    console.log('Загадано:', number);

    do {
        if (number > question) {
            input = prompt('Нужно число побольше, давай ещё раз  ( ╯°□°)╯ ┻━━┻');
            if (input === null || Number.isNaN(+input)) {
                alert('Игра окончена (×﹏×)');
                return;
            }
            question = +input;
        } else if (number < question) {
            input = prompt('Нужно число поменьше, давай ещё раз  ( ╯°□°)╯ ┻━━┻');
            if (input === null || Number.isNaN(+input)) {
                alert('Игра окончена (×﹏×)');
                return;
            }
            question = +input;
        }
    } while (number != question);

    alert('(　･ω･)☞ Ура, ты умничка ');
    console.log('Угадано число');
}

guessNumberGame.addEventListener('click', () => guessNumber());

// 2 игра

const simpleArithmeticGame = document.querySelector('.button-simpleArithmetic');
const numbersMin = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersMax = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const signs = ['-', '+', '/', '*'];

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

function doArithmeticTasks() {
    let playAgain = true;

    // сделала при помощи while вместо рекурсии, чтобы избежать
    // переполнение стека, если игра будет долгой

    while (playAgain) {
        let randomNumberMin = getRandom(numbersMin)
        let randomNumberMax = getRandom(numbersMax)
        let randomSign = getRandom(signs)

        let biggest = Math.max(randomNumberMin, randomNumberMax);
        let smallest = Math.min(randomNumberMin, randomNumberMax);

        if (randomSign === '/') {
            do {
                randomNumberMin = getRandom(numbersMin)
                randomNumberMax = getRandom(numbersMax)

                biggest = Math.max(randomNumberMin, randomNumberMax);
                smallest = Math.min(randomNumberMin, randomNumberMax);
            } while (smallest === 0 || biggest % smallest !== 0)
        }

        if (randomSign === '*') {
            do {
                randomNumberMin = getRandom(numbersMin)
                randomNumberMax = getRandom(numbersMax)

                biggest = Math.max(randomNumberMin, randomNumberMax);
                smallest = Math.min(randomNumberMin, randomNumberMax);

            } while (biggest * smallest > 100);
        }

        let result;

        switch (randomSign) {
            case '+':
                result = biggest + smallest;
                break
            case '-':
                result = biggest - smallest;
                break
            case '/':
                result = biggest / smallest;
                break
            case '*':
                result = biggest * smallest;
                break
        }

        let input = prompt(`Задача: ${biggest} ${randomSign} ${smallest}`);
        let question = +input;

        if (question === result) {
            alert('Верное решение ヽ(・∀・)ﾉ');
        } else if (input === null || Number.isNaN(+input)) {
            alert('Игра окончена (×﹏×)')
            return
        } else {
            alert('Увы, неверно (⇀‸↼‶)')
        }

        playAgain = confirm('Сыграем ещё? (´• ω •`) ♡')

    }
    alert('Игра окончена (×﹏×)')
}

simpleArithmeticGame.addEventListener('click', () => doArithmeticTasks())

// 3 игра

let turnTextGame = document.querySelector('.button-turnText')

function turnOverText() {
    let input = prompt('(๑˃ᴗ˂)ﻭ Я переверну ЛЮБОЙ текст')

    if (input === null) return;

    alert([...input].reverse().join(''))
}

turnTextGame.addEventListener('click', () => turnOverText())

// 4 игра

const quiz = [{
        question: "У какой планеты есть кольца?",
        options: ["1. Меркурий", "2. Сатурн", "3. Марс"],
        correctAnswer: 2
    },
    {
        question: "Почему трава зелёная?",
        options: ["1. Из-за хлорофилла в клетках", "2. Хлорофилл поглощает все цвета спектра, кроме зелёного ", "3. Её покрасили садовые гномы"],
        correctAnswer: 1
    },
    {
        question: "Какое животное считается символом мудрости?",
        options: ["1. Волк", "2. Сова", "3. Тигр"],
        correctAnswer: 2
    },
    {
        question: "Какого цвета молодые звезды?",
        options: ["1. Красные", "2. Голубые", "3. Жёлтые"],
        correctAnswer: 2
    },
    {
        question: "Кто написал произведение «Мастер и Маргарита»?",
        options: ["1. Михаил Булгаков", "2. Фёдор Достоевский", "3. Александр Грибоедов"],
        correctAnswer: 1
    },
    {
        question: "Кто изобрел Интернет?",
        options: ["1. Тим Бернерс-Ли", "2. Томас Эдисон", "3. Олег Монгол"],
        correctAnswer: 1
    },
    {
        question: "У какого животного детёныш называется «медвежонок»?",
        options: ["1. Панда", "2. Коала", "3. Оба варианта верны"],
        correctAnswer: 3
    },
    {
        question: "Какой самый большой орган человека?",
        options: ["1. Печень", "2. Кожа", "3. Кишечник"],
        correctAnswer: 2
    }
];

let simpleQuizGame = document.querySelector('.button-simpleQuiz')

function takeQuiz() {
    let input = confirm('Ты готов проверить свои знания? (╯✧▽✧)╯\nОтвечать нужно номером ответа, не утруждай свои ручки')

    if (!input) {
        alert('Игра окончена (×﹏×)')
        return
    }

    let correctAnswers = 0;
    let mistakes = []

    for (let task of quiz) {
        let answer;

        while (true) {
            let userInput = prompt(`${task.question}\n${task.options.join('\n')}`)

            if (userInput === null || Number.isNaN(answer)) {
                alert('Вводить нужно цифру, игра окончена (×﹏×)')
                return
            }

            answer = Number(userInput);

            if (!Number.isNaN(answer) && answer >= 1 && answer <= quiz.length) {
                break
            }

            alert('Нужно ввести корректную цифру (・ー・)')
        }

        if (task.correctAnswer === answer) {
            correctAnswers++
        } else {
            mistakes.push(task.question)
        }

    }

    let uncorrectAnswers = quiz.length - correctAnswers;

    if (correctAnswers === quiz.length) {
        alert(`Что за гений зашёл на этот квиз? ヽ(>∀<☆)ノ Все ответы верны`)
    } else if (correctAnswers >= 4) {
        alert(`( • ⩊ • ) Ты умничка, хороший результат: ${correctAnswers}, но есть пару пробелов, а точнее: ${uncorrectAnswers}`)
    } else {
        alert(`Правильных ответов: ${correctAnswers}, а неправельных: ${uncorrectAnswers}  <(￣ ﹌ ￣)>\nОставим тебя после уроков`)
    }

    if (mistakes.length > 0) {
        if (confirm('Хочешь узнать где были ошибки? |･ω･)')) {
            alert(`Ошибки были в вопросах:\n${mistakes.join('\n')}`)
            alert('Подумай над ними и попробуй пройти квиз ещё раз (´꒳`)♡')
        } else {
            alert('Ну и ладно (￣ﾊ￣*)')
            return
        }
    }
}

simpleQuizGame.addEventListener('click', () => takeQuiz())