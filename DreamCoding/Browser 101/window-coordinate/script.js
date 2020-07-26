"use strict";
const boxes = document.getElementsByTagName("div");
const specialBox = document.querySelector(".special");

const scrollBy = document.querySelector(".scroll-by"),
  scrollTo = document.querySelector(".scroll-to"),
  scrollInto = document.querySelector(".scroll-into");

function consolePrintBoxXY(event) {
  const arrayBoxes = Array.from(boxes);
  arrayBoxes.forEach((box) => {
    box.classList.remove("clicked");
  });
  event.target.classList.add("clicked");
  const clickedBox = document.querySelector(".clicked");
  const boxRect = clickedBox.getBoundingClientRect();
  console.log(`top: ${boxRect.top}, left: ${boxRect.left}`);
  console.log(`${event.pageX}, ${event.pageY}`);
  console.log(`${event.clientX}, ${event.clientY}`);
}

Array.from(boxes).forEach((box) => {
  box.addEventListener("click", consolePrintBoxXY);
});

function handleScrollBy() {
  window.scrollBy(0, 100);
}
function handleScrollTo() {
  window.scrollTo(0, 100);
}
function handleScrollInto() {
  specialBox.scrollIntoView({ behavior: "smooth", block: "center" });
}

scrollBy.addEventListener("click", handleScrollBy);
scrollTo.addEventListener("click", handleScrollTo);
scrollInto.addEventListener("click", handleScrollInto);
