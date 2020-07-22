"use strict";
// Promise is a JavaScript object for asynchronous operation
// 이해 포인트
// 1. state
// 2. producer / consumer 차이

// state: pending -> fulfilled or rejected
// promise가 만들어져서 우리가 지정한 operation이 수행 중일때는 - pending
// operation을 완료하면 - fulfilled
// file을 찾을 수 없거나 네트웍 문제 - rejected

// Producer vs Consumer

// 1. Producer
// Promise 안에 executor 콜백함수, 그 콜백함수 안에 (콜백함수 두개)
// resolve: 기능을 수행해서 마지막에 최종 데이타 전달
// reject: 문제 생기면 호출

// Promise 생성과 동시에 executor가 실행되게 된다
const promise = new Promise((resolve, reject) => {
  // doing some heavy(network, read files)
  console.log("doing something...");
  setTimeout(() => {
    resolve("ellie"); // 어 데이터를 받아왔는데, 사용자 이름이 'ellie'였어
    // reject(new Error("no network"));
  }, 2000);
});

// 2. Consumers: then, catch, finally
promise
  .then((value) => {
    // promise가 잘 실행이 된다면, 그러면,
    // resolve에 전달된 값을 value로 받아와서 .then 콜백 실행
    // 'ellie'를 받는다
    console.log(value);
  }) // .then 해도 어차피 원래대로의 Promise를 return 한다

  .catch((error) => {
    console.log(error);
  }) // reject에서 건네준 값을 받아서 .catch 콜백 실행
  .finally(() => {
    // 성공 여부와 관계없이 무조건 실행(최근에 추가된 기능)
    console.log("finally");
  });
// Chaining

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});
// then: 값 or Promise 전달 가능
fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(num - 1);
      }, 1000);
    }).then((num) => console.log(num));
  });

// 4. Error Handling

const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hen"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen} -> egg`), 1000);

    // setTimeout(() => reject("CRACKED!"), 3000);
    // setTimeout(() => reject(new Error(`error! ${hen} -> egg`)), 3000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} -> 후라이`), 1000);
  });

getHen()
  .then((hen) => getEgg(hen))
  // 하나의 인자만 받아서 고대로 전달하는 경우는,
  // 다 생략하고 .then(getEgg)만 써도 가능

  .catch((error) => `${error} -> bread`)

  .then((egg) => cook(egg))
  .then((meal) => console.log(meal))
  .catch(console.log);
