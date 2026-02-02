//1
for (let i = 0; i < 2; i++) {
    console.log('Привет')
}

//2
for (let i = 1; i <= 5; i++) {
    console.log(i)
}

//3
for (let i = 7; i <= 22; i++) {
    console.log(i)
}

//4
let obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400',
}

for (let summary in obj) {
    console.log(summary + ' — зарплата: ' + obj[summary])
}
//5
let n = 1000;
let i = 0;

do {
    i++
    n /= 2;
} while (n >= 50)

console.log('Количество иттераций:' + i++)

//6

let friday = 6;

for (let i = friday; i <= 31; i += 7) {
    console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`)
}

// дополнительное задание 
//1

let k = 100;
let iterations = 0

do {
    iterations++
    k -= 7
} while (k > 0)

console.log('Количество иттераций:' + iterations++)

//2 

const months = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
];

for (let i = 0; i < months.length; i++) {
    console.log(`${months[i]} - это ${i + 1} месяц`)
}

//3

let book = {
    'название': 'Собор Парижской Богоматери',
    'автор': 'Виктор Гюго',
    'год': 1831,
    'жанр': 'Роман'
}

for(let key in book){
    console.log(book[key])
}

//4 

let arr = [535, 4, 87, 45, 59, 26, 100, 56, 37, 765];
let min = arr[0];

for(let num in arr){
    if(arr[num] < min){
        min = arr[num]     
    }
}

console.log(min)