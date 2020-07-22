"use strict";

const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
// querySelector 하면 하나만 읽어와서 안됨
// Array.from(colors) // colors를 array로 읽어온다(?)
const range = document.querySelector("#jsRange");
const mode = document.querySelector("#jsMode");
const save = document.querySelector("#jsSave");

const INITIAL_COLOR = "#2c2c2c";

canvas.width = 700;
canvas.height = 500;

// 초기 캔버스 배경색 투명 방지
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.strokeStyle = INITIAL_COLOR; // 기본 색
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!filling) {
    if (!painting) {
      ctx.beginPath();
      ctx.moveTo(x, y); // moves the starting point
    } else {
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  }
}

function startPainting() {
  painting = true;
}

function stopPainting() {
  painting = false;
}

function handleColorClick(event) {
  // console.log(event);
  // console.log(event.target);
  // console.log(event.target.style.backgroundColor);

  Array.from(colors).forEach((color) => {
    color.classList.remove("selectedColor");
  });
  event.target.classList.add("selectedColor");

  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function handleRangeChange(event) {
  // console.log(event.target.value);
  ctx.lineWidth = event.target.value;
}

function handleModeClick(event) {
  if (filling === true) {
    filling = false;
    mode.innerText = "fill";
  } else {
    // filling === false
    filling = true;
    mode.innerText = "paint";
  }
}

function handleCanvasClick(event) {
  if (filling) {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}

function handleCM(event) {
  event.preventDefault(); // 우클릭 막음
}

function handleSaveClick(event) {
  const image = canvas.toDataURL("image/png", 1.0);
  const link = document.createElement("a"); // 임의의 a 태그를 만들어서
  link.href = image; // href 속성에 image 넣고
  link.download = "PaintJS Download"; // file name
  link.click();
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
  canvas.addEventListener("contextmenu", handleCM);
}

Array.from(colors).forEach((color) =>
  color.addEventListener("click", handleColorClick)
);

if (range) {
  range.addEventListener("input", handleRangeChange);
}

if (mode) {
  mode.addEventListener("click", handleModeClick);
}

if (save) {
  save.addEventListener("click", handleSaveClick);
}
