"use strict";

// CALLBACK HELL
// Promise 로 변경

class UserStorage {
  loginUser(id, passward) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "ellie" && passward === "dream") ||
          (id === "coder" && passward === "academy")
        ) {
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 2000);
    });
  }
  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "ellie") {
          resolve({ name: "ellie", role: "admin" });
        } else {
          reject(new Error("no access"));
        }
      }, 1000);
    });
  }
}

// promise chaining으로 변경
const userStorage = new UserStorage();
const id = prompt("enter your id");
const passward = prompt("enter your passward");

userStorage //
  .loginUser(id, passward)
  .then(userStorage.getRoles)
  .then((nameAndRole) =>
    alert(`Hello ${nameAndRole.name}, you have a ${nameAndRole.role} role`)
  )
  .catch(console.log);

// userStorage.loginUser(
//   id,
//   passward,
//   (user) => {
//     userStorage.getRoles(
//       user,
//       (userWithRole) => {
//         alert(
//           `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
//         );
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
//   },
//   (error) => {
//     console.log(error);
//   }
// );
