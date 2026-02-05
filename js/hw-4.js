//1
function findMin(a, b) {
    if (a < b) {
        return a
    } else {
        return b
    }
}

findMin(4, 6)

// или Math.min(a, b)

//2
function checkParity(num) {
    return num % 2 == 0 ? 'Число четное' : 'Число нечетное'
}

checkParity(2)

//3
function square(n) {
    console.log(n ** 2)
}

square(3)

function pow(number) {
    return number ** 2
}

let result = square(5)
console.log(result)

//4
function askAge() {
    let question = +prompt('Сколько вам лет?')

    if (question < 0) {
        alert('Вы ввели неправильное значение')
    } else if (question > 0 && question <= 12) {
        alert('Привет, друг!')
    } else {
        alert('Добро пожаловать!')
    }
}

askAge()

//5
function checkNumber(a, b) {
    if (!isNaN(a) && !isNaN(b)) {
        return a * b
    } else {
        console.log('Одно или оба значения не являются числом')
    }
}

checkNumber(8, 'bb')

//6
function calculateCube() {
    let input = prompt('Введите число')
    let num = Number(input)

    if (!isNaN(num)) {
        let result = num ** 3;
        return `${num} в кубе равняется ${result}`;
    } else {
        console.log('Переданный параметр не является числом')
    }
}

calculateCube()

//7 
let circle1 = {
    radius: 8,
    getArea() {
        return Math.PI * this.radius * this.radius;
    },
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

let circle2 = {
    radius: 4,
    getArea() {
        return Math.PI * this.radius * this.radius;
    },
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}