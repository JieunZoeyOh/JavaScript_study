// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  const fruitString = fruits.join(' ');
  console.log(fruitString);
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const array = fruits.split(', '); // ["🍎", "🥝", "🍌", "🍒"]
  //const array = fruits.split(', ', 2); // ["🍎", "🥝"]
  console.log(array);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array); // [5, 4, 3, 2, 1] 배열 값 자체도 값이 바뀌었다.👀 조심하기!
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];

  const newArray = array.slice(2);
  console.log(newArray); // [3, 4, 5]
  console.log(array); // [1, 2, 3, 4, 5] array는 그대로 보존되어 있다.
  // slice: 원하는 부분만 return해서 받아오고 싶을 때 사용

  const result = array.splice(2);
  console.log(result); // [3, 4, 5]
  console.log(array); // [1, 2] array에서 사라짐
  // splice: 배열 자체를 수정함.
}
console.clear();

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
/*
모든 요소마다 해야 하는 일이 있다면 forEach를 쓰고,
찾을 것이 있다면 find를 써요.
서로 써야하는 용도가 달라요
*/
{
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled === true);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const scores = [];
  students.forEach((student) => scores.push(student.score));
  console.log(scores);
}
// map: 배열안의 요소들을 원하는 함수를 이용해서 다른 방식의 데이터를 만들고 싶을 때 사용
{
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  // 하나라도 만족하는 값이 있다면 true / 없다면 false
  const result = students.some((student) => student.score < 50);
  console.log(result);

  // 모두 다 만족하면 true / 하나라도 만족하지 않으면 false
  const result1 = students.every((student) => student.score < 50);
  console.log(result1);

  // every를 사용하여 50점 아래 학생이 있는지 확인하고 싶다면 (! 사용)
  // 되도록이면 some을 사용하자
  const result2 = !students.every((student) => student.score >= 50);
  console.log(result2);
}

// Q9. compute students' average score
// reduce: 누적되는 값을 사용할 때
{
  let sum = 0;
  students.forEach((student) => (sum += student.score));
  const average = sum / students.length;
  console.log(average);
}
{
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  const average = result / students.length;
  console.log(average);
}
// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join(', ');
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join(', ');
  console.log(result);
}

// result should be: '90, 88, 80, 66, 45'
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => b - a)
    .join(', ');
  console.log(result);
}
