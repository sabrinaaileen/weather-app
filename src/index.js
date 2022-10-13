let currentTime = new Date();
currentTime.getHours();
currentTime.getMinutes();
console.log(currentTime.getDay());
function currentDate() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = days[currentTime.getDay()];

  let currentHour = currentTime.getHours();
  let currentMinutes = currentTime.getMinutes();
  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }
  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }

  let formattedDate = `${currentDay} ${currentHour}:${currentMinutes}`;

  //return formattedDate;
  let updatedDate = document.querySelector("#date-today");
  updatedDate.innerHTML = formattedDate;
}

currentDate();

function searchCity(event) {
  event.preventDefault();
  let city = document.querySelector(".searchCity").value;
  search(city);
}

let searching = document.querySelector("#search-form");
searching.addEventListener("submit", searchCity);

function changeHeading(response) {
  let changeCity = document.querySelector("h1");
  changeCity.innerHTML = response.data.name;
  let tempCity = Math.round(response.data.main.temp);
  console.log(tempCity);
  let actualTemp = document.querySelector(".actualTemperature");
  actualTemp.innerHTML = tempCity;
}

function search(city) {
  let apiKey = "2b6fdad0cbd018949c50c70f72250726";
  let units = "metric";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?";
  let apiUrl = `${apiEndpoint}q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(changeHeading);
}
function searchCurrentposition(position) {
  let apiKey = "2b6fdad0cbd018949c50c70f72250726";
  let units = "metric";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?";
  let apiUrl = `${apiEndpoint}lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(changeHeading);
}
function catchLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchCurrentposition);
}

let currentButton = document.querySelector("#button");
currentButton.addEventListener("click", catchLocation);

function showCelsius() {
  let tempCelsius = "19";
  let actualTemp = document.querySelector(".actualTemperature");
  actualTemp.innerHTML = tempCelsius;
}

let getCelsius = document.querySelector(".celsius");
getCelsius.addEventListener("click", showCelsius);

function showFahrenheit() {
  let tempFahrenheit = "66";
  console.log(tempFahrenheit);
  let actualTemp = document.querySelector(".actualTemperature");
  actualTemp.innerHTML = tempFahrenheit;
}

let getFahrenheit = document.querySelector(".fahrenheit");
getFahrenheit.addEventListener("click", showFahrenheit);
