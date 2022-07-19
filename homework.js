function currentDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  let day = days[date.getDay()];
  let upDate = `${day}, ${hours}:${minutes}`;

  return upDate;
}
let now = new Date();
let currentTime = document.querySelector('#date');
currentTime.innerHTML = currentDate(now);

function showWeather(response) {
  document.querySelector('.region').innerHTML = response.data.name;
  document.querySelector('#temperature').innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector('#humidity').innerHTML = response.data.main.humidity;
  document.querySelector('#wind').innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector('#description').innerHTML =
    response.data.weather[0].main;
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector('#cityInfo').value;
  searchCity(city);
}

function searchCity(city) {
  let apiKey = 'dc4867c7e70cb097c34a05c3fcfb260d';
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showWeather);
}

let searchForm = document.querySelector('#cityForm');
searchForm.addEventListener('submit', handleSubmit);

function myPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let units = 'metric';
  let apiKey = 'dc4867c7e70cb097c34a05c3fcfb260d';
  let apiGeolocation = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

  axios.get(apiGeolocation).then(showWeather);
}

function current(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(myPosition);
}

let currentPosition = document.querySelector('#current-button');
currentPosition.addEventListener('click', current);

searchCity('Paris');
