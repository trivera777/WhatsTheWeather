let weather = {
  "apiKey": "b7aa93d2653535fd86c395597ddcf6c8",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" 
      + city 
      + "&units=imperial&appid=" 
      + this.apiKey
      ).then((response) => response.json())
      .then((data) => this.displayWeather(data))
    },
    displayWeather : function(data){
      const {name} = data
      const {icon, description} = data.weather[0]
      const {temp, humidity} = data.main
      const {speed} = data.wind
      document.querySelector(".city").innerText = name
      document.querySelector(".icon").src = `https://openweathermap.org/img/wn/` + icon + `.png`
      document.querySelector(".description").innerText = description
      document.querySelector(".temp").innerText = temp + `°F`
      document.querySelector(".humidity").innerText = `Humidity ` + humidity + `%`
      document.querySelector(".wind").innerText = `Wind speed: ` + speed + ` mph`
      document.querySelector(".weather").classList.remove("loading")
    },
    search: function() {
      this.fetchWeather(document.querySelector(".searchbar").value)
    }
  }
// event listener for the 'click' on search button
document.querySelector(".searchbutton")
.addEventListener("click", function(){
  weather.search()
})
// event listener for the 'enter' key
document.querySelector(".searchbar").addEventListener("keyup", function(event) {
  if(event.key == "Enter"){
    weather.search()
  }
})

weather.fetchWeather("Denver")