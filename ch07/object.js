'use strict';
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object

// object = { key : value }; → Object는 key와 value의 집합체이다.

/*
const name = 'ellie';
const age = 4;

print(name, age);
function print(name, age) {
  console.log(name);
  console.log(age);
}
*/

// 1. Literals and Properties
// Object 생성하기
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}
const ellie = { name: 'ellie', age: 4 };
print(ellie);

// ❗ 자바스크립트는 Class가 없어도 Object를 만들 수 있다.
// 또한 뒤늦게 property를 추가할 수 있다.
// with JavaScript magic (dynamically typed language)
// can add properties later
ellie.hasJob = true; // hasJob 프로퍼티 추가
console.log(ellie.hasJob); // true

// can delete properties later
delete ellie.hasJob; // hasJob 프로퍼티 제거
console.log(ellie.hasJob); // undefined

// 2. Computed properties
// key should be always string
// 우리가 정확하게 어떤 키가 필요한지 모를 때,
// 즉, Runtime에서 결정될 때 Computed properties를 사용
console.log(ellie.name); // .(dot)으로 접근하거나
console.log(ellie['name']); // computed property로 접근

ellie['hasJob'] = true; // property 추가하고 값 할당 가능
console.log(ellie.hasJob);

// 💥💥중요💥💥
function printValue(obj, key) {
  console.log(obj.key); // undefined object에 key라는 property 없는데?
  console.log(obj[key]);
}

printValue(ellie, 'name');
printValue(ellie, 'age');

// 3. Propery value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
// 동일한 key와 value를 반복해서 작성해야하는 문제점

// const person4 = makePerson('ellie', 30);
const person4 = new Person('ellie', 30);
console.log(person4); // {name: "ellie", age: 30}
/*
function makePerson(name, age) {
  return {
    name, // name: name, key와 이름의 value가 동일하다면 생략할 수 있다.
    age, // age: age,
  };
}
*/

// 4. Constructor Function
function Person(name, age) {
  // this = {}; 생략 됨
  this.name = name;
  this.age = age;
  // return this; 생략 됨
}

// 5. in operator: property existence check (key in obj)
console.log('name' in ellie); // true
console.log('age' in ellie); // true
console.log('random' in ellie); // false
console.log(ellie.random); // undefined

// 6. for..in vs for..of
// for (key in obj) ❗❗❗❗
for (let key in ellie) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
// for of를 더 권장한다.
for (let value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' };
const user2 = user; // user와 user2의 동일한 ref가 같은 object를 가르키고 있다.
user2.name = 'coder';
console.log(user); // {name: "coder", age: "20"}

// 똑같은 reference를 갖는게 아닌,
// object를 복제할 수 있는 방법

// old way
const user3 = {}; // 빈 object를 만들고 나서
for (let key in user) {
  user3[key] = user[key];
}

// new way
const user4 = {};
Object.assign(user4, user);
// 또는
const user5 = Object.assign({}, user);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
// 동일한 프로퍼티를 가진 경우 뒤에 있는 object의 값을 덮어 씌운다.
console.log(mixed.color); // blue
console.log(mixed.size); // big
