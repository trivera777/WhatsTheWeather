const timeEl = document.getElementById('time')
const dateEl = document.getElementById('date')
const currentWeatherItemsEl = document.getElementById('currentWeatherItems')
const timezone = document.getElementById('timeZone')
const countryEl = document.getElementById('country')
const weatherForecastEl = document.getElementById('weatherForecast')
const currentTempEl = document.getElementById('currentTemp')

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

setInterval(() => {
    const time = new Date()
    const month = time.getMonth()
    const date = time .getDate()
    const day = time.getDay()
    const hour = time.getHours()
    const minutes = time.getMinutes()
    const hours24 = hour >= 13 ? hour %12: hour;
    const amPm = hours >=12 ? 'PM' : 'AM'

    timeEl.innerHTML = hours24 + minutes + " " + `<span id="amPm">${amPm}</span>`

    dateEl.innerHTML = 

}, 1000);