"use strict";

// JavaScript is Synchronous. 동기적
// Execute the code block in order after hoisting
// Hoisting: var, function declarati
on;

console.log(1);
setTimeout(() => {
  console.log(2);
}, 1000); // 1000ms 지난 뒤에 콜백function 내의 내용 실행
console.log(3);

// Synchronous Callback
function printImmediately(print) {
  // 함수의 선언은 Hoisting된다!
  print();
}
printImmediately(() => console.log("hello"));

// Asynchronous Callback
function printWithDelay(print, timeout) {
  // 함수의 선언은 Hoisting된다!
  setTimeout(print, timeout); // (실행할것, 시간)
}
printWithDelay(() => console.log("async callback"), 2000);

console.clear();
// CALLBACK HELL
class UserStorage {
  loginUser(id, passward, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && passward === "dream") ||
        (id === "coder" && passward === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const passward = prompt("enter your passward");
userStorage.loginUser(
  id,
  passward,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
