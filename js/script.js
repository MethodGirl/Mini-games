// 1 игра
const guessNumberGame = document.querySelector('.button-guessAnumber');

function guessNumber() {
    let input = prompt('Я загадала число, попробуй угадать (・ω・)ﾉ');

    if (input === null || isNaN(input)) {
        alert('Игра окончена (×﹏×)');
        return;
    }

    let question = +input;
    let number = Math.trunc(Math.random() * 100) + 1;
    console.log('Загадано:', number);

    do {
        if (number > question) {
            input = prompt('Нужно число побольше, давай ещё раз  ( ╯°□°)╯ ┻━━┻');
            if (input === null || isNaN(input)) {
                alert('Игра окончена (×﹏×)');
                return;
            }
            question = +input;
        } else if (number < question) {
            input = prompt('Нужно число поменьше, давай ещё раз  ( ╯°□°)╯ ┻━━┻');
            if (input === null || isNaN(input)) {
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

function doArithmeticTasks() {
    let playAgain = true;

    // сделала при помощи while вместо рекурсии, чтобы избежать
    // переполнение стека, если игры будет долгой
    
    while (playAgain) {
        let numbersMin = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        let numbersMax = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        let signs = ['-', '+', '/', '*'];

        let randomNumberMin = numbersMin[Math.floor(Math.random() * numbersMin.length)]
        let randomNumberMax = numbersMax[Math.floor(Math.random() * numbersMax.length)]
        let randomSign = signs[Math.floor(Math.random() * signs.length)]

        let biggest = Math.max(randomNumberMin, randomNumberMax);
        let smallest = Math.min(randomNumberMin, randomNumberMax);

        if (randomSign === '/') {
            do {
                randomNumberMin = numbersMin[Math.floor(Math.random() * numbersMin.length)]
                randomNumberMax = numbersMax[Math.floor(Math.random() * numbersMax.length)]

                biggest = Math.max(randomNumberMin, randomNumberMax);
                smallest = Math.min(randomNumberMin, randomNumberMax);
            } while (smallest === 0 || biggest % smallest !== 0)
        }

        if (randomSign === '*') {
            do {
                randomNumberMin = numbersMin[Math.floor(Math.random() * numbersMin.length)];
                randomNumberMax = numbersMax[Math.floor(Math.random() * numbersMax.length)];
            } while (randomNumberMin > 10 || randomNumberMax > 10);

            biggest = Math.max(randomNumberMin, randomNumberMax);
            smallest = Math.min(randomNumberMin, randomNumberMax);
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
        } else if (input === null || isNaN(input)) {
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