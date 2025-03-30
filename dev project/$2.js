const apiKey = "4e9a76b79cd49fd1a75350c468ce50ad";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=jammu"

const SearchBox = document.querySelector(".search input");
const SearchBtn = document.querySelector(".search button");
const WeatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if(response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }
  else{
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "m/s";
  }
  if(data.weather[0].main == "clouds"){
      WeatherIcon.src = "images/clouds.png";
  }
  else if(data.weather[0].main == "clear"){
    WeatherIcon.src = "images/clear.png";
  }
  else if(data.weather[0].main == "drizzle"){
    WeatherIcon.src = "images/drizzle.png";
  }
  else if(data.weather[0].main == "rain"){
    WeatherIcon.src = "images/rain.png";
  }
  else if(data.weather[0].main == "mist"){
    WeatherIcon.src = "images/mist.png";
  }
  document.querySelector(".weather").style.display ="block";
  document.querySelector(".error").style.display = "none";
  }
  


SearchBtn.addEventListener("click" ,()=>{
  checkWeather(SearchBox.value);
});

