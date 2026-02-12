//1
let str = 'js';

str = str.toUpperCase()

console.log(str)

//2

function filterString(arr, str) {
    let lowerStr = str.toLowerCase()

    return arr.filter((el) => {
        return el.toLowerCase().startsWith(lowerStr)
    })
}

filterString(["балалайка", "банан", "яблоко", "Бал", "мышка"], 'ба');

//3

let num = 32.58884;

console.log(Math.floor(num))
console.log(Math.ceil(num))
console.log(Math.round(num))

//4

let numberArr = [52, 53, 49, 77, 21, 32]

console.log(Math.max(...numberArr))
console.log(Math.min(...numberArr))

//5

function randomNum() {
    return Math.floor(Math.random() * 10) + 1
}

randomNum()

//6

function randomArr(n) {
    let result = Math.trunc(n / 2)
    let arr6 = []

    for (let i = 0; i < result; i++) {
        arr6.push(Math.floor(Math.random() * n))
    }

    return arr6
}

randomArr(7)

//7

function randomBetween(num1, num2) {
    let max = Math.max(num1, num2)
    let min = Math.min(num1, num2)

    return Math.floor(Math.random() * (max - min + 1) + min)
}

randomBetween(10, 25)

//8

console.log(new Date())

//9

let currentDate = new Date();
let dateNow = +currentDate

let days73 = 73 * 24 * 60 * 60 * 1000;

let searchDate = dateNow + days73

let days73Hence = new Date(searchDate)

console.log(days73Hence)

// 10

function getDateInfo() {
    let currentDate = new Date()

    let data = currentDate.getDate()
    let month = currentDate.getMonth()
    let year = currentDate.getFullYear()

    let weekDay = currentDate.getDay()

    let hour = currentDate.getHours()
    let minutes = currentDate.getMinutes()
    let seconds = currentDate.getSeconds()

    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    hour = hour < 10 ? '0' + hour : hour;

    const months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ]

    const weekdays = [
        'воскресенье', 'понедельник', 'вторник', 'среда',
        'четверг', 'пятница', 'суббота'
    ]

    return `Дата: ${data} ${months[month]} ${year} — это ${weekdays[weekDay]} Время: ${hour}:${minutes}:${seconds}`
}

getDateInfo()