const input = document.querySelector('input');
const check = document.querySelector('#check');
const logs = document.querySelector('#logs');
/*
const makeAnswer = new Set();
let count = 0;
while (makeAnswer.size < 4) {
  makeAnswer.add(String(Math.floor(Math.random() * 10)));
}
const answer = [...makeAnswer].join('');
*/

let count = 0;
let numbers = Array(10)
  .fill()
  .map((value, index) => index);
let answer = [];

/*
let numbers = [];
for (let i = 0; i < 10; i++) {
    numbers.push(i);
}
let answer = [];
*/
/*
let n = 0;
while (n < 4) {
  const index = Math.floor(Math.random() * 10);
  if (numbers[index] !== undefined) {
    answer.push(numbers[index]);
    numbers.splice(index, 1);
    n++;
  }
}
*/
for (let i = 0; i < 4; i++) {
  const index = Math.floor(Math.random() * numbers.length);
  answer.push(numbers[index]);
  numbers.splice(index, 1);
}
console.log(answer);

check.addEventListener('click', () => {
  const value = input.value;
  // if문 조건문에서 false인것 -> '', 0, NaN, false, undefined, null : falsy value
  if (value && count < 10 && value.length === 4) {
    count += 1;
    let strike = 0;
    let ball = 0;
    if (answer.join('') === value) {
      logs.appendChild(document.createTextNode('HR! Congratulation!!'));
    } else {
      for (const [aIndex, aNumber] of answer.entries()) {
        for (const [iIndex, iString] of value.split('').entries()) {
          if (aNumber === Number(iString)) {
            if (aIndex === iIndex) {
              strike += 1;
            } else {
              ball += 1;
            }
          }
        }
      }
      const text = `input: ${value}, strike: ${strike}, ball: ${ball}, 남은 기회: ${
        10 - count
      }`;
      logs.appendChild(document.createTextNode(text));
      logs.appendChild(document.createElement('br'));
      // logs.append(text, document.createElement('br'));
      if (count === 10) {
        logs.appendChild(
          document.createTextNode(`Game Over: ${answer.join('')}`)
        );
      }
    }
  }
});
