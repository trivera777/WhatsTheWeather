const timeEl = document.getElementById('time')
const dateEl = document.getElementById('date')
const currentWeatherItemsEl = document.getElementById('currentWeatherItems')
const timezone = document.getElementById('timeZone')
const countryEl = document.getElementById('country')
const weatherForecastEl = document.getElementById('weatherForecast')
const currentTempEl = document.getElementById('currentTemp')

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

const APIKEY = '6f10f5840c5d2d00afdcc01e2fa2a463'

setInterval(() => {
    const time = new Date()
    const month = time.getMonth()
    const date = time .getDate()
    const day = time.getDay()
    const hour = time.getHours()
    const minutes = time.getMinutes()
    const hours24 = hour >= 13 ? hour %12: hour;
    const amPm = hour >=12 ? 'PM' : 'AM'

    timeEl.innerHTML = hours24 + ':' + minutes + " " + `<span id="amPm">${amPm}</span>`

    dateEl.innerHTML = days[day] + ', ' + date + ' ' + months[month]

}, 1000);

function getWeatherData(){
    navigator.geolocation.getCurrentPosition((success) => {
        console.log(success);
    })
}