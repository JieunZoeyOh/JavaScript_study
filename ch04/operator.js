// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);
console.log("ellie's \nbook"); // \n: 줄 바꿈, \t: tap

//2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`); // preIncrement: 3, counter: 3

const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`); // postIncrement: 3, counter: 4

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`); // preDecrement: 3, counter: 3

const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`); // postDecrement: 3, counter: 2


// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
console.log('x += y : ' + x ); // x += y : 9
x -= y;
console.log('x -= y : ' + x ); // x -= y : 3
x *= y;
console.log('x *= y : ' + x ); // x *= y : 18
x /= y;
console.log('x /= y : ' + x ); // x /= y : 3

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // lss than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false; 
const value2 = 4 < 2; // false

// || (or), finds the first truthy value 💡처음에 true가 나오면 멈춘다. 
console.log(`or: ${value1 || value2 || check()}`);
// && (and)), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

// 📌TIP!!
// heavy한 function이나 연산은 뒤로 보내고, simple한 애들은 앞에 두기!
// 앞에서 true가 나오면 뒤는 안보기 때문에!

// often used to comparess long if-statement
// nullableObject && nullableObject.something
/*
if (nullableObject != null){
    nullableObject.something;
}
를
if (nullableObject && nullableObject.something)로 사용가능
*/

function check() {
    for (let i = 0; i < 10; i++){
        //wasting time
        console.log('🎃'); // 만약 value1이 true라면 console에 나오지 않는다.
    }
    return true;
}


// ! (not): 값을 반대로 바꿔준다.
console.log(!value1);


// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with the type conversion
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === strict equality, no type conversion
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// object equality by reference
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2);  // false
console.log(ellie1 === ellie2); // false 
// 메모리에는 ellie1과 ellie2는 서로 다른 reference와 다른 object를 가르키고 있다.
console.log(ellie1 === ellie3); // true
// ellie3은 ellie1와 똑같은 reference를 가지고 있다.

// equality - puzzler
console.log(0 == false); //true
console.log(0 === false); //false different type
console.log('' == false); //true
console.log('' === false); //false different type
console.log(null == undefined); //true💡
console.log(null === undefined); //false different type

// 8. Conditional operators: if
// if, else if, else
const name = 'ellie';
if (name === 'ellie'){
    console.log('Welcome, Ellie!');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unKnown');
}

// 9. Ternary operatoer: ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0){
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);


// for loop, for(begin; condition; step)
for (i = 3; i > 0; i = i - 2) {
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++){
    for (let j = 0; j < 10; j++){
        console.log(`i: ${i}, j:${j}`);
    }
}
console.clear();
// break, continue
// Q1. iterate from 0 to 10 and print only even numbers
// (use continue)
for (let i = 0; i <= 10; i++){
    if (i % 2 !== 0)
        continue;
    console.log(`q1. ${i}`);
}
// 보통은 짝수일 때 출력하는 코드를 더 많이 사용
for (let i = 0; i <= 10; i++){
    if (i % 2 === 0)
        console.log(`q1. ${i}`);
}

// Q2. iterate from 0 to 10 and print numbers until reching 8 (use break)
for (let i = 0; i <= 10; i++){
    if(i > 8) 
        break;
    console.log(`q2. ${i}`);
}