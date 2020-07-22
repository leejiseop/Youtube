"use strict";

// CALLBACK HELL
// Promise 로 변경

const id = "ellie";
const passward = "dream";

async function loginUser(id, passward) {
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

async function getRoles(user) {
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

loginUser(id, passward)
  .then(getRoles)
  .then((nameAndRole) =>
    console.log(
      `Hello ${nameAndRole.name}, you have a ${nameAndRole.role} role`
    )
  );
