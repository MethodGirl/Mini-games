// 1

let showTitle = document.querySelector('.showtitle-button');
let title = document.querySelector('.title')

showTitle.addEventListener('click', () => {
    title.classList.toggle('title-hidden')
})

//2

let changeColor = document.querySelector('.changecolor-button')
let paragraph = document.querySelector('.paragraph')

changeColor.addEventListener('click', () => {
    paragraph.style.color = 'blue';
})

//3

let changeText = document.querySelector('.changetext-button');
let changingTitle = document.querySelector('.title2')

changeText.addEventListener('click', () => {
    changingTitle.textContent = 'Привет, мир!'
})

//4

let descriptions = document.querySelectorAll('.description')

descriptions.forEach((el) => el.textContent = 'Измененный текст')

//5

let descriptionns = document.querySelectorAll('.descriptionn')

descriptionns.forEach((el) => el.textContent = 'Новый текст')

//6

let creationButton = document.querySelector('.createel')
let block = document.querySelector('.test6')

creationButton.addEventListener('click', () =>{
    const newParagraph = document.createElement('p');

    newParagraph.innerText = 'Новый абзац'
    newParagraph.style.marginBottom = '10px'

    block.appendChild(newParagraph)
})

//7

let ddescription = document.querySelector('.ddescription')
let deleteButton = document.querySelector('.delete-button')

deleteButton.addEventListener('click', () => {
    ddescription.remove()
})
