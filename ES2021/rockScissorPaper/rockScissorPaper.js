const $computer = document.querySelector('#computer');
const $scissors = document.querySelector('#scissors');
const $rock = document.querySelector('#rock');
const $paper = document.querySelector('#paper');
const $score = document.querySelector('#score');

const IMG_URL = './rsp.png';
$computer.style.background = `url(${IMG_URL}) 0 0`;
$computer.style.backgroundSize = 'auto 200px'; // 높이 200px 고정

/**
 * X 좌표 그룹화
 */
const rspX = {
  scissors: '0',   // 가위
  rock: '-220px',  // 바위
  paper: '-440px', // 보
};

let computerChoice = 'scissors';
/**
 * changeImage
 */
const changeComputerHand = () => {
  // background와 backgroundSize는 1개의 set로 적어줘야한다. 리셋 됨.
  if (computerChoice == 'scissors') {
    computerChoice = 'rock';
  } else if (computerChoice == 'rock') {
    computerChoice = 'paper';
  } else if (computerChoice == 'paper') {
    computerChoice = 'scissors';
  }
  $computer.style.background = `url(${IMG_URL}) ${rspX[computerChoice]} 0`;
  $computer.style.backgroundSize = 'auto 200px';
};

let intervalId = setInterval(changeComputerHand, 50); // 0.05초

const scoreTable = {
  rock: 0,
  scissors: 1,
  paper: -1,
};

/*
const clickButton = () => {
  clearInterval(intervalId);
  $scissors.removeEventListener('click', clickButton);
  $rock.removeEventListener('click', clickButton);
  $paper.removeEventListener('click', clickButton);
  // 점수 계산 및 화면 표시
  setTimeout(() => {
    intervalId = setInterval(changeComputerHand, 50);
    $scissors.addEventListener('click', clickButton);
    $rock.addEventListener('click', clickButton);
    $paper.addEventListener('click', clickButton);
  }, 1000);
};
$scissors.addEventListener('click', clickButton);
$rock.addEventListener('click', clickButton);
$paper.addEventListener('click', clickButton);
*/

// flag 변수
let clickable = true;
let score = 0;
// 3선승제, 무승부: 무효
let me = 0;
let computer = 0;

/**
 * rock-paper-scissors outcome
 * @param event 
 * @returns 
 */
const clickButton = (event) => {
  if (!clickable) return;

  clearInterval(intervalId);
  clickable = false;
  // 점수 계산 및 화면 표시
  const myChoice = event.target.id;
  const myScore = scoreTable[myChoice];
  const computerScore = scoreTable[computerChoice];
  const diff = myScore - computerScore;
  let message = '';
  if ([-1, 2].includes(diff)) {
    message = '승리';
    score++;
    me++;
  } else if ([-2, 1].includes(diff)) {
    message = '패배';
    score--;
    computer++;
  } else {
    message = '무승부';
  }

  if (me >= 3 || computer >= 3) { // 혹시 모를 버그 대응
    $score.textContent = `${me >= 3 ? '나의 승리' : '컴퓨터의 승리'}` + ` ${me}:${computer}`;
    return;
  }

  $score.textContent = `${message} 총: ${score}점`;
  setTimeout(() => {
    clickable = true;
    intervalId = setInterval(changeComputerHand, 50);
  }, 1000);
};

$scissors.addEventListener('click', clickButton);
$rock.addEventListener('click', clickButton);
$paper.addEventListener('click', clickButton);
