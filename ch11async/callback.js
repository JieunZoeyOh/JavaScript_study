'use strict';

// JavaScript is synchronous. 동기적이다.
// Execute the code block in order after hoisting.

// hoisting: var, function declaration
// var변수와 또는 function 선언들이 자동적으로 제일 위로 올라가는 것.
console.log('1');
// setTimeout: 브라우저 API => 브라우저에 요청을 보낸다.
setTimeout(() => console.log('2'), 1000);
console.log('3');

// Synchronous callback
// 💡 함수의 선언은 hoisting 되기 때문에 맨 위로 이동
function printImmediately(print) {
  print();
}
printImmediately(() => console.log('hello'));
/*
    1
    3
    hello
    2
    */

// Asynchronous callback
// 💡 함수의 선언은 hoisting 되기 때문에 맨 위로 이동
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);
/*
    1
    3
    hello
    2
    async callback
    */
