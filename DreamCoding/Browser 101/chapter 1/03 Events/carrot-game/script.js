"use strict";
const timer_second = 10;
const clear_carrot_num = 10;
const bug_num = 5;

const body = document.querySelector("body");
const timer = document.querySelector(".timer");
const btn_play_stop = document.querySelector(".btn-play-stop");
const popup = document.querySelector(".popup");
const popup_retry = document.querySelector(".popup__retry");
const ground_container = document.querySelector(".ground_container");
const count = document.querySelector(".count");

const carrotSound = new Audio("./sound/carrot_pull.mp3");
const bugSound = new Audio("./sound/bug_pull.mp3");
const bgSound = new Audio("./sound/bg.mp3");
const alertSound = new Audio("./sound/alert.wav");
const winSound = new Audio("./sound/game_win.mp3");

let timer_count;
let timer_playing = false;
let count_carrot = 0;
let count_bug = 0;

function timer_start() {
  timer_playing = true;
  popup.style.display = "none";
  let second = timer_second;
  clearInterval(timer_count);

  if (second < 10) {
    timer.innerHTML = `0${second}`;
  } else timer.innerHTML = `${second}`;

  btn_play_stop.innerHTML = `<i class="fas fa-stop"></i>`;
  timer_count = setInterval(() => {
    second--;
    if (second <= 10) {
      timer.innerHTML = `0${second}`;
    } else timer.innerHTML = `${second}`;

    if (second < 0) {
      game_stop();
      timer.innerHTML = `Time's Up!`;
      popup.style.display = "flex";
    }
  }, 1000);
}
function timer_stop() {
  timer_playing = false;
  popup.style.display = "flex";
  timer.innerHTML = `Stop`;
  clearInterval(timer_count);
  timer.innerHTML = `00`;

  btn_play_stop.innerHTML = `<i class="fas fa-play"></i>`;
}

function timer_func() {
  timer_playing ? game_stop() : game_start();
}

function create_ground() {
  let ground = document.createElement("div");
  ground.setAttribute("class", "ground");
  ground_container.appendChild(ground);

  let carrot;
  let bug;
  let tempX, tempY;

  for (let i = 0; i < clear_carrot_num; i++) {
    carrot = document.createElement("img");
    carrot.setAttribute("class", "things");
    carrot.classList.add("carrot");
    carrot.setAttribute("src", "./img/carrot.png");

    tempX = Math.random();
    tempY = Math.random();
    carrot.style.transform = `translate(
      ${Math.floor(tempX * 88 + 1)}vw,
      ${Math.floor(tempY * 37 + 1)}vh)`;
    ground.appendChild(carrot);
  }
  for (let i = 0; i < bug_num; i++) {
    carrot = document.createElement("img");
    carrot.setAttribute("class", "things");
    carrot.classList.add("bug");
    carrot.setAttribute("src", "./img/bug.png");

    tempX = Math.random();
    tempY = Math.random();
    carrot.style.transform = `translate(
      ${Math.floor(tempX * 88 + 1)}vw,
      ${Math.floor(tempY * 37 + 1)}vh)`;
    ground.appendChild(carrot);
  }
}

function game_start() {
  count.innerHTML = ``;
  timer_start();
  create_ground();
  bgSound.currentTime = 0;
  bgSound.play();
}

function game_stop() {
  timer_stop();
  count_carrot = 0;
  count_bug = 0;
  popup.children[1].innerHTML = "Retry?";
  document.querySelector(".ground").remove();
}

function game_clear() {
  game_stop();
  winSound.play();
  popup.children[1].innerHTML = "Great!";
  timer.innerHTML = `Clear`;
}

function catch_things(event) {
  if (event.target.classList[1] === "carrot") {
    count_carrot++;
    count.innerHTML = `${count_carrot}`;
    carrotSound.play();
    event.target.remove();

    if (count_carrot === clear_carrot_num) game_clear();
  }
  if (event.target.classList[1] === "bug") {
    bugSound.play();
    game_stop();
  }
}

btn_play_stop.addEventListener("click", timer_func);
popup_retry.addEventListener("click", timer_func);
ground_container.addEventListener("click", catch_things);
bgSound.play();
