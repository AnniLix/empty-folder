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

function temperature(response) {
  console.log(response.data);
  let temperat = Math.round(response.data.main.temp);
  let tempElement = document.querySelector('#temperature');
  tempElement.innerHTML = temperat;
}
function searchCity(city) {
  let key = '98f63ab964a6f17c8f87a4018e522a54';
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
  axios.get(url).then(temperature);
}

function citySubmit(event) {
  event.preventDefault();
  let city = document.querySelector('#cityInfo').value;
  let citySearch = document.querySelector('h1');
  citySearch.innerHTML = city;

  searchCity(city);
}

let search = document.querySelector('#cityForm');
search.addEventListener('submit', citySubmit);

let search2 = document.querySelector('#button');
search2.addEventListener('click', citySubmit);

function convert(event) {
  event.preventDefault();
  let tempLink = document.querySelector('#temperature');
  tempLink.innerHTML = 25;
}
let temp = document.querySelector('#celsius');
temp.addEventListener('click', convert);

function convert2(event) {
  event.preventDefault();
  let tempLink2 = document.querySelector('#temperature');
  let currentTemp = 25;
  let fahrengeit = Math.round(currentTemp * 1.8 + 32);
  tempLink2.innerHTML = fahrengeit;
}
let temp2 = document.querySelector('#fahrengeit');
temp2.addEventListener('click', convert2);
