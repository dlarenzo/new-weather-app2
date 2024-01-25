const URL =
  "https://api.openweathermap.org/data/2.5/weather?lat=40.5308&lon=-112.2983&appid=a6e100d4acc39477dd37c1f40f6c2361&units=imperial";

let stats = document.querySelector("#stats");
let summary = document.querySelector("#summary");
let currentDesc = document.querySelector("#current-desc");
let city = document.querySelector("#five-city");
let currentTemp = document.querySelector("#current-temp");
let currentWindChill = document.querySelector("#current-windChill");
let currentHumid = document.querySelector("#current-humid");
let currentWindSpeed = document.querySelector("#current-windSpeed");

fetch(URL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    //Location CORRECT
    city.textContent = jsObject.name;

    //Weather Description CORRECT
    //discovered it was written as an array but there was only one object LOL
    currentDesc.textContent = jsObject.weather[0].description;

    console.log();

    //Temperature CORRECT
    currentTemp.textContent = Math.floor(jsObject.main.temp);

    //Wind Chill????? DOESN'T EXIST IN THE API
    currentWindChill.textContent = Math.floor(jsObject.wind.speed);

    //Humidity CORRECT
    currentHumid.textContent = jsObject.main.humidity;

    //Wind Speed CORRECT
    currentWindSpeed.textContent = Math.floor(jsObject.wind.speed);
  });

//TODO -  SPEND EXTRA TIME ON THE JS FOR THE CAT ARTICLES THIS WEEKEND.
