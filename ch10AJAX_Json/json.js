'use strict';
// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json); // ["apple","banana"] -> double quotation (: JSON의 규격사항)

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${this.name} can jump!`);
  },
  // symbol: Symbol('id'),
};

json = JSON.stringify(rabbit);
console.log(json);
// {"name":"tori","color":"white","size":null,"birthDate":"2020-08-25T11:12:06.001Z"}
// jump 함수는 json에 포함되어 있지 않다
// object에 있는 데이터가 아니기 때문에 제외된다.
// Symbol도 json에서 제외

json = JSON.stringify(rabbit, ['name', 'color']); // 원하는 property만 나오게 할 수 있다.
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'ellie' : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
rabbit.jump();
// obj.jump(); rabbit을 json로 변환했을 때 함수가 포함되어있지 않았기 때문에 obj에도 함수 jump가 없다.
// json에는 data만 포함되어있다.!!

console.log(rabbit.birthDate.getDate());
//console.log(obj.birthDate.getDate()); -> Error : birthDate가 string이기 때문에
console.log(obj.birthDate);

// birthDate를 string이 아닌 Date로 받기 위해서 reviver 이용!
const obj1 = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj1);
console.log(obj1.birthDate.getDate());
