//1 

let arr1 = [1, 5, 4, 10, 0, 3];

arr1.some((el) => {
    console.log(el)
    return el === 10
})

// если именно цикл, то:

for (let value of arr1) {
    console.log(value);
    if (value === 10) {
        break;
    }
}

//2 

let arr2 = [1, 5, 4, 10, 0, 3];

arr2.indexOf(4)

//3

let arr3 = [1, 3, 5, 10, 20];

arr3.join(' ');

// 4

let arr4 = []

for (let i = 0; i < 3; i++) {
    let row = []
    for (let g = 0; g < 3; g++) {
        row.push(1)
    }
    arr4.push(row)
}

console.log(arr4)

//5

let arr5 = [1, 1, 1];

arr5.push(2, 2, 2)

console.log(arr5)

//6 

arr6 = [9, 8, 7, 'a', 6, 5];

arr6.sort((a, b) => a - b)

arr6 = arr6.filter(el => typeof el == 'number')

console.log(arr6)

//7 

arr7 = [9, 8, 7, 6, 5];
let num = +prompt('Число?')

if (arr7.includes(num)) {
    alert('Угадал')
} else {
    alert('Не угадал')
}

//8

let string = 'abcdef'
let arr8 = string.split('').reverse().join('')

console.log(arr8)

//9

let arr9 = [
    [1, 2, 3],
    [4, 5, 6]
]

console.log([...arr9[0], ...arr9[1]])

//10

let arr10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arr10.length; i++) {
    if (i < arr10.length - 1) {
        console.log(arr10[i] + arr10[i + 1])
    } else {
        console.log(arr10[i])
    }
}

//11

function double(arr11) {
    return arr11.map((el) => Math.pow(el, 2));
}

double([2, 4, 5, 6])

//12

function findWordsLength(arr12) {
    return arr12.map((el) => el.length)
}

findWordsLength(["яблоко", "кошка", "стол"])

//13

function findNegativeNumber(arr13) {
    return arr13.filter((el) => el < 0)
}

findNegativeNumber([3, -5, 0, 8, -2, 4])

//14

let arr14 = [];

for (let i = 0; i < 10; i++) {
    arr14.push(Math.trunc(Math.random() * 11))
}

console.log(arr14)

let arr141 = [...arr14]

console.log(arr141.filter((el) => el % 2 == 0))

//15

let arr15 = [];

for (let i = 0; i < 6; i++) {
    arr15.push(Math.trunc(Math.random() * 10) + 1)
}

let sum = arr15.reduce((acc, sum) => {
    return (acc + sum)
})

console.log(Math.trunc(sum / arr15.length))