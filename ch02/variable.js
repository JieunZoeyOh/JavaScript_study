// 1. Use strict
// added in ES 5
// use this for Valina JavaScript.
'use strict';



// 2. Variable
// let (added in ES6) - mutable type
let globalName = 'global name';
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever use this)
// var hoisting (move declaration from bottom to top)
// has no block scope -> 블럭을 철저히 무시한다.
console.log(age);   // undefined
age = 4;
console.log(age);   // 4
var age;

/*
name = 4; // Uncaught ReferenceError: Cannot access 'name' befor initialization
let name;
*/



// 3. Constant
// favor immutable data type always for a few reason:
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;



// 4. Variable types
// primitive, sing item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function //함수도 변수에 할당 가능, 인자로 전달 가능, 리턴 가능 

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInficity = -1 / 0;
const nAn = 'not a number' /2;
console.log(infinity);
console.log(negativeInficity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 12345469847509245934758247983471234239384n; // over (-2**53) ~ (2**53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);  // value: null, type: object

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`); // value: undefined, type: undefined

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 === gsymbol2); // true
// console.log(`value: ${symbol1}, type: ${typeof symbol1}`); Uncaught TypeError: Cannot convert a Symbol value to a string
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const ellie = { name: 'ellie', age: 20} ;
ellie.age = 21; //변경 가능하다.

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`); // value: hello, type: string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // value: 1, type: number
text = '7'+ 5;
console.log(`value: ${text}, type: ${typeof text}`); // value: 75, type: string
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); // value: 4, type: number
//console.log(text.charAt(0)); //Uncaught TypeError: text.charAt is not a function 
//현재 text는 number. 자바스크립트는 Runtime에서 type이 정해진다.

