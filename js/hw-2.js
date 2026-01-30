// 1
let password = 'пароль';
let checkPassword = prompt('Введите пароль')

if (checkPassword === password) {
    alert('Пароль введен верно')
} else {
    alert('Пароль введен неправильно')
}

//2

// работает верно при любом значении

let c = 0;

if (c > 0 && c < 10) {
    console.log('Верно')
} else {
    console.log('Неверно')
}

//3

let d = 105;
let e = 55;

if (d > 100 || e > 100) {
    console.log('Верно')
} else {
    console.log('Неверно')
}

//4

let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert(+a + +b);


//5

let monthNumber = 1;

switch (monthNumber) {
    case 1:
        console.log('Зима');
        break;
    case 2:
        console.log('Зима');
        break;
    case 3:
        console.log('Весна');
        break;
    case 4:
        console.log('Весна');
        break;
    case 5:
        console.log('Весна');
        break;
    case 6:
        console.log('Лето');
        break;
    case 7:
        console.log('Лето');
        break;
    case 8:
        console.log('Лето');
        break;
    case 9:
        console.log('Осень');
        break;
    case 10:
        console.log('Осень');
        break;
    case 11:
        console.log('Осень');
        break;
    case 12:
        console.log('Зима');
        break;
    default:
        console.log('Всего существует 12 месяцев, похоже вы ввели что-то не то :)');
}

// Дополнительное задание 
//1

let number = Number(prompt('Пожалуйста, введите любое число'));

if (!Number.isNaN(number)) {
    if (number % 2 === 0) {
        alert('Число четное')
    } else {
        alert('Число нечетное')
    }
}

//2, 3

let clientOS = 0;
let clientDeviceYear = 2015;

if (clientDeviceYear < 2015 && clientOS === 0) {
    alert('Установите облегченную версию приложения для iOS по ссылке')
} else if (clientDeviceYear < 2015 && clientOS === 1) {
    alert('Установите облегченную версию приложения для Android по ссылке')
} else if (clientDeviceYear >= 2015 && clientOS === 1) {
    alert('Установите версию приложения для Android по ссылке')
} else {
    alert('Установите версию приложения для iOS по ссылке')
}