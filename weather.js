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
      console.log(name, icon, description, humidity, temp, speed)
      document.querySelector(".city").innerText = name
      document.querySelector(".icon").src = `https://openweathermap.org/img/wn/` + icon + `.png`
      document.querySelector(".description").innerText = description
      document.querySelector(".temp").innerText = temp + `°F`
      document.querySelector(".humidity").innerText = humidity + `%`
      document.querySelector(".wind").innerText = `Wind speed:` + speed + ` mph`
    },
    search: function () {
      this.fetchWeather(document.querySelector(".input").value)
    }
  }

