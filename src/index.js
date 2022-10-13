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
  let city = document.querySelector(".searchCity");

  let apiKey = "2b6fdad0cbd018949c50c70f72250726";
  let units = "metric";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather?";
  let apiUrl = `${apiEndpoint}q=Munich&appid=${apiKey}&units=${units}`;

  console.log(city.value);
  let changeCity = document.querySelector("h1");
  changeCity.innerHTML = city.value;
  axios.get(apiUrl).then([showTemperature], [showCelsius], [showFahrenheit]);
}
let searching = document.querySelector("#search-form");
searching.addEventListener("submit", searchCity);

function showTemperature(response) {
  let tempCity = Math.round(response.data.main.temp);
  console.log(tempCity);
  let actualTemp = document.querySelector(".actualTemperature");
  actualTemp.innerHTML = tempCity;
}

function showCelsius(response) {
  let tempCelsius = Math.round(response.data.main.temp);
  let actualTemp = document.querySelector(".actualTemperature");
  actualTemp.innerHTML = tempCelsius;
}

let getCelsius = document.querySelector(".celsius");
getCelsius.addEventListener("click", showCelsius);

function showFahrenheit(response) {
  let tempFahrenheit = Math.round((response.data.main.temp * 9) / 5 + 32);
  console.log(tempFahrenheit);
  let actualTemp = document.querySelector(".actualTemperature");
  actualTemp.innerHTML = tempFahrenheit;
}

let getFahrenheit = document.querySelector(".fahrenheit");
getFahrenheit.addEventListener("click", showFahrenheit);
