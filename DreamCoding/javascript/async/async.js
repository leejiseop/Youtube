"use strict";
// async & await
// // clear style of using Promise :)
// 사실, 우리가 쓰는 모든 async 함수는 promise를 리턴하고, (then으로 가공 필요)
// 모든 await 함수는 일반적으로 promise가 됩니다.

// 1. async

// function fetchUser() {
//   return new Promise((resolve, reject) => {
//     // do network request in 10 secs...
//     resolve("ellie");
//   });
// }
async function fetchUser() {
  // do network request in 10 secs...
  return "ellie";
}
// const fetchUser2 = () =>
//   new Promise((resolve, reject) => {
//     // do network request in 10 secs...
//     resolve("ellie");
//   });

const user = fetchUser();
user.then(console.log);
console.log(user);

console.clear();

// 2. await
function delay(ms) {
  // 정해진 시간이 지나면 resolve를 호출하는 Promise를 return
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  // await: async 함수 안에서만 사용 가능
  await delay(2000);
  // throw 'error';
  return "apple";
}
async function getBanana() {
  await delay(5000);
  return "banana";
}
// function getBanana() {
//   return delay(1000) //
//     .then(() => "banana");
// }

// 콜백 지옥
// function pickFruits() {
//   return getApple().then((apple) => {
//     return getBanana().then((banana) => `${apple} + ${banana}`);
//   });
// }
// pickFruits().then(console.log);

async function pickFruits() {
  // try catch로 err 처리하면 된다

  // await 두개 같이 묶으려면... (꼼수)
  // const applePromise = getApple();
  // const bananaPromise = getBanana();
  // const apple = await applePromise;
  // const banana = await bananaPromise;

  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`;
}
pickFruits().then(console.log); // 소요시간 7초

// 3. useful Promise APIs
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]) // Promise 배열을 전달해주면,
    .then((fruits) => fruits.join(" + "));
  // 모든 Promise들이 다 도착할 때까지 기다린 뒤 배열을 return한다.
}
pickAllFruits().then(console.log); // 소요시간 5초!
// console.log(pickAllFruits()); // 틀린방법

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]); // Promise 배열을 전달해주면,
  // 가장 먼저 도착한 Promise 하나만 return
}
pickOnlyOne().then(console.log);
