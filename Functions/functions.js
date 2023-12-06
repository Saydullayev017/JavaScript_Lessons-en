// Defining a function 

const squer = function(x) {
    return x * x; //return qanaqadur qiymat qaytaradi
}

console.log(squer(12)) // 144

let son = console.log(Number("Son kriting: "));
let daraja = console.log(Number("Darajasi ?: "));

let power = function(x, y) {
    let javob = 1;

    for(let i=0; i < y; i++) {
        javob = x * javob;
    }

    return javob;
}

console.log(power(2, 4))