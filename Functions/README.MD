[Go to ToC](../README.md)

# Функции

* Функции — самая важная часть языка JavaScript. Это дает нам возможность обернуть программу в значение, что уменьшает повторение и модульность. д
* Подобно тому, как у нас, людей, есть словарный запас, который можно использовать в нашей речи, у JavaScript также есть словарь, содержащий около 20 000 слов. С помощью функций мы можем расширить этот словарь и создать свой собственный.


## ToC
* [Defining a function](#defining-a-function)  
* [Bindings and scopes](#bindings-and-scopes)  
* [Nested scope](#nested-scope)  
* [Functions as values](#functions-as-values)  
* [Declaration notation](#declaration-notation)  
* [Arrow functions](#arrow-functions)
* [The call stack](#the-call-stack)
* [Optional Arguments](#optional-arguments)  
* [Closure](#closure)  
* [Recursion](#recursion)  
* [Summary](#summary)  
* [Exercises](#exercises)   


### Определение функции

* На машинном уровне функция представляет собой последовательность единиц и нулей, как и любое другое значение.

* Функции создаются с помощью ключевого слова *function*.

* Функции имеют набор
     * *параметры* - значения, которые принимает функция (внутри `()`)
     * *body* — содержит операторы, которые должны выполняться при вызове функции.

* Тело всегда заключено в `{}` 

```javascript
const square = function(x) {
  return x * x;
};

console.log(square(12));
// → 144
```  


* Функции могут иметь несколько параметров или вообще не иметь параметров.
* Функции могут `возвращать return` значение ИЛИ просто выполнять `побочный эффект`.

:exclamation: Если функция ничего не возвращает и вы пропустите оператор return, функция все равно вернет `undefined`

:предупреждение: Параметры функции ведут себя как обычные привязки, однако передаются `вызывающей` стороной.

```javascript  
const makeNoise = function() {
  console.log("Pling!");
};

makeNoise();
// → Pling!

const power = function(base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};

console.log(power(2, 10));
// → 1024

```





[🔝](#toc)  
  

### Привязки и области видимости

* Каждая привязка имеет *область*, которая является частью программы, в которой привязка видна.
* Для привязок, объявленных вне какой-либо функции *block*, областью действия является вся программа. Они называются *глобальной областью*
* Для привязок, объявленных внутри любой функции или блока, доступ к ним возможен только внутри этого блока. Это называется *локальная область действия*.

* Привязки, объявленные с помощью `let` и `const`, фактически являются локальными для блока, в котором они объявлены.

:warning: В этом случае `var` работает по-другому: они видны во всей функции, в которой они появляются, или во всей глобальной области видимости, если они не находятся в функции.

```javascript 
let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z);
  // → 60
}
// y is not visible here
console.log(x + z);
// → 40
```  

```javascript

const halve = function(n) {
  return n / 2;
};

let n = 10;
console.log(halve(100));
// → 50
console.log(n);
// → 10

```



[🔝](#toc)  
  
### Вложенная область видимости

* Блоки и функции могут создаваться внутри других блоков и функций, что обеспечивает несколько степеней локальности.

```javascript
const hummus = function(factor) {
  const ingredient = function(amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
};
```
* Код внутри функции ингредиента может видеть привязку фактора из внешней функции. Но его локальные привязки, такие как unit или IngendingAmount, не видны во внешней функции.
  
[🔝](#toc)  

### Функции как значения

* Привязка функции обычно действует просто как имя для определенной части программы.

* Он действует как любое другое значение, что означает, что он может делать все то же, что и другие значения, например:

       * используйте его в произвольных выражениях, а не просто вызывайте
       * сохранить значение функции в новой привязке
       * передать его как аргумент функции
       * присвоить ему новое значение
      
```javascript
let launchMissiles = function() {
  missileSystem.launch("now");
};
if (safeMode) {
  launchMissiles = function() {/* do nothing */};
}
```


  
[🔝](#toc)  

### Обозначение объявления

* Существует немного более короткий способ объявления привязки функции.

* Когда ключевое слово function используется в начале оператора, оно работает по-другому:

```javascript
function square(x) {
   return x * x;
}
```
:exclamation: This is a **function declaration** and doesn't require `;`

```javascript
console.log("The future says:", future());

function future() {
  return "You'll never have flying cars";
}
```  

:warning: Приведенный выше код работает, даже несмотря на то, что функция определена *ниже* кода, который ее использует.

* Объявления функций не являются частью обычного потока управления сверху вниз. Концептуально они перемещаются в начало своей области и могут использоваться всем кодом в этой области.


  
[🔝](#toc)  

### Стрелочные функции

* Третье обозначение функций, называемое **стрелочными функциями** (=>), состоящее из знака равенства и символа «больше» (**не >=**).

```javascript
const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};
```  
* We can omit `function` keyword, give parameter list **in `()`** and `=>` followed by `{}` which is the body

```javascript
const square1 = (x) => { return x * x; };
const square2 = x => x * x;
```
:exclamation: Если в списке параметров только один, мы можем опустить `()`
:exclamation: Если тело содержит только одно выражение, а не блок в фигурных скобках, это выражение будет возвращено из функции.

* Когда стрелочная функция вообще не имеет параметров, ее список параметров представляет собой просто пустой набор скобок:

```javascript
const horn = () => {
  console.log("Toot");
};
```


[🔝](#toc)    
  
  
### Стек вызовов

* Поскольку функция при возвращении должна вернуться в то место, которое ее вызвало, компьютер должен запомнить контекст, из которого произошел вызов.

* Местом, где компьютер сохраняет этот контекст, является **стек вызовов**.

* Каждый раз при вызове функции текущий контекст сохраняется **верхней** части этого стека. Когда функция возвращает значение, она удаляет верхний контекст из стека и использует этот контекст для продолжения выполнения.

:предупреждение: Для хранения этого стека требуется место в памяти компьютера. Когда стек становится слишком большим, компьютер выходит из строя с сообщением типа «нет места в стеке» или «слишком много рекурсии».

```javascript
function chicken() {
  return egg();
}
function egg() {
  return chicken();
}
console.log(chicken() + " came first.");
// → ??

```


  
[🔝](#toc)  

  

### Необязательные аргументы

* JavaScript очень широко подходит к количеству аргументов, передаваемых функции.
* Если вы передаете слишком много, лишние игнорируются.
* Если вы передадите слишком мало, недостающие получат значение «неопределено».

```javascript
function square(x) { return x * x; }
console.log(square(4, true, "hedgehog"));
// → 16
```

* У этого есть плюсы и минусы.
    * Недостаток: если вы передадите неправильное количество аргументов, вы не получите никаких ошибок, а это значит, что вам будет труднее найти ошибку.
    * Однако положительным моментом является то, что вы можете определить одну функцию, которая будет вести себя в зависимости от количества переданных аргументов.
   
```javascript
function minus(a, b) {
  if (b === undefined) return -a;
  else return a - b;
}

console.log(minus(10));
// → -10
console.log(minus(10, 5));
// → 5
```  

:exclamation: Если вы напишете оператор `=` после параметра, за которым следует выражение, значение этого выражения заменит аргумент, если он не задан.

```javascript
function power(base, exponent = 2) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}

console.log(power(4));
// → 16
console.log(power(2, 6));
// → 64
```
  
[🔝](#toc)  

### Закрытие

* Что происходит с локальными привязками, когда вызов функции, создавший их, перестает быть активным?

```javascript

function wrapValue(n) {
  let local = n;
  return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2

```
* Возможность ссылаться на конкретный экземпляр локальной привязки в охватывающей области называется **закрытием**.

* Функция, которая ссылается на привязки из локальных областей вокруг себя, называется **a** *закрытие*.

```javascript
function multiplier(factor) {
  return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));
// → 10
```  

:предупреждение: Размышление о подобных программах требует некоторой практики. Хорошая ментальная модель — думать о значениях функций как о содержащих как код в своем теле, так и о среде, в которой они созданы. При вызове тело функции видит среду, в которой оно было создано, а не среду, в которой оно было вызвано. 
  
[🔝](#toc)  

### Рекурсия

* Функция, вызывающая сама себя, называется **рекурсивной**. Функция может вызывать сама себя *при условии, что она не делает этого так часто, что приводит к переполнению стека* (теперь вы знаете, что такое stackoverflow :)

```javascript

function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

console.log(power(2, 3));
// → 8

``` 

:warning: Но у этой реализации есть одна проблема: в типичных реализациях JavaScript она примерно в три раза медленнее, чем версия с циклом. Выполнение простого цикла обычно дешевле, чем многократный вызов функции.

* Дилемма скорости и элегантности интересна. Вы можете рассматривать это как своего рода континуум между дружественностью к человеку и дружественностью к машинам. Практически любую программу можно сделать быстрее, если сделать ее больше и запутаннее. Программист должен принять решение о соответствующем балансе.

  
[🔝](#toc)  

### Краткое содержание

* Мы увидели, как создать привязку функции, объявление функции и функции стрелок.

```javascript

// Define f to hold a function value
const f = function(a) {
  console.log(a + 2);
};

// Declare g to be a function
function g(a, b) {
  return a * b * 3.5;
}

// A less verbose function value
let h = a => a % 3;

```

* Полезно разделить задачи, которые выполняет ваша программа, на разные функции. Вам не придется слишком много повторяться, а функции могут помочь организовать программу, группируя код на части, выполняющие определенные действия.


  
[🔝](#toc)  


### Упражнения


1. **Минимум**
На прошлом уроке мы представили стандартную функцию `Math.min`, которая возвращает наименьший аргумент. Сейчас мы можем построить что-то подобное. Напишите функцию min, которая принимает два аргумента и возвращает их минимум.

```javascript
// Your code here.

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
```


2. **Рекурсия**
Мы видели, что % (оператор остатка) можно использовать для проверки того, является ли число четным или нечетным, используя % 2, чтобы проверить, делится ли оно на два. Вот еще один способ определить, является ли положительное целое число четным или нечетным:

* Ноль четный.
* Один странный.
* Для любого другого числа N его четность такая же, как N - 2.

Определите рекурсивную функцию isEven, соответствующую этому описанию. Функция должна принимать один параметр (положительное целое число) и возвращать логическое значение.

Проверьте его на 50 и 75. Посмотрите, как он поведет себя на -1. Почему? Можете ли вы придумать, как это исправить?

```javascript
// Your code here.

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??
```

3. **Подсчет зерен**
Вы можете получить N-й символ или букву из строки, написав `"string"[N]`. Возвращаемое значение будет строкой, содержащей только один символ (например, «b»). Первый символ имеет позицию 0, поэтому последний находится в позиции `string.length - 1`. Другими словами, двухсимвольная строка имеет длину 2, а ее символы имеют позиции 0 и 1.

Напишите функцию countBs, которая принимает строку в качестве единственного аргумента и возвращает число, указывающее, сколько символов «B» в верхнем регистре содержится в строке.

Затем напишите функцию countChar, которая ведет себя как `countBs`, за исключением того, что она принимает второй аргумент, указывающий символ, который необходимо подсчитать (вместо того, чтобы считать только символы `B` в верхнем регистре). Перепишите countBs, чтобы использовать эту новую функцию.

```javacript
// Your code here.

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
```  

:uzbekistan:  

**1. Minimum** 

`Math.min` funksiyasini ko'rdik. Huddi shu funksiyani o'zingiz yarating. 

* Funksiya nomi `min`
* 2 ta argument qabul qiladi
* 2 argumentdan kichigini tanlab, shu qiymatni qaytaradi (`return`)

Misol:
```javascript

// Kodni bu yerga yozing

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
```


**2. Rekursiya** 

`%` (modulo) operatori qoldiqlarni hisoblashini bildik. Toq va Juft sonlarni topish uchun `n % 2` qilar edik. Siz shunday funksiya hosil qilingki (`%` ishlatmasdan), `n` sonini toq yoki juftligini aniqlab bersin. Ya'ni quyidagi algoritm dan foydalanishingiz mumkin (rekursiya orqali). 

* n == 1 bo'lsa bu toq son
* n == 0 bo'lsa bu juft son
* qolgan hamma hollarda, `n` ning juftligi ` n - 2 ` qiymati bilan bir xil.

:warning: `n` minus bo'lgan hollarni ham to'g'irlang.

1. Funksiyani nomi `isEven`
2. 1 ta argument qabul qiladi
3. Agar `juft` son bo'lsa `true` qaytaradi, `toq` bo'lsa `false`

Misol:
```javascript
// Kodni bu yerga yozing

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??
```



**3. Harf sanaydigan funksiya** 
1. Birinchi qism:

   * `countBs` degan funksiya hosil qiling.
   * 1 ta argument (`string`) qabul qilsin
   * Funksiya ichida, berilgan `string` ni ichida nechta `b` harfi borligini aniqlasin
   * Shu raqamni `return` qilsin.
2. Ikkinchi qism:
   * Bu safar `countChar` degan funksiya hosil qiling
   * 2 ta argument qabul qilsin 
   * `b` harfini sanash o'rniga, 2 chi argumentda kelgan harf, 1 chi stringda nechtaligini `return` qilsin.
   
:warning: `string` ni uzunligini bilish uchun `.length` property dan foydalaning  

Misol:
```javascript
// Kodni bu yerga yozing

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
```
  
[🔝](#toc)  


  

  