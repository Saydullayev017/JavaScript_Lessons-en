[Go to ToC](../README.md)

# Data Structures: Objects and Arrays

## ToC
* [Arrays](#arrays)
* [Properties](#properties)
* [Methods](#methods)
* [Objects](#objects)
* [Mutability](#mutability)
* [Array Loops](#array-loops)
* [Additional Methods for Arrays](#Additional-Methods-for-Arrays)
* [Strings & Their Properties](#strings-and-their-properties)
* [Rest Parameters](#rest-parameters)
* [Destructuring](#destructuring)
* [JSON](#json)
* [Exercises](#exercises)

### Массивы

* Чтобы работать с фрагментом данных, нам необходимо представить его в памяти компьютера. Допустим, мы хотим сохранить список чисел: 2, 3, 5, 7 и 11.
* Мы могли бы использовать отдельные переменные (неэффективно) для каждой из них или представить ее в виде строки «2 3 5 7 11» (нужен способ извлечения и преобразования обратно в число).
* К счастью: javascript предоставляет тип данных специально для хранения последовательности значений. Он называется **массивом** и обозначается `[]`, разделенным `,`

```javascript
let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]);
// → 5
console.log(listOfNumbers[0]);
// → 2
console.log(listOfNumbers[2 - 1]);
// → 3

```
* Array elements are accessed with `[]` also by providing and `index` - location of the that value in the array.
:warning: Zero-based counting has a long tradition in technology and in certain ways makes a lot of sense, but it takes some getting used to.


[🔝](#toc)  
  

### Характеристики

* До сих пор мы видели несколько странно выглядящих `myString.length` и `Math.max` в прошлом. Это выражения, которые обращаются к **свойству** некоторого значения.

* `length` — это *свойство* значения `myString`
     * `max` — это *свойство* объекта `Math`.
    
* Почти все значения javascript имеют свойства, кроме `null` и `undefined`

```javascript
null.length;
// → TypeError: null has no properties
```

* Существует **2 способа** доступа к свойствам в JavaScript:
     1. `.` (точечная запись) => `value.x`
     2. `[]` (квадратная скобка) => `value[x]`
    
* При использовании точки `.` слово после точки является **буквальным именем** свойства.
* При использовании квадратных скобок `[]` выражение между скобками *оценивается* для получения имени свойства.

:exclamation: Элементы массива сохраняются как *свойства*, используя числа в качестве *имен свойств*. Вы не можете использовать точечную запись для чисел.


[🔝](#toc)  
  
### Методы

* И строковые значения, и значения массива содержат, помимо свойства length, ряд свойств, которые содержат значения функций:
  *   `.toUpperCase()`
  
```javascript
let doh = "Doh";
console.log(typeof doh.toUpperCase);
// → function
console.log(doh.toUpperCase());
// → DOH
```
* Каждая строка имеет свойство toUpperCase(). При вызове он вернет копию строки, в которой все буквы были преобразованы в верхний регистр.
* Также есть `toLowerCase()`, идущий в другую сторону.

:exclamation: Свойства, содержащие *функции*, обычно называются **методами** значения, которому они принадлежат, поскольку `toUpperCase` — это метод строки.

* Этот пример демонстрирует два метода, которые можно использовать для управления массивами:

```javascript
let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]
console.log(sequence.pop());
// → 5
console.log(sequence);
// → [1, 2, 3, 4]

```

* Метод `push()` добавляет значения в конец массива
* Метод `pop()` удаляет последнее значение в массиве
* Метод `includes()` проверяет, существует ли заданное значение в массиве (ES6)

:предупреждение: Это традиционные термины для операций со стеком. Стек в программировании — это структура данных, которая позволяет помещать в нее значения и снова извлекать их в обратном порядке, чтобы то, что было добавлено последним, удалялось первым.
  
[🔝](#toc)  

### Объекты

* **Объекты** представляют собой произвольную *набор свойств*. Один из способов создания объекта — использование **фигурных скобок** в качестве выражения..

```javascript
let myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969
};
```
* Свойства разделяются **запятыми**.
* Каждое свойство имеет **имя** , **двоеточие** и **значение**.
* Отступ для удобства чтения.
* Если имя свойства содержит **пробел**, заключите его в **кавычки**.

:warning: если `{}` в начале оператора, то они являются блоком, в остальных позициях они описывают объект.

* Если имя свойства не существует, ссылка на это свойство даст вам `undefined`

* Можно присвоить *свойству* значение с помощью оператора `=`.
     * заменяет значение этого свойства
     * ИЛИ создает новое свойство, если объект не имеет этого свойства
    
* Унарный оператор delete используется (редко) для удаления свойства объекта.
* Оператор `in`, примененный к строке или объекту, сообщает вам, есть ли у него свойство с таким именем.
```javascript
let anObject = {left: 1, right: 2};
console.log(anObject.left);
// → 1
delete anObject.left;
console.log(anObject.left);
// → undefined
console.log("left" in anObject);
// → false
console.log("right" in anObject);
// → true

```

* Функция `Object.keys` — возвращает массив строк с именами свойств объекта.
```javascript
console.log(Object.keys({x: 0, y: 0, z: 2}));
// → ["x", "y", "z"]
```
* Функция `Object.assign` — копирует все свойства из одного объекта в другой.
```javascript
let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);
// → {a: 1, b: 3, c: 4}
```

:exclamation: Короче говоря, массивы — это всего лишь своего рода объект, специализированный для хранения последовательностей вещей. Если вы вычислите ```typeof []```, он создаст `"object"`


  
[🔝](#toc)  

### Мутабельность

* Мы видели, что значения объектов можно изменять. Типы значений, обсуждавшиеся в предыдущих главах, такие как числа, строки и логические значения, являются **неизменяемыми** — значения этих типов невозможно изменить.

     * Если у вас есть строка, содержащая слово «кошка», другой код не сможет изменить символ в вашей строке, чтобы он писался как «крыса».
    
* Объекты работают по-разному. Вы можете изменить их свойства, в результате чего одно и то же значение объекта будет иметь разное содержимое в разное время.

```javascript
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false

object1.value = 15;
console.log(object2.value);
// → 15
console.log(object3.value);
// → 10
```
:warning: Привязка `const` к объекту сама по себе не может быть изменена и будет продолжать указывать на тот же объект, **содержимое** этого объекта может измениться.

:exclamation: Когда вы сравниваете объекты с помощью оператора `==` в JavaScript, он сравнивает по идентичности: он вернет `true` только в том случае, если оба объекта имеют одно и то же значение.

* В JavaScript нет встроенной операции «глубокого» сравнения, которая сравнивает объекты по содержимому, но ее можно написать самостоятельно
  
[🔝](#toc)  

### Циклы массивов

```javascript
const foodArray = [
  { name: 'Burrito' },
  { name: 'Pizza' },
  { name: 'Burger' },
  { name: 'Pasta' }
];

for (let i = 0; i < foodArray.length; i++) {
  console.log(`Food Name: ${foodArray[i].name}`);
}
```

* Этот тип цикла распространен в классическом JavaScript: перебирать массивы по одному элементу за раз приходится часто, и для этого нужно запускать счетчик по длине массива и выбирать каждый элемент по очереди.

* В современном JavaScript существует более простой способ написания таких циклов.

```javascript
for (let food of foodArray) {
  console.log(`$ Food Name: {food.name}`);
}
```

* Это работает не только для массивов, но и для строк и некоторых других структур данных.





[🔝](#toc)    
  
  
### Дополнительные методы для массивов

#### `shift()`, `unshift()`
* Ранее мы видели `push` и `pop`, которые добавляют и удаляют элементы в конце массива. Соответствующие методы добавления и удаления элементов в **начале** массива называются `unshift` и `shift`.

```javascript
let todoList = [];
function remember(task) {
  todoList.push(task);
}
function getTask() {
  return todoList.shift();
}
function rememberUrgently(task) {
  todoList.unshift(task);
}
```
 * Эта программа управляет очередью задач. Вы добавляете задачи в конец очереди, вызывая Remember("продукты"), а когда вы готовы что-то сделать, вы вызываете getTask(), чтобы получить (и удалить) первый элемент из очереди. Функция RememberUrgently также добавляет задачу, но помещает ее в начало, а не в конец очереди.
 
#### `indexOf()`, `lastIndexOf()`

* Для поиска определенного значения в массивах предусмотрен метод indexOf.
* Метод просматривает массив от начала до конца и возвращает индекс, по которому было найдено запрошенное значение, или «-1», если оно не найдено.
* Для поиска с конца, а не с начала, существует аналогичный метод под названием «lastIndexOf».

```javascript
console.log([1, 2, 3, 2, 1].indexOf(2));
// → 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
// → 3
```
:warning: И indexOf, и LastIndexOf принимают необязательный второй аргумент, указывающий, с чего начать поиск.

 
#### `slice()`

* Другой фундаментальный метод массива — это «slice», который принимает начальный и конечный индексы и возвращает массив, между которыми есть только элементы.
* Начальный индекс является включенным, конечный индекс – исключающим.

```javascript
console.log([0, 1, 2, 3, 4].slice(2, 4));
// → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// → [2, 3, 4]
```
:предупреждение: Если конечный индекс не указан, срез возьмет все элементы после начального индекса. Вы также можете опустить начальный индекс, чтобы скопировать весь массив.

#### `concat()`

* Метод concat можно использовать для склеивания массивов для создания нового массива, аналогично тому, что оператор `+` делает для строк. 
```javascript
function remove(array, index) {
  return array.slice(0, index)
    .concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2));
// → ["a", "b", "d", "e"]

```

:предупреждение: Если вы передадите concat аргумент, который не является массивом, это значение будет добавлено в новый массив, как если бы это был массив из одного элемента.
 
[🔝](#toc)  

  
  
  
  
### Строки и их свойства

* Мы можем читать такие свойства, как length и toUpperCase, из строковых значений. Но если мы попытаемся создать новое свойство, JavaScript не будет жаловаться, но на самом деле он не будет работать.

```javascript
let kim = "Kim";
kim.age = 88;
console.log(kim.age);
// → undefined
```
#### `slice()` и `indexOf`

* Но у этих типов есть встроенные свойства. Каждое строковое значение имеет несколько методов. Некоторые очень полезные из них — «slice» и «indexOf», которые напоминают одноименные методы массива.

```javascript

console.log("coconuts".slice(4, 7));
// → nut
console.log("coconut".indexOf("u"));
// → 5

```
:exclamation: Единственное отличие состоит в том, что indexOf строки может искать строку, содержащую более одного символа, тогда как соответствующий метод массива ищет только один элемент.

```javascript
console.log("one two three".indexOf("ee"));
// → 11
```

#### `обрезать()`

* Метод `trim` удаляет пробелы (пробелы, символы новой строки, табуляции и подобные символы) в начале и конце строки.

```javascript
console.log("  okay \n ".trim());
// → okay
```

#### `padStart()`

* `padStart` принимает в качестве аргументов желаемую длину и символ заполнения.
```javascript
console.log(String(6).padStart(3, "0"));
// → 006
```

#### `split() и join()`

* Вы можете разделить строку при каждом появлении другой строки с помощью функции Split и снова соединить ее с помощью команды join.

```javascript
let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
// → ["Secretarybirds", "specialize", "in", "stomping"]
console.log(words.join(". "));
// → Secretarybirds. specialize. in. stomping
```

#### `повторить()`

* Строку можно повторить с помощью метода повтора, который создает новую строку, содержащую несколько склеенных вместе копий исходной строки.

```javascript
console.log("LA".repeat(3));
// → LALALA
```
  
[🔝](#toc)  

 
### Остальные параметры

* Для функции может быть полезно принимать любое количество аргументов. Например, `Math.max` вычисляет максимум из **всех** переданных ему аргументов.

* Чтобы написать такую функцию, нужно поставить три точки перед последним параметром функции, например:
* При вызове такой функции **параметр rest** привязывается к массиву, содержащему все дальнейшие аргументы.
```javascript
function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}
console.log(max(4, 1, 9, -2));
// → 9

```
* Аналогичное обозначение с тремя точками можно использовать для **вызова** функции с массивом аргументов.

```javascript
let numbers = [5, 1, 7];
console.log(max(...numbers));
// → 7
```

* Это **распространяет** массив в вызов функции, передавая его элементы как отдельные аргументы. Можно включить такой массив вместе с другими аргументами, как в `max(9, ...numbers, 2)`.

* Обозначение массива в квадратных скобках аналогичным образом позволяет `оператору расширения` расширять другой массив в новый массив.

```javascript
let words = ["never", "fully"];
console.log(["will", ...words, "understand"]);
// → ["will", "never", "fully", "understand"]
```


  
[🔝](#toc)  


  
### Деструктуризация

* Деструктуризация присваивания позволяет присваивать свойства массива или объекта переменным, используя синтаксис, похожий на литералы массива или объекта.

* Без деструктуризации присваивания вы можете получить доступ к первым трем элементам массива следующим образом:

```javascript
var first = someArray[0];
var second = someArray[1];
var third = someArray[2];
```

* При деструктуризации присваивания эквивалентный код становится более кратким и читабельным:
```javascript
var [first, second, third] = someArray;
```

* Деструктуризация объектов позволяет привязывать переменные к различным свойствам объекта. Вы указываете привязываемое свойство, а затем переменную, к которой вы привязываете его значение.

```javascript
var robotA = { name: "Bender" };
var robotB = { name: "Flexo" };

var { name: nameA } = robotA;
var { name: nameB } = robotB;

console.log(nameA);
// "Bender"
console.log(nameB);
// "Flexo"
```

:warning: Обратите внимание: если вы попытаетесь деструктурировать значение null или undefined, вы получите ошибку, так же, как если бы вы напрямую попытались получить доступ к свойству этих значений.

```javascript
var {blowUp} = null;
// TypeError: null has no properties
```
    
[🔝](#toc)  


  
### JSON

* Поскольку свойства лишь улавливают свое значение, а не содержат его, объекты и массивы хранятся в памяти компьютера в виде последовательностей битов, содержащих адреса (места в памяти) их содержимого. Таким образом, массив с другим массивом внутри него состоит из (по крайней мере) одной области памяти для внутреннего массива и другой для внешнего массива, содержащей (помимо прочего) двоичное число, которое представляет позицию внутреннего массива.

* Если вы хотите сохранить данные в файл для дальнейшего использования или отправить их на другой компьютер по сети, вам придется каким-то образом преобразовать эти клубки адресов памяти в описание, которое можно будет сохранить или отправить. Я полагаю, вы могли бы отправить всю память вашего компьютера вместе с адресом интересующего вас значения, но это не кажется лучшим подходом.

* Что мы можем сделать, так это сериализовать данные. Это означает, что оно преобразуется в плоское описание. Популярный формат сериализации называется **JSON (произносится «Джейсон»), что означает «Нотация объектов JavaScript»**. Он широко используется в качестве формата хранения и передачи данных в Интернете, даже на языках, отличных от JavaScript.

```javascript
{
  "squirrel": false,
  "events": ["work", "touched tree", "pizza", "running"]
}
```
:exclamation: Все имена свойств должны быть заключены в двойные кавычки. Допускаются только простые выражения данных — никаких вызовов функций, привязок или чего-либо еще, что требует реальных вычислений. Комментарии в формате JSON не допускаются.

#### `JSON.srtingify() & JSON.parse()`

* JavaScript предоставляет нам функции JSON.stringify и JSON.parse для преобразования данных в этот формат и обратно. Первый принимает значение JavaScript и возвращает строку в кодировке JSON. Второй принимает такую строку и преобразует ее в кодируемое ею значение.

```javascript
let string = JSON.stringify({squirrel: false,
                             events: ["weekend"]});
console.log(string);
// → {"squirrel":false,"events":["weekend"]}
console.log(JSON.parse(string).events);
// → ["weekend"]
```
  
[🔝](#toc)  

  
 
### Exercises

#### 1) Сумма диапазона

* Напишите функцию диапазона, которая принимает два аргумента: start и end и возвращает массив, содержащий все числа от начала до конца (включительно).

* Далее напишите функцию sum, которая принимает массив чисел и возвращает сумму этих чисел.

```javascript

// Your code here

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
```

* БОНУС: измените функцию диапазона, чтобы она принимала необязательный третий аргумент, указывающий значение «шага», используемое при построении массива. Если шаг не указан, элементы увеличиваются на единицу, что соответствует старому поведению. Диапазон вызова функции(1, 10, 2) должен возвращать [1, 3, 5, 7, 9]. Убедитесь, что он также работает с отрицательными значениями шага, чтобы диапазон (5, 2, -1) давал [5, 4, 3, 2].


#### 2) Реверсирование массива

* Массивы имеют обратный метод, который изменяет массив, инвертируя порядок появления его элементов.
* Для этого упражнения напишите две функции: ReverseArray и ReverseArrayInPlace.
* Первый, `reverseArray`, принимает массив в качестве аргумента и создает **новый** массив, содержащий те же элементы в обратном порядке.
* Второй, `reverseArrayInPlace`, делает то же, что и обратный метод: он **модифицирует массив**, заданный в качестве аргумента, переворачивая его элементы.
:предупреждение: Ни один из них не может использовать стандартный обратный метод.

СОВЕТ: Полезно использовать Math.floor для округления вниз.

```javascript

// Your code here.

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

```


#### 3) Более глубокое сравнение

* Оператор `==` сравнивает объекты по идентичности. Но иногда вы предпочитаете сравнить значения их фактических свойств.


* Напишите функцию deepEqual, которая принимает два значения и возвращает true, только если они имеют одно и то же значение или являются объектами с одинаковыми свойствами, где значения свойств равны при сравнении с рекурсивным вызовом deepEqual.

* Чтобы узнать, следует ли сравнивать значения напрямую (используйте для этого оператор ===) или сравнивать их свойства, вы можете использовать оператор typeof. Если он создает «объект» для обоих значений, вам следует провести глубокое сравнение. Но вы должны принять во внимание одно глупое исключение: по исторической случайности typeof null также создает «объект».

:warning: Подсказка: функция `Object.keys` будет полезна, когда вам нужно просмотреть свойства объектов для их сравнения.


```javascript
// Your code here.

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
```

  
[🔝](#toc)  

  
# :uzbekistan:  

## Amaliy Vazifalar

1) `range` degan funksiya yozing. Bu funksiya `start` va `end` degan ikkita argument qabul qiladi, va o'sha `start` ichidagi sondan `end` ichidagi songacha bo'lgan hamma sonlarni array shaklida qaytaradi.
Masalan: `range(1,10)` berilganda bu funksiya [1,2,3,4,5,6,7,8,9,10] ni qaytaradi.

Undan keyin, `sum` degan funksiya yozing. Bu funksiya argument orqali array qabul qiladi, ichida array dagi hamma elementlarni yig'indisini hisoblab, shu yig'indini qaytaradi. Masalan, tepadagi 1 dan 10 gacha bo'lgan array ni `sum` ga bersak, bu funksiya `55` sonini qaytaradi.

```javascript
connsole.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
```
:exclamation: Bonus: tepadagi `range` funksiyani ozgina o'zgartiring, bu funksiya **ixtiyoriy** uchinchi argument qabul qilsin. Bu argument array qurilayotgan paytda nechta "sakrash" kerakligini bildiradi. Masalan, bu argumentga `2` soni berilsa (`range(1,10,2)`), [1,3,5,7,9] ni qaytaradi. Uchinchi argument, manfiy bo'lishi ham mumkin. Bu holatda "sakrash" orqaga qarab ketadi. Masalan, bu argumentga `-1` berilsa (`range(5,2,-1)`) funksiya [5,4,3,2] ni qaytarsin.
  
  
  
[🔝](#toc)  

2)  Array ni teskarisi

Array larda `reverse` degan metod bor. Bu metod array ni ketma ketligini teskarisiga o'giradi. Bu vazifa uchun, siz ikkita funksiya yozing: `reverseArray` va `reverseArrayInPlace`. 

1. `reverseArray` argumentiga bitta array ni qabul qilsin va bu arrayni usida ishlab **yangi** array ni qaytirsin. Bu yangi array, original arrayni teskarisi bo'lsin. Masalan ['A', 'B', 'C'] array kirsa, bu funksiyadan **yangi** ['C', 
'A', 'B'] chiqadi. (bu funksiya pure (sof) bo'lib, argumentga tushgan array ni o'zgartirmaydi)

2. `reverseArrayInPlace` funksiyasi tepadadgi funksiyaga o'xshab array ni teskarisiga o'giradi, lekin farqi, bu funksiya yangi array emas, shu argumentga berilgan arrayni teskarisiga o'girib bersin. 

:warning: Bu ikkala funksiya ham `reverse()` metodini *ishlatmagan holda* yaratilsin.

```javascript

// Sizning code ingiz

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
```

  
  
[🔝](#toc)  

  
3)  Chuqur solishtirish

Biz bilamizki `==` operatori obyektlarda qo'llanilganda, bu obyektlar ikkisi birmi, ya'ni  bitta addressda joylashganmi yoki yo'qmi, shuni solishtiradi. Lekin ba'zida bu ikki obyektni `id` si emas, balki ichidagi qiymatlari bir biriga tengmi yoki yo'qmi shuni bilmoqchi bo'lamiz. 

Sizni vazifangiz, shu funksiyani yaratish. `deepEqual` degan funksiya yarating: bu funksiya 2 ta argument qabul qilsin, va shu 2 argumentni solishtirib, agar teng bo'lsa `true` yoki teng bo'lmasa `false` deb qaytarsin.

:warning: Obyekt bo'lmagan argumentlarni solishtirayotganda "qat'iy" tenglik operatorini ishlatish afzalroq `===`

Agar 2 argument ham "object" type bo'lsa (`typeof arg1 == "object"`), unda "deep comparison" (chuqur solishtirish) ni amalga oshiring: ya'ni obyektning har bir `property` si ikkinchi obyektning xuddi shu `property`siga teng.

:exclamation: `typeof null` ham "object" ni beradi, shuni hisobga oling. 

Yordam: `Object.keys` funksiyasi sizga obyektni `property`larini solishtirgani yordam beradi.

```javascript

// Sizning code ingiz

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
```
  
  
[🔝](#toc)  

    