let API_KEY = "d798192c0b556ee573218f69ff4f47a1";

getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather?q="+`${city}` + "&appid=" + `${API_KEY}` + "&units=metric";
  let weather = fetch(URL);

  return weather.then ((response) => {
    // console.log(response.json());
    return response.json();
  })
}

searchCity = () => {
  const city = document.getElementById('city-input').value;
  getWeatherData(city)
   .then((response) => {
     console.log(response);
     showWeatherData(response);
   }).catch ((error) => {
     console.log(error);
   })

}

showWeatherData = (weatherData) => {
  let icon =  weatherData.weather[0].icon;
  let iconurl = "https://openweathermap.org/img/w/" + icon + ".png";
  document.getElementById('city-name').innerText = weatherData.name;
  document.getElementById('weather-type').innerText = weatherData.weather[0].main;
  document.getElementById('temp').innerText = weatherData.main.temp;
  document.getElementById('min-temp').innerText = weatherData.main.temp_min; 
  document.getElementById('max-temp').innerText = weatherData.main.temp_max; 
  document.getElementById('icon').src = iconurl;
}

