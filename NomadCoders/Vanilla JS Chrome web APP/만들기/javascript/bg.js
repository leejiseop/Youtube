// 배경 이미지를 로딩한 후 끊기지 않고 한번에 보여주기
const body = document.querySelector("body");

const IMG_NUMBER = 5;

// API에서 받아온게 아니라 동작하지는 않는데, 이런것도 있다
// function handleImageLoad() {
//   console.log("finished loading");
// }

function paintImage(IMG_NUMBER) {
  const image = new Image();
  image.src = `images/${IMG_NUMBER + 1}.jpg`;
  image.classList.add("bgImage");

  body.appendChild(image);
  // API에서 받아온게 아니라 동작하지는 않는데, 이런것도 있다
  // image.addEventListener("loadend", handleImageLoad);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER); // 0~4
  return number;
}

function init() {
  const randomNumber = genRandom(); // 0~4
  paintImage(randomNumber); // 0~4
}
init();
