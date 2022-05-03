const timeEl = document.getElementById('time')
const dateEl = document.getElementById('date')
const currentWeatherItemsEl = document.getElementById('currentWeatherItems')
const timezone = document.getElementById('timeZone')
const countryEl = document.getElementById('country')
const weatherForecastEl = document.getElementById('weatherForecast')
const currentTempEl = document.getElementById('currentTemp')

setInterval(() => {
    const time = new Date()
    const month = time.getMonth()
    const date = time .getDate()
    const day = time.getDay()
    const hour = time.getHours()
    const minutes = time.getMinutes()
}, 1000);