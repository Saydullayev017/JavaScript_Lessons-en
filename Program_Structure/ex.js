// 1. Зацикливание треугольника
let triangle = '';

for(let i = 1; i <= 7; i++) {
    triangle += '#';
    console.log(triangle)
}


// 2. FizzBuzz
for(let i = 1; i <= 100; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz')
    }else if (i % 3 === 0) {
        console.log('Fizz')
    }else if(i % 5 === 0) {
        console.log('Buzz')
    }else {
        console.log(i)
    }
}


// 3. Шахматная доска
let size = 8; // задаем размер доски
let board = ''; // инициализируем переменную для хранения доски

for (let i = 0; i < size; i++) { // внешний цикл для строк
  for (let j = 0; j < size; j++) { // внутренний цикл для символов в строке
    if ((i + j) % 2 === 0) {
      board += ' '; // добавляем пробел для четных позиций
    } else {
      board += '#'; // добавляем символ # для нечетных позиций
    }
  }
  board += '\n'; // добавляем символ новой строки для разделения строк
}

console.log(board); // выводим сформированную доску в консоль