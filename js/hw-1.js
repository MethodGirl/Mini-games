//1

let a = 10;

alert(a)

a = 20

alert(a)

//2

let firstIphoneReleaseYear = 2007;

alert(firstIphoneReleaseYear)

//3

let jsAuthor = 'Brendan Eich';

alert(jsAuthor)

//4

let ten = 10;
let two = 2;

alert(ten+two);
alert(ten-two);
alert(ten*two);
alert(ten/two);

//5

let result = 2**5

alert(result);

//6

alert(9%2);

//7

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1
alert(num);

//8

let age = prompt("Сколько вам лет?")

alert(age)

//9

let user = {
    name: "Joe",
    age: 100,
    isAdmin: true,
}

//10

let userName = prompt("Как вас зовут?");

alert(`Привет, ${userName}!`);


//Дополнительное задание, чтобы ответ 
// был именно 5, то загадайте 3

let number = prompt("Загадай число")
let doubleNumber = +number*2;

alert(doubleNumber)

let addTenNumber = doubleNumber + 10;

alert(addTenNumber);

let divideOnTwo = addTenNumber/2;

alert(divideOnTwo);

let finalNumber = divideOnTwo - +number;

alert(`Результат равен: ${finalNumber}`);

