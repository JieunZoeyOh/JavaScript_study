'use strict';

// Promise is a JavaScript object for asychronous operation.
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.💡
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network 통신, read files는 비동적으로 처리하는 것이 좋다.)
  console.log('doing something...');
  // new Promise 하는 순간 executor함수가 호출 된다.
  setTimeout(() => {
    resolve('ellie');
    // reject(new Error('no network'));
  }, 2000);
});

// 2. Consumers: then, catch, finally
promise //
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    // 실패하든 성공하든 상관없이 무조건 실행
    console.log('finally');
  });

// Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling

const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    // setTimeout(() => resolve(`${hen} => 🥚`), 1000);
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

/*
getHen()
  .then(hen => getEgg(hen))
  .then(egg => cook(egg))
  .then(meal => console.log(meal));
*/
// 콜백함수를 전달할 때 받아오는 value를 다른 함수로 바로 전달할 때 생략 가능
getHen() //
  .then(getEgg)
  .catch((error) => {
    return '🥖';
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);
