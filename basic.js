// =============== Numbers ================
13

// Fractional numbers
9.81

// For very  big or very small numbers - scientific notation
2.99e8

// Arithmetic Operators
2 + 4
100 * 4 /  11
(100 + 4) / 11
33 % 11 // степень

// Special Numbers

Infinity // number +
0 / 0 // NaN   Not a Number
Infinity / -Infinity // NaN

// =============== Strings ================

// backticks
`backticks`

// double quotes
"double quotes"

// single quotes
'single quotes'

// Concatenates
"con" + "cate" + "e" + "nate" + "Concatenate"

// Template literals > can do a few more tricks
`half of 100 is ${100 / 2}` // "half of 100 is 3009"

// =============== Unary Operators ================

console.log(typeof 4.5) // Number
console.log(typeof "x") // String

// =============== Boolean Values ================

1 > 2 // false
1 < 2 // true

// =============== Comparison Operators ================

// <
// >
// >=
// <=
// ==
// !=

// =============== Logical Operators ================

// && -> and
true && true // true
true && false // false
false && true // false
false && false // false

// || -> or
true || true // true
true || false // true
false || true // true
false || false // false

2 > 1 || 1 > 2 // true

// ! -> not
!true // false
!false // true

// ? :
100 * 4 == 401 ? "true" : "false" // false
100 * 4 == 400 ? "true" : "false" // true

// =============== Empty Values ================

null
undefined

// =============== Automatic Type Conversion ================

8 + null // -> 0
"5" - 1 // -> 4
"5" + 1 // -> 51
"five" * 2 // -> NaN
false == 0 // -> true

null == undefined // -> true
null == 0 // -> false

"5" == 5 // -> true
"5" === 5 // -> false
"5" != 5 // -> false
"5" !== 5 // -> true

// =============== Summary ================

'We loked at four types of JavaScript values: numbers, strings, boolean and undefined values.'
