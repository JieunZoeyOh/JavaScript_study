class Counter {
  constructor(runEveryFiveTimes) {
    this.counter = 0;
    this.callback = runEveryFiveTimes;
  }

  // class 내에서 함수 선언 시 function 작성하지 않는다.
  increase() {
    this.counter++;
    console.log(this.counter);
    if (this.counter % 5 === 0) {
      this.callback && this.callback(this.counter); // undefined 처리
    }
  }
}

// const coolCounter = new Counter(runEveryFiveTimesLogVer); // callback : function
const coolCounter = new Counter(runEveryFiveTimesAlertVer); // callback : function
// 재사용이 가능하다.
// const coolCounter = new Counter(); // callback : undefined
// new 연산자를 사용하여 클래스 생성할 경우 -> constructor 실행된다.

for (let i = 0; i < 10; i++) {
  coolCounter.increase();
}

function runEveryFiveTimesLogVer(num) {
  console.log(`Wow! ${num}`);
}

function runEveryFiveTimesAlertVer(num) {
  alert(`Wow! ${num}`);
}
