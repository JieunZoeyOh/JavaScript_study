'use strict';

// Array🎉

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index Position
const fruits = ['🍇', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
fruits.forEach((value, index, array) => {
  console.log(value);
  console.log(index);
  console.log(array);
});

fruits.forEach((value) => console.log(value));

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push('🍆', '🥝');
console.log(fruits); // ["🍇", "🍌", "🍆", "🥝"]
// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits); // ["🍇", "🍌"]

// unshift: add an item from the beginning
fruits.unshift('🍊', '🍒');
console.log(fruits); // ["🍊", "🍒", "🍇", "🍌"]

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits); // ["🍇", "🍌"]

// note❗❗ shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push('🍋');
fruits.push('🍊');
fruits.push('🍉');
fruits.push('🍈');
fruits.push('🍑');
console.log(fruits); // ["🍇", "🍌", "🍋", "🍊", "🍉", "🍈", "🍑"]
// fruits.splice(1); // index 1부터 다 지움 ["🍇"]
fruits.splice(1, 1); // index 1(🍌)부터 한 개 데이터만 삭제
console.log(fruits); // ["🍇", "🍋", "🍊", "🍉", "🍈", "🍑"]
fruits.splice(1, 0, '🥥', '🍍'); // index 1에 추가
console.log(fruits); // ["🍇", "🥥", "🍍", "🍋", "🍊", "🍉", "🍈", "🍑"]

// combine two arrays
const fruits2 = ['🍐', '🍏'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits); // ["🍇", "🥥", "🍍", "🍋", "🍊", "🍉", "🍈", "🍑", "🍐", "🍏"]

console.clear();
// 5. Searching
// indexOf: find the index
console.log(fruits); //["🍇", "🥥", "🍍", "🍋", "🍊", "🍉", "🍈", "🍑"]
console.log(fruits.indexOf('🍊')); // index: 4
console.log(fruits.indexOf('🍏')); // index: -1 -> 존재하지 않음

// includes
console.log(fruits.includes('🍍')); // true
console.log(fruits.includes('🍗')); // false

// lastIndexOf
console.clear();
fruits.push('🍍');
console.log(fruits);
console.log(fruits.indexOf('🍍')); // 2
console.log(fruits.lastIndexOf('🍍')); // 8
