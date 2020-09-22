"use strict";

const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");
const target = document.querySelector(".target");
const tag = document.querySelector(".tag");

const clX = document.documentElement.clientWidth;
const clY = document.documentElement.clientHeight;

addEventListener("load", () => {
  const targetRect = target.getBoundingClientRect();
  const targetHalfWidth = targetRect.width / 2;
  const targetHalfHeight = targetRect.height / 2;

  function onMouseMove(event) {
    const x = event.clientX;
    const y = event.clientY;

    console.log(targetHalfWidth);

    vertical.style.transform = `translate(${x}px, 0)`;
    horizontal.style.transform = `translate(0, ${y}px)`;
    target.style.transform = `translate(${x - targetHalfWidth}px, ${
      y - targetHalfHeight
    }px)`;
    tag.style.transform = `translate(${x + 25}px, ${y + 25}px)`;

    tag.innerText = `X: ${x}px
    Y: ${y}px`;
  }

  document.addEventListener("mousemove", onMouseMove);
});

function onmouseover(event) {
  vertical.style.left = `0`;
  horizontal.style.top = `0`;
  target.style.top = `0`;
  target.style.left = `0`;
  tag.style.top = `0`;
  tag.style.left = `0`;

  tag.style.fontSize = `25px`;
}

function onmouseleave(event) {
  vertical.style.left = `50%`;
  horizontal.style.top = `50%`;
  target.style.top = `50%`;
  target.style.left = `50%`;
  tag.style.top = `50%`;
  tag.style.left = `50%`;
  tag.style.fontSize = `30px`;

  vertical.style.transform = `translate(0, 0)`;
  horizontal.style.transform = `translate(0, 0)`;
  target.style.transform = `translate(-50%, -50%)`;
  tag.style.transform = `translate(25px, 25px)`;

  tag.innerText = `hmm...`;
}

document.addEventListener("mouseover", onmouseover);
document.addEventListener("mouseleave", onmouseleave);
