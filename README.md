## 🎮 Mini Games

Небольшой веб-проект с набором мини-игр, написанных на JavaScript.  

## О проекте

Mini Games - страница с интерактивными мини-играми. Пользователь может запускать игры прямо на сайте и взаимодействовать с ними через интерфейс и всплывающие окна.

Доступные игры

- Угадывание случайного числа
- Простая арифметика
- Переворачивание текста
- Камень, ножницы, бумага
- Маленькая викторина
- Генератор случайного цвета

## Preview

![Preview](project.gif)

## Используемые технологии

- HTML5
- CSS3
- SCSS
- JavaScript (Vanilla JS)

## Чему я научилась в этом проекте

- **Управление состоянием игры** – вести счёт, повторять игры через переменные и цикл `while`  
  *Пример:* 
  `playerScore++` и `playAgain = confirm('Сыграем ещё?');`
- **Валидация пользовательского ввода** – проверять числа и обрабатывать отмену игры
  <br>*Пример:* 
  `if (input === null || Number.isNaN(+input)) return;`
-  **Работа с DOM** – выбор элементов страницы и обработка кликов  
  *Пример:* 
  `document.querySelector('.button-guessAnumber').addEventListener('click', guessNumber)`
- **Генерация случайных задач** – создавать случайные числа и арифметические операции  
  *Пример:* 
  `const randomNumber = Math.floor(Math.random() * 100) + 1;`
- **Адаптивная логика через matchMedia** – менять поведение сайта на разных экранах  
  *Пример:*  
  ```javascript
  const mediaQuery = window.matchMedia('(max-width: 767px)');
  if (mediaQuery.matches) link.href = '#guessAnumber';
  ```
  
## ⚙ Запуск проекта

Склонировать репозиторий:
 ```bash
git clone https://github.com/MethodGirl/Mini-games.git
 ```

Открыть файл `index.html` в браузере.

## 🌐 Деплой проекта

https://methodgirl.github.io/Mini-games/
