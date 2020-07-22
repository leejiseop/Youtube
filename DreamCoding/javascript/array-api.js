"use strict";

// 1. make a string out of an array
{
  const fruits = ["apple", "banana", "mango"];
  const result = fruits.join(", ");
  console.log(result);
}

// 2. make an array out of a string
{
  const fruits = "apple, banana, mango";
  const result = fruits.split(", ");
  console.log(result);
}

// 3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse(); // 실제 배열을 뒤집은 후 반환
  console.log(result); // 5 4 3 2 1
  console.log(array); // 5 4 3 2 1
}

// 4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  // const result = array.splice(0, 2); // 배열 자체를 잘라낸 후, '잘라낸걸 반환'
  const result = array.slice(2, 5); // 원래 배열은 놔두고, 일부만 복사해옴
  console.log(array);
  console.log(result);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// 5. find a student with the score 90
{
  const result = students.find((student) => student.score === 90);
  // 콜백함수에서 boolean을 return해줘야한다
  console.log(students.indexOf(result) + 1);
}

// 6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled === true);
  console.log(result); // student 들의 배열
  // 기존 배열에서 필터링을 거쳐서 남은 것들을 모은 배열
  // 배열의 원소 하나하나를 ( )로 받아서 연산한다(?)
}

// 7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score);
  console.log(result); // student.score들의 배열
  // mapping -> 기존 배열을 1:1대응시켜 함수를 거쳐 가공된 새로운 배열을 만듬
}

// 8. check if there is a student with the score lower than 50
{
  console.clear();
  const result = students.some((student) => student.score < 50);
  // 만족하는게 있냐 없냐를 boolean으로 반환
  console.log(result); // true
  const result2 = students.every((student) => student.score < 50);
  // 모두 만족하냐를 boolean으로 반환
  console.log(result2); // false
}

console.clear();

// 9. Compute students' average score
{
  // 배열을 돌면서 콜백함수를 통과시키며 누적된 값을 반환
  // reduceRight : 배열 뒤에서부터 시작

  // const result = students.reduce((prev, curr) => {
  //   // curr이 배열을 돌고 return된 값이 다시 prev로 들어간다
  //   console.log("--------------------");
  //   console.log(prev);
  //   console.log(curr);
  //   return prev + curr.score;
  // }, 0); // , 0 initial value
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length);
}

// 10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join(", ");
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b) // 앞에거에서 뒤에거를 빼면 '음수가 되는 형태'로 정렬
    // .sort((a, b) => b - a) // 내림차순
    .join(", ");
  console.log(result);
}
