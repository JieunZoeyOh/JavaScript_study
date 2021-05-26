const $input = document.querySelector('#input');
const $form = document.querySelector('#form');
const $logs = document.querySelector('#logs');

const numbers = Array(9).fill().map((item, index) => index + 1);
const answer = [];
for (let i = 0; i < 4; i++) {
  const index = Math.floor(Math.random() * (numbers.length));
  answer.push(numbers[index]);
  numbers.splice(index, 1);
}
// 확인용 - 추후 삭제
console.log(answer);

const tries = [];
let outCount = 0;

function checkInput(input) {
  if (input.length !== 4) {
    return alert('4자리 숫자를 입력해 주세요.'); // alert의 return 값은 모두 undefined이다✨
  }
  if (new Set(input).size !== 4) {
    return alert('중복되지 않게 입력해 주세요.');
  }
  if (tries.includes(input)) {
    return alert('이미 시도한 값입니다.');
  }
  return true;
}

const defeated = () => {
  $logs.appendChild(document.createTextNode(`패배! 정답은 ${answer.join('')}`));
  removeEvent();
}

const checkNumberBaseball = (event) => {
  event.preventDefault();

  const value = $input.value;
  $input.value = '';

  const valid = checkInput(value);
  if (!valid) return;

  if (answer.join('') === value) {
    $logs.append(`${value}: 홈런!`);
    removeEvent();
    return;
  }

  if (tries.length >= 9) {
    defeated()
    return;
  }

  // 스트라이크, 볼 체크
  let strike = 0;
  let ball = 0;
  answer.forEach((number, answerIndex) => {
    const index = value.indexOf(number);
    if (index < 0) return;
    if (index === answerIndex) {
      strike++;
    } else {
      ball++;
    }
  })
  /*
  for (let i = 0; i < answer.length; i++) {
    const index = value.indexOf(answer[i]);
    if (index > -1) { // 일치하는 숫자가 있는 경우
      if (index === i) { // strike
        strike++;
      } else { // ball
        ball++;
      }
    }
  }
  */
  // appendChild와 append
  // appendChild : createTextNode한 후에 appendChild 가능하다. 태그만 가능, 여러개 불가능
  // append : 문자열, 태그 추가 가능, 여러개 가능
  let message;
  if (strike === 0 && ball === 0) {
    message = `${value}: ${++outCount} OUT!`;
  } else {
    message = `${value}: ${strike} 스트라이크 ${ball} 볼`;
  }
  $logs.append(message, document.createElement('br'));
  tries.push(value);

  // 3 OUT인 경우 GAME OVER
  if (outCount === 3) {
    defeated();
  }
}

// 이벤트 등록
$form.addEventListener('submit', checkNumberBaseball);

const removeEvent = () => $form.removeEventListener('submit', checkNumberBaseball, false);
