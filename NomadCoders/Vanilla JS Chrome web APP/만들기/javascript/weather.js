const API_KEY = "340082546e4ba9e873593e5e27441b94";
const COORDS = "coords";
const weatherContainer = document.querySelector(".js-weather");

function getWeather(lat, lng) {
  // fetch(가져올 데이터)
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  )
    .then((response) => response.json()) // response를 json으로 만든다(?)(뭔소리지)
    .then((json) => {
      const temperature = json.main.temp;
      const place = json.name;
      weatherContainer.innerText = `${temperature} @ ${place}`;
    });
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function handleGeoError() {
  console.log("Can't access geo location");
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude: latitude,
    longitude: longitude,
    // key와 value를 같게 저장할 땐 그냥 간단하게
    // latitude,
    // longitude
    // 라고만 해도 됨
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    // isExist
    const parsedCoords = JSON.parse(loadedCoords);
    console.log(parsedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init() {
  loadCoords();
}
init();
