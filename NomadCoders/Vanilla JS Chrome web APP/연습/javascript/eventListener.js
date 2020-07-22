"use strict";
const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";
const originalText = title.innerText;

function handleClick() {
  // const currentClass = title.className;
  // const hasClass = title.classList.contains(CLICKED_CLASS);
  // if (!hasClass) {
  //   title.classList.add(CLICKED_CLASS);
  // } else {
  //   title.classList.remove(CLICKED_CLASS);
  // }
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("click", handleClick);
  // "click" != "clicked"
}
init();
