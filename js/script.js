let guessNumberGame = document.querySelector('.button-guessAnumber');

function guessNumber() {
    let input = prompt('Я загадала число, попробуй угадать (・ω・)ﾉ');
    
    if (input === null) {
        alert('Игра окончена (×﹏×)');
        return;
    }

    let question = +input;
    let number = Math.trunc(Math.random() * 100) + 1;
    console.log('Загадано:', number, 'Введено:', question);

    do {
        if (number > question) {
            input = prompt('Нужно число побольше, давай ещё раз  ( ╯°□°)╯ ┻━━┻');
            if (input === null) {
                alert('Игра окончена (×﹏×)');
                return;
            }
            question = +input;
        } else if (number < question) {
            input = prompt('Нужно число поменьше, давай ещё раз  ( ╯°□°)╯ ┻━━┻');
            if (input === null) {
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