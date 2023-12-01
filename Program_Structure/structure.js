// ====== Binding or Variable =======

let ten = 10; 
console.log(ten * ten) // -> 10 * 10 = 100

let mood = "light";
console.log(mood) // -> light

mood = "dark";
console.log(mood) // -> dark

// single let 
let one = 1, two = 2;
console.log(one + two); // 1 + 2 = 3

// const variable
const x = 3;
// x = 10;
console.log(x); // Assignment to constant variable


// ====== Binding Names =======

let $name = "JS";
let _name = "JS"
let abc = "JS"

// ====== Control Flow =======
// kod teppadan pasga oqiladi

let y = Number(prompt("Pick a number")); // Number is type custing
console.log("Your number is the squer root of" + y * y);


// ====== Conditional Execution =======

let z = Number(prompt("Pick a number")); // Number is type custing

if(!Number.isNaN) {
    console.log("Your number is the Square root of" + z * z);
}


// ====== Return Values =======

console.log(Math.max(2,4)); // -> 4


// ====== if else =======

let c = Number(prompt("Son kriting"));

if(c < 10) {
    console.log("bu son 10 dan kchik")
}
else if(c < 50) {
    console.log("Bu son 50 va 10 orasida")
}
else if(c < 100) {
    console.log("Bu son 50 va 100 orasida")
}
else {
    console.log("bu son 100 dan kotta")
}


// ====== While loop =======

let number = 0;

while (number <= 12) {
    console.log(number)
    number = number + 2
}
// 0 -> 2 -> 4 -> 6 -> 8 -> 10 -> 12;

let result = 1;
let counter = 0;

while(counter < 10) {
    counter = counter + 1;
    result = result * 2
}

console.log("2 ni 10 darajasi ");// -> 1024


// ====== For loops =======

for(let number = 0; number <= 12; number++) {
    console.log(number);
}
// 0 -> 2 -> 4 -> 6 -> 8 -> 10 -> 12;

// The parentheses after a for keyword most contain two semicons
// 1. initializes
// 2. checks
// 3. update

// ====== Breaking Out of a Loop =======

for(let current = 20; current = current + 1;) {
    if(current % 7 == 0) {
        console.log(current);
        break;
    }
}
// -> 21

// ====== Updating bindings succinctly =======

// counter = counter + 1;
// counter += 1

for(let num = 0; num <= 12; num+= 2) {
    console.log(num)
}
// for counter+=1 and counter-=1, there are shorter equivalents:
// counter++ and counter--


// ====== Capitalization =======

// standart and recomendation
let fuzzylittleturtle;
let fuzzy_little_turtle; // recomend veriables
let FuzzyLittleTurtle;
let fuzzyLittleTurtle; // recomend functions
