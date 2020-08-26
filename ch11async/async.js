'use strict';

// async & await
// clear style of using promise :)

// 1. async
// async라는 keyword를 함수 앞에 쓰면 코드 블럭이 자동으로 promise로 바뀐다.
async function fetchUser() {
  // do network request in 10 seconds
  return 'ellie';
}
/*
function fetchUser() {
    return new Promise((resolve, reject) => {
      // do network request in 10 seconds
      resolve('ellie');
    });
  }
*/
const user = fetchUser();
/*
[[PromiseStatus]]: "fulfilled"
[[PromiseValue]]: "ellie"
*/
user.then(console.log);
console.log(user);

// 2. await ✨
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1500);
  return '🍎';
}

async function getBanana() {
  await delay(1000);
  return '🍌';
}
/*
function getBanana() {
  return delay(1000)
        .then(() => '🍌');
}
*/

/*
function pickFruits() {
  return getApple()
        .then((apple) => {
            return getBanana()
                .then((banana) => `${apple} + ${banana}`);
        });
}
*/
async function pickFruits() {
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`;
}
pickFruits().then(console.log);
// 위 함수의 문제점 : apple과 banana를 얻는 과정에서 두 함수는 아무런 연관이 없지만
// getApple을 기다린 후 getBanana를 실행하기 때문에 2초가 소요된다.

// 문제 해결 ?
async function pickFruits1() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}
// 절대 위의 코드처럼 작성하지 ❌❌❌

// 3. useful APIs ✨ (all)
// promise 배열을 전달하게 되면, 모든 promise들이 병렬적으로
// 다 받을 때 까지 모아주는 API
// 다 받아진 배열이 return 된다.
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]) //
    .then((fruits) => fruits.join(' , '));
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
