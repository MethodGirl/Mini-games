//1
let str = 'js';

str.toUpperCase

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
console.log(Math.trunc(num))

//4

let numberArr = [52, 53, 49, 77, 21, 32]

console.log(Math.max(...numberArr))
console.log(Math.min(...numberArr))

//5

function randomNum(){
    return Math.floor(Math.random() * 10) + 1
}

randomNum()

//6

