// Whole-script strict mode syntax
// JavaScript is very flexible
// flexible === dangerous
// added ECMAScript 5
'use strict';   
// 자바스크립트 엔진이 조금 더 효율적이고 빠르게 자바스크립트를 분석할 수 있기 때문에
// 실행하는데 있어서 조금 더 나은 성능 향상을 기대할 수 있다.
console.log('Hello World!');
let a; // a를 선언하지 않고 값을 넣으면 에러 발생
a = 6; //Uncaught ReferenceError: a is not defined