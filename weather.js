const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");
const currentWeatherItemsEl = document.getElementById("currentWeather");
const timezone = document.getElementById("timeZone");
const countryEl = document.getElementById("country");
const weatherForecastEl = document.getElementById("weatherForecast");
const currentTempEl = document.getElementById("currentTemp");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

// const API_key = "b7aa93d2653535fd86c395597ddcf6c8";

setInterval(() => {
  const time = new Date();
  const month = time.getMonth();
  const date = time.getDate();
  const day = time.getDay();
  const hour = time.getHours();
  const minutes = time.getMinutes();
  const hours24format = hour >= 13 ? hour % 12 : hour;
  const amPm = hour >= 12 ? "PM" : "AM";

  timeEl.innerHTML =
    hours24format + ":" + minutes + `<span id="amPm">${amPm}</span>`;

  dateEl.innerHTML = days[day] + ", " + months[month] + " " + date;
}, 1000);

getWeatherData();
function getWeatherData() {
  navigator.geolocation.getCurrentPosition((success) => {
    console.log(success);
    let { latitude, longitude } = success.coords;

    fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=imperial&appid=${API_key}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        showWeatherData(data);
      });
  });
}
function showWeatherData(data) {
  let { temp, humidity, clouds, wind_speed } = data.current;

  currentWeatherItemsEl.innerHTML = ` 
    <div class="weatherItem">
      <div>Temp</div>
      <div>${temp}°F</div>
    </div>
    <div class="weatherItem">
      <div>Humidity</div>
      <div>${humidity}%</div>
    </div>
    <div class="weatherItem">
     <div>Cloudiness</div>
     <div>${clouds}%</div>
    </div>
    <div class="weatherItem">
      <div>Wind Speed</div>
      <div>${wind_speed}mph</div>
    </div>
  `;
}
