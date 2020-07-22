"use strict";
// Function
// - fundamental building block in the program
// - subprogram can be used multiple items
// - performs a task or calculates a value

// 함수 선언문, 함수 표현식
// 함수 선언문은 Hoisting되어 스크립트 실행 전에 함수 생성
// ㄴ '해당 블록 내에서' 가장 위로 올라가서 함수 생성. 블록 밖에선 사용 X
// 함수 표현식은 실행 흐름에 따라 도달했을 때 함수 생성

// 1. Function declaration
// function name(param1, param2) {... return;}
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint 보다는 createCard, createPoint
// function is object in JS
function log(message) {
  console.log(message);
}
log("abc");
// 입력 출력 타입이 없으니 주의! -> 그래서 나온게 TypeScript
// function print(message: string): number {
//   console.log(message);
//   return 0;
// }

// 2. Parameters
// premetive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
  obj.name = "coder";
}
const ellie = { name: "ellie" };
changeName(ellie);
console.log(ellie.name);

// 3. Default parameters(added in ES6) (= 'unknown' 부분)
function showMessage(message, from = "unknown") {
  // if (from === undefined) {
  //   from = 'unknown';
  // } 이전 방법
  console.log(`${message} by ${from}`);
}
showMessage("Hi!");

// 4. Rest parameters (added in ES6) ... -> 배열 형태로 전달
function printAll(...args) {
  console.log(args);
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
  // or
  for (const i of args) {
    // why 'const'?
    console.log(i);
  }
  // or
  args.forEach((arg) => console.log(arg));
}
printAll("dream", "coding", "ellie"); // args.length === 3;

// 5. Local scope
let globalMessage = "global"; // global variable
function printMessage() {
  let message = "hello"; // local variable
  console.log(message);
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = "hello";
  }
  // console.log(childMessage); // error
  // return undefined; // 생략
}
printMessage();
// 밖에서는 안이 보이지 않고
// 안에서만 밖을 볼 수 있다!

// 6. Return a value
// sum(1, 3); // function hoisting
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad!
function upgradeUser(user) {
  if (user.point > 10) {
    // loading upgrade logic...
  }
}
// GOOD!
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // loaging upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to another functions
// can be returned by another function

// 1. Function Expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () {
  // 함수 이름이 없음: anonymous function
  // 이름 있으면 named function
  // print(); // error
  console.log("print");
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  // printYes, printNo 콜백함수
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}
const printYes = function () {
  // anonymous function
  console.log("Yes!");
};
const printNo = function print() {
  // named function
  // 디버깅시에 함수이름 나오라고 씀
  // 재귀호출 하려고 할때 씀
  console.log("No!");
};
randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

// Arrow function
// always anonymous
// 함수형 프로그래밍에 잘 쓰인다고 함
const simplePrint = function () {
  console.log("simplePrint!");
};
const simplePrint2 = () => console.log("simplePrint2!");
const add = (a, b) => a + b;
// args.forEach( (arg) => console.log(arg) );
// return이 함축적으로 들어있다(?)
const simpleMultiply = (a, b) => {
  // do something more
  return a * b; // {}블럭을 쓰게되면 return을 적어줘야 함
};

// IIFE: Immediately Invoked Function Expression
// 최근에는 잘 안쓰이지만 알아두면 유용
(function hello() {
  console.log("IIFE");
})();
