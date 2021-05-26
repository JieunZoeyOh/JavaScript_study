const candidate = Array(45).fill().map((element, index) => index + 1);
const shuffle = [];

// 피셔 예이츠 셔플
while (candidate.length > 0) {
  const random = Math.floor(Math.random() * candidate.length); // 무작위 인덱스 뽑기
  const spliceArray = candidate.splice(random, 1);
  shuffle.push(spliceArray[0]);
}
// 무작위 순서 배열
console.log(shuffle);

const winBalls = shuffle.slice(0, 6).sort((a, b) => a - b);
const bonus = shuffle[6];

console.log(winBalls, bonus);

const $result = document.querySelector('#result');
const $bonus = document.querySelector('#bonus');

const colorize = (number, $parent) => {
  if (number < 10) {
    $parent.className = 'ball underTen';
  } else if (number < 20) {
    $parent.className = 'ball underTwenty';
  } else if (number < 30) {
    $parent.className = 'ball underThirty';
  } else if (number < 40) {
    $parent.className = 'ball underForty';
  } else {
    $parent.className = 'ball fortyOrMore';
  }
};

const drawBall = (number, $parent) => {
  const $ball = document.createElement('div');
  $ball.textContent = number;
  colorize(number, $ball);

  $parent.appendChild($ball);
};

for (let i = 0; i < winBalls.length; i++) {
  // drawBall에 인수가 없는 경우 setTimeout(drawBall, 1000); 처럼 줄여 쓸 수 있다.
  setTimeout(() => {
    drawBall(winBalls[i], $result);
  }, 1000 * (i + 1));
}

setTimeout(() => {
  drawBall(bonus, $bonus);
}, 7000);
